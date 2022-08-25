# SQL中Explain需要关注的关键字
| 字段          | 名称          | 含义             |
| ------------- | ------------- | ---------------- |
| id            | select_id     | 该语句的唯一标识 |
| select_type   | 无            | 查询类型         |
| table         | table_name    | 表名             |
| possible_keys | possible_keys | 可能的索引选择   |
| key           | key              | 实际选择的索引   |
| key_len       |    key_len           | 索引的长度       |
| ref           |ref| 索引的那一列     |
| rows          |rows| 估计要扫描的行数 |
| filterd       |    filterd           | 符合查询条件的数据所占的比例 |
| extra       |        extra       |额外信息                  |

## id
该语句的唯一标识。如果explain的结果包括多个id值,则数字越大越先执行;而对于相同id的行,则表示从上往下依次执行。

## select_type
> 类型如下表:

| 字段          | 名称          |
| ------------- | ------------- |
|simple|简单查询(未使用union或子查询)|
|primary|最外层的查询|
|union|在union中的第二个和随后的select被标记为union.如果union呗from的句中的字查询包含,那么他的第一个select会被标记为derived|
|dependent union|union中的第二个或后面的查询,依赖了外面的查询|
|union result|union的结果|
|subquery|子查询中的第一个select|
|dependent subquery|子查询中的第一个select,依赖了外面的查询|
|derived|用来表示包含在from子句的子查询中的select,MySql会递归执行并将结果放到一个临时表中,此为派生表|
|dependent derived|派生表,依赖了其他表|
|materialized|物化字查询|
|uncacheable subquery|字查询,结果无法缓存,必须针对外部查询的每一行重新评估|
|uncacheable union|union属于unchacheable subquery的第二个或后面的查询|

## table 
表示当前这一行正在访问哪张表,如果SQL定义了别名,则展示表的别名

## partitions

当前查询匹配记录的分区。对于未分区的表,返回null

## type
连接类型,有如下几种取值,性能从好到坏排序 如下: 

* system: 该表只有一行(相当于系统表),system是const类型的特例
* const: 针对主键或唯一索引的等值查询扫描, 最多只返回一行数据. const 查询速度非常快, 因为它仅仅读取一次即可
* eq_ref: 当使用了索引的全部组成部分,并且索引是PRIMARY KEY或UNIQUE NOT NULL 才会使用该类型,性能仅次于system及const。
> 

**例子:**

> ```sql title="多表关联查询,单行匹配"
SELECT * FROM ref_table,other_table
  WHERE ref_table.key_column=other_table.column;
```

> ```sql  title="多表关联查询,联合索引,多行匹配"
SELECT * FROM ref_table,other_table
  WHERE ref_table.key_column_part1=other_table.column
  AND ref_table.key_column_part2=1;
# ref: 当满足索引的最左前缀规则,或者索引不是主键也不是唯一索引时才会发生。
# 如果使用的索引只会匹配到少量的行,性能也是不错的。
```

> ```sql  title="根据索引(非主键,非唯一索引),匹配到多行"
SELECT * FROM ref_table WHERE key_column=expr;
```

>   ```sql  title="多表关联查询,单个索引,多行匹配"
    SELECT * FROM ref_table,other_table
    WHERE ref_table.key_column=other_table.column;
    ```

> ```sql  title="多表关联查询,联合索引,多行匹配"
SELECT * FROM ref_table,other_table
  WHERE ref_table.key_column_part1=other_table.column
  AND ref_table.key_column_part2=1;
```

:::tip TIPS

    最左前缀原则,指的是索引按照最左优先的方式匹配索引。比如创建了一个组合索引(column1, column2, column3),那么
    如果查询条件是:
    WHERE column1 = 1                   (可以使用该索引)
    WHERE column1 = 1 AND column2 = 2   (可以使用该索引)
    WHERE column1 = 1 AND column2 = 2 AND column3 = 3 (可以使用该索引)
    WHERE column2 = 2                   (无法匹配该索引)
    WHERE column1 = 1 AND column3 = 3   (无法匹配该索引)

:::

* **fulltext**: 全文索引

* **ref_or_null**: 该类型类似于ref,但是MySQL会额外搜索哪些行包含了NULL。这种类型常见于解析子查询
```sql
SELECT * FROM ref_table
  WHERE key_column=expr OR key_column IS NULL;
```
* **index_merge**: 此类型表示使用了索引合并优化,表示一个查询里面用到了多个索引
* **unique_subquery**: 该类型和eq_ref类似,但是使用了IN查询,且子查询是主键或者唯一索引。例如: 
```sql
value IN (SELECT primary_key FROM single_table WHERE some_expr)
```
* **index_subquery**: 和unique_subquery类似,只是子查询使用的是非唯一索引

> ```sql
value IN (SELECT key_column FROM single_table WHERE some_expr)
```

* **range**: 范围扫描,表示检索了指定范围的行,主要用于有限制的索引扫描。比较常见的范围扫描是带有BETWEEN子句或WHERE子句里有>、>=、<、<=、IS NULL、<=>、BETWEEN、LIKE、IN()等操作符。

> ```sql
SELECT * FROM tbl_name
  WHERE key_column BETWEEN 10 and 20;
```

> ```sql
SELECT * FROM tbl_name
  WHERE key_column IN (10,20,30);
```

* **index**: 全索引扫描,和ALL类似,只不过index是全盘扫描了索引的数据。当查询仅使用索引中的一部分列时,可使用此类型。有两种场景会触发: 
如果索引是查询的覆盖索引,并且索引查询的数据就可以满足查询中所需的所有数据,则只扫描索引树。此时,explain的Extra 列的结果是Using index。index通常比ALL快,因为索引的大小通常小于表数据。
按索引的顺序来查找数据行,执行了全表扫描。此时,explain的Extra列的结果不会出现Uses index。


* **ALL**: 全表扫描,性能最差。


## possible_keys

展示当前查询可以使用哪些索引,这一列的数据是在优化过程的早期创建的,因此有些索引可能对于后续优化过程是没用的。

## key

表示MySQL实际选择的索引

## key_len

索引使用的字节数。由于存储格式,当字段允许为NULL时,key_len比不允许为空时大1字节。

key_len计算公式： https://www.cnblogs.com/gomysql/p/4004244.html
:::tip 计算公式
    key_len的长度计算公式：
    charset = (character set：utf8=3,gbk=2,latin1=1)

    varchr(10)变长字段且允许NULL = 10 * charset+1(NULL)+2(变长字段)
    varchr(10)变长字段且不允许NULL = 10 * charset+2(变长字段)

    char(10)固定字段且允许NULL = 10 * charset+1(NULL)
    char(10)固定字段且不允许NULL = 10 * charset
:::

## ref

表示将哪个字段或常量和key列所使用的字段进行比较。

如果ref是一个函数,则使用的值是函数的结果。要想查看是哪个函数,可在EXPLAIN语句之后紧跟一个SHOW WARNING语句。

## rows

MySQL估算会扫描的行数,数值越小越好。

## filtered

表示符合查询条件的数据百分比,最大100。用rows × filtered可获得和下一张表连接的行数。例如rows = 1000,filtered = 50%,则和下一张表连接的行数是500。

:::tip TIPS
  
    在MySQL 5.7之前,想要显示此字段需使用explain extended命令;
    MySQL.5.7及更高版本,explain默认就会展示filtered

:::

## extra

常用见的几种状态。

1. **Using filesort**
> 这种情况是在使用 order by 关键字的时候,如果待排序的内容无法通过索引直接直接进行排序,mysql就有可能进行文件排序。
> 当然不是说出现了此情况就会对sql语句的效率造成影响。但是由于查询次数过多的话,对于排序的效率还是有一定的影响的。
> 可以通过设置 max_length_for_sort_data 来 提高 order by 的效率。如果操作的数据大小高于max_length_for_sort_data 的缓存大小时,mysql会产生临时表进行查询,一定程度上会印象效率。 max_length_for_sort_data的默认值是1024。

:::tip 优化方案

优化业务逻辑,不使用 order by ,而在业务代码中执行排序方法
设置索引,将带排序的内容放在索引中,直接利用索引进行排序

:::
 
2. **Using index**
> 使用索引,表示索引能够覆盖所有的查询字段,无需进行回表查询所以效率会高。大部分情况代表最优

3. **Using where** 单独出现
> 表示当前查询的字段不能被索引覆盖,所以可能会产生回表,效率比前者低

4. **Using where;Using index**
> 表示查询的列被索引覆盖,且where筛选条件是索引列前导列的一个范围,或者是索引列的非前导列。 效率也比较高

5. **Null**
> 表示查询的列未被索引覆盖,且where筛选条件是索引的前导列,这意味着用到了索引,但是部分字段未被索引覆盖,必须通过“回表查询”来实现,因而性能也比前两者差。

6. **Using index condition**
> 表示查询条件中虽然出现了索引列,但是有部分条件无法使用索引,会根据能用索引的条件先搜索一遍再匹配无法使用索引的条件。 


### 通过docker部署mysql环境

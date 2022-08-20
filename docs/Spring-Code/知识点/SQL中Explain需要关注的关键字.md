# SQL中Explain需要关注的关键字
## TYPE
all index range ref constant 效率增高
all 全盘扫描 效率低下
index 扫描到索引
range 范围查询
ref 命中非唯一
constant 命中唯一索引，数据可能只有一条 

## key
none 未命中索引
rose 
## extra 
表示sql的额外信息

## mysql的索引类型，B+索引
所有数据都在叶子节点

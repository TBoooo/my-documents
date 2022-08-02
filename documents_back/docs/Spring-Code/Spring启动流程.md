---
sidebar_position: 1
---

# Spring 流程图

## 源码如下
```java
public void refresh() throws BeansException, IllegalStateException {
        synchronized (this.startupShutdownMonitor) {
            // Prepare this context for refreshing.
            /**
             * 准备工作：
             * 设置启动时间、是否激活标识位
             * 初始化属性源（property source）配置
             */
            prepareRefresh();

            // Tell the subclass to refresh the internal bean factory.
            /**
             * 告诉子类刷新内部bean工厂
             * 拿到DefaultListableBeanFactory,供后面方法调用
             */
            ConfigurableListableBeanFactory beanFactory = obtainFreshBeanFactory();

            // Prepare the bean factory for use in this context.
            /**
             * 准备bean工厂
             */
            prepareBeanFactory(beanFactory);

            try {
                // Allows post-processing of the bean factory in context subclasses.
                /**
                 * 这个方法在当前版本没有实现
                 * 可能在spring后面的版本会去扩展
                 */
                postProcessBeanFactory(beanFactory);

                // Invoke factory processors registered as beans in the context.
                /**
                 * 在上下文中调用注册为bean的工厂处理器
                 *
                 * 添加BeanPostProcessor
                 * 如果发现loadTimeWeaver的Bean
                 */
                invokeBeanFactoryPostProcessors(beanFactory);

                // Register bean processors that intercept bean creation.
                /**
                 * 注册BeanPostProcessor
                 * 自定义以及spring内部的
                 */
                registerBeanPostProcessors(beanFactory);

                // Initialize message source for this context.
                /**
                 * 国际化支持，不关心
                 */
                initMessageSource();

                // Initialize event multicaster for this context.
                /**
                 * 初始化事件监听多路广播器
                 */
                initApplicationEventMulticaster();

                // Initialize other special beans in specific context subclasses.
                /**
                 * 这个方法在当前版本没有实现
                 * 可能在spring后面的版本会去扩展
                 */
                onRefresh();

                // Check for listener beans and register them.
                /**
                 * 注册监听器
                 */
                registerListeners();

                // Instantiate all remaining (non-lazy-init) singletons.
                /**
                 * 实例化所有bean
                 */
                finishBeanFactoryInitialization(beanFactory);

                // Last step: publish corresponding event.
                finishRefresh();
            } catch (BeansException ex) {
                if (logger.isWarnEnabled()){
                    logger.warn("Exception encountered during context initialization - " +
                            "cancelling refresh attempt: " + ex);
                }

                // Destroy already created singletons to avoid dangling resources.
                destroyBeans();

                // Reset 'active' flag.
                cancelRefresh(ex);

                // Propagate exception to caller.
                throw ex;
            } finally {
                // Reset common introspection caches in Spring's core, since we
                // might not ever need metadata for singleton beans anymore...
                resetCommonCaches();
            }
        }
    }

```
## prepareRefresh()
> 刷新上下文环境,初始化上下文环境，对系统的环境变量或者系统属性进行准备和校验
* 进行环境初始化
* 记录启动时间
* 校验xml配置
* 初始化applicationListeners监听容器

## ConfigurableListableBeanFactory beanFactory = obtainFreshBeanFactory()
>
* 为上下文准备BeanFactory，即对BeanFactory的各种功能进行填充，如常用的注解@Autowired @Qualifier等
* 设置SPEL表达式#{key}的解析器
* 设置资源编辑注册器，如PerpertyEditorSupper的支持
* 添加ApplicationContextAwareProcessor处理器
* 在依赖注入忽略实现*Aware的接口，如EnvironmentAware、ApplicationEventPublisherAware等
* 注册依赖，如一个bean的属性中含有ApplicationEventPublisher(beanFactory)，则会将beanFactory的实例注入进去

## prepareBeanFactory(beanFactory)
>
* 设置类加载器
* 设置EL表达式解析器（Bean创建完成填充属性时使用）和属性注册解析器
* 利用BeanPostProcessor的特性给各种Aware接口的实现类注入ApplicationContext中对应的属性
* 设置各种Aware接口的实现类为忽略自动装配
* 设置自动装配的类（BeanFactory，ResourceLoader，ApplicationEventPublisher，ApplicationContext）
* 如果BeanFactory中存在loadTimeWeaver的bean，那么需要添加动态织入功能
* 注册各种可用组件（environment，systemProperties，systemEnvironment）

## postProcessBeanFactory(beanFactory)
>
* 首先调用context传入的BeanDefinitionRegistryPostProcessor接口
* 调用Spring注入的BeanDefinitionRegistryPostProcessor接口（ConfigurationClassPostProcessor#postProcessBeanDefinitionRegistry => 包扫描，Import等）会添加到已执行的集合中
* 调用扫描出来的BeanDefinitionRegistryPostProcessor接口实现类（分三个级别调用）会添加到已执行的集合中
* 调用所有的BeanDefinitionRegistryPostProcessor接口的postProcessBeanFactory方法
* 调用context.add手动注入的BeanFactoryPostProcessor接口的postProcessBeanFactory方法（不会添加到已执行集合中）
* 最终获取容器中所有的BeanFactoryPostProcessor接口的实现类，逐一检查是否回调过，没有回调的根据优先级回调（context添加的BeanFactoryPostProcessor、spring扫描的BeanFactoryPostProcessor）

## invokeBeanFactoryPostProcessors(beanFactory)
>

## registerBeanPostProcessors(beanFactory)
>

## initMessageSource()
>

## initApplicationEventMulticaster()
>

## onRefresh()
>

## registerListeners()
>

## finishBeanFactoryInitialization(beanFactory)
>

## finishRefresh()
>

## destroyBeans()
>

## cancelRefresh(ex)
>

## resetCommonCaches()
>


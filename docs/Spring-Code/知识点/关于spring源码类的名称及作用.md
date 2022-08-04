---
sidebar_position: 1
---

# 关于Spring源码类的名称及作用

* BeanFactory：是Spring简单工厂模式的接口类，是SpringIOC核心类，提供从工厂中获取bean的各种方法，是所有bean容器
* FactoryBean：FactoryBean首先是一个bean，但它又是一个能产生bean的工厂，主要作用就是提供了一种灵活创建bean的方式，让用户可以定制实例化bean的逻辑。
* DefaultListableBeanFactory: 是整个bean加载的核心类,是Spring注册及加载bean的默认实现,这是最牛的BeanFactory
* BeanDefinition: Spring中用来描述bean的一个接口,看源码有哪些描述
* BeanDefinitionRegistry: 主要是向注册表中注册 BeanDefinition 实例，完成 注册的过程
* AnnotatedBeanDefinitionReader: 创建一个读取注解的Bean定义读取器
* ClassPathBeanDefinitionScanner: 在IOC容器中初始化一个 按类路径扫描注解bean的 扫描器
* ConversionService: 最有用的场景就是，它用来将前端传过来的参数和后端的 controller 方法上的参数进行绑定的时候用


---
sidebar_position: 2
---

# BeanFactory 和 FactoryBean 的区别
## BeanFactory
> BeanFactory是spring IOC容器的顶层接口，定义了IOC容器的通用方法和规范。

## FactoryBean
> * FactoryBean首先是一个bean，但它又是一个能产生bean的工厂，主要作用就是提供了一种灵活创建bean的方式，让用户可以定制实例化bean的逻辑。
> * 获取普通bean，getBean(beanName)
> * 获取工厂bean，getBean("&"+beanName)，前面加&。
> * 比如AOP中的ProxyFactoryBean，模拟代理对象的逻辑：

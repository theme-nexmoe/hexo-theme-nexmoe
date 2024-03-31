---
sidebar_position: 1
---

# 快速开始

:::tip
你也可以用本项目的示例快速起步 [Nexmoe 主题 Hexo 示例，帮助你快速起步](https://github.com/theme-nexmoe/hexo-theme-nexmoe-example)
:::

在使用 Nexmoe 之前，请仔细阅读 [Hexo 的官方文档](https://hexo.io/zh-cn/docs/)，完成对 Hexo 的安装，并完成对 `config.yml` 的基本配置（标题、介绍、作者、时区、语言等）

## 使用 NPM 安装主题

在 Hexo 的根目录下运行

```shell
npm i hexo-theme-nexmoe@3.2.13
```

## 安装 WordCount（必须）

其他主题不同，安装 Nexmoe 需要额外的步骤

主题默认已经集成了文章【字数统计】、【阅读时长】统计功能，需要WordCount的支持

运行如下命令安装

```shell
npm i --save hexo-wordcount
```

## 启用 Nexmoe

在 `config.yml` 中，修改 `theme` 的值为 `nexmoe`

## 配置 Nexmoe

安装好主题后，在 Hexo 根目录下修改 `_config.nexmoe.yml`

## 运行 Nexmoe

在站点根目录下运行下面的命令在本地启动一个 Hexo Server

```shell
hexo s --debug
```

> 在服务启动的过程，注意观察命令行输出是否有任何异常信息，如果你碰到问题，这些信息将帮助他人更好的定位错误。

当命令行输出下述内容时说明 Hexo 已经监听在本机的 4000 端口，使用浏览器访问 `http://localhost:4000/` ，检查站点是否正确运行

```shell
INFO  Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.
```

> 如果你在使用过程中遇到问题，请尝试在文档中进行搜索，或者在 GitHub 上提出 [issue](https://github.com/nexmoe/hexo-theme-nexmoe/issues/new)

## 更新 Nexmoe

使用 NPM 的 install 命令即可升级

```shell
npm i hexo-theme-nexmoe
```

更新后在 Hexo 根目录下对照`_config.new.yml` 修改 `_config.nexmoe.yml`

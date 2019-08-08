# Welcome to Nexmoe

## Introduction

Hexo is a static site generator which is based on [Node.js](https://nodejs.org/) You can learn how to install Hexo and generate your own website or blog at [Hexo’s Official Documents.](https://hexo.io/docs) .

>In this documentation, we suppose you have already successfully installed hexo and finished `hexo init` to set up a site.

There are two configuration files in Hexo Project, one in the root directory of your Hexo Project and the other in the theme directory. For the convenience of description, the former is referred to as `_config.yml`；and the latter as `_config.yml`.

Before using “Nexmoe” theme, please read [Hexo’s Official Documents](https://hexo.io/docs)，carefully and configure the basic configuration, such as title, subtitle, description, author, timezone, language etc.

##Download

#### [Download latest Release](https://github.com/nexmoe/hexo-theme-nexmoe/releases/latest)

>The latest release. Recommended for most users.

#### [Download other version](https://github.com/nexmoe/hexo-theme-nexmoe/releases)

>You can decide which version to use. Some releases are no longer supported.

Choose the version you want to deploy, expand `Assets` tab in releases page, and download Source Code (zip).
Unpack it and rename it to `nexmoe`, and then move it to `themes` directory of your Hexo Project.

#### [Using Git](https://github.com/nexmoe/hexo-theme-nexmoe)

With git you can decide which version and branch you want to use. You can use `git pull` to update the theme if you goes this way.
```
cd themes
git clone https://github.com/nexmoe/hexo-theme-nexmoe.git nexmoe
cd nexmoe
git checkout {branch/tags name/commit hash}
```

## Install

When installing “Nexmoe” you need extra steps which is diffrent from other themes.The theme has integrated the article [word count], [reading time] statistics function by default, and can not be closed temporarily. If the `hexo-wordcount` plugin is not installed, install the plugin first:
```
npm i --save hexo-wordcount
```
**Before Node version 7.6.0, please install the 2.x version (Node.js v7.6.0 and previous), the installation command is as follows:**
```
npm install hexo-wordcount@2 --save
```
Then you need to make a copy of `_config.example.yml` and rename it to `_config.yml`。
```
cp -i _config.example.yml _config.yml
```
With the theme being developed, the theme config template will change. By copying the config you can avoid potential conflicts for users who use git pull to upgrade the theme.

## Enable

Change `theme` key’s value to `nexmoe`.

## Start

Run the command below to start a local Hexo Server.

```
hexo s --debug
```

>During the service startup process, pay attention any abnormal outputs. If you want to report issues, those information will help.

When the output looks like the lines below.It means Hexo is already running on your device, check [https://localhost:4000](https://localhost:4000) in your browser.

```
INFO  Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.
```

>If you have any problem using “nexmoe”, try searching in the documentation at sidebar or [open new issue](https://github.com/nexmoe/hexo-theme-nexmoe/issues/new) at GitHub.

## Update

If you downloaded “Nexmoe” from a GitHub release, you should rename your theme directory from `nexmoe` to `nexmoe-old`, and rename the newer version of “nexmoe” directory to `nexmoe`. Then follow the guide at changelog to migrate your configuration to the newer version. You can delete `nexmoe-old` directory afterwards if you want.

If you use git to download “nexmoe”, you need to backup your `theme config` (for example, rename it to `_config.old.yml`), and then run `git pull` to update “nexmoe”. You will see a new `_config.example.yml`. Make a copy of it and rename it as `_config.yml`. Now you can migrate your settings from `_config.old.yml` to `_config.yml`. After the test you can delete `_config.old.yml`.
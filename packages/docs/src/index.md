---
layout: home

hero:
  name: Hexo Theme Nexmoe
  text: 一个比较特别的 Hexo 主题，聚焦图片和色彩 🔥
  actions:
    - theme: brand
      text: 开始
      link: /v4.2/
    - theme: alt
      text: Demo
      link: https://nexmoe.com/

features:
  - icon: ⚡️
    title: 绚丽
    details: 大胆的阴影、色彩与模糊效果
  - icon: 🏞️
    title: 图片友好
    details: 图片瀑布流、灯箱、图片懒加载
  - icon: 🛠️
    title: 强个性化
    details: 您可以很方便的使用任意的评论系统、统计系统等各种第三方工具

---


<script setup>
import Index from './section.vue'
</script>

<Index/>

<style>
  .is-home .vp-doc.container {
    max-width: 100%;
    padding: 0;
  }
</style>

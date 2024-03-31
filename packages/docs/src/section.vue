<script setup lang="ts">
import {
  LFooter,
  LAutoSection,
  type LAutoSectionProps,
  type LInfiniteItem
} from 'landify'

const infinites: LInfiniteItem[] = [
  {
    img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-10-28_11-17-27.png?fmt=webp&w=1000?fmt=webp&w=1000'
  },
  {
    img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2021-12-21_17-37-31.png?fmt=webp&w=1000?fmt=webp&w=1000'
  },
  {
    img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-06-07_23-26-40.png?fmt=webp&w=1000?fmt=webp&w=1000'
  },
  {
    img: 'https://xiaoshu.s3.bitiful.net/QQ图片20220607234517.jpg?fmt=webp&w=1000?fmt=webp&w=1000'
  }
]

const sections: LAutoSectionProps[] = [
  {
    title: '这是一个图片支持良好的主题',
    cover: true,
    props: {
      tiles: [
        {
          title: '首页',
          des: '亮眼的阴影、色彩和文章图片预览',
          shadow: true,
          img: 'https://user-images.githubusercontent.com/16796652/134768469-52d2426b-5c7c-4a46-8f0e-064361044d88.png'
        },
        {
          title: '归档页',
          des: '预览：https://nexmoe.com/archive.html',
          shadow: true,
          img: 'https://user-images.githubusercontent.com/16796652/134768466-cf580997-1201-48a8-812e-77eb0af6ce59.png'
        },
        {
          title: '友情链接页面',
          des: '预览：https://nexmoe.com/PY.html',
          shadow: true,
          img: 'https://user-images.githubusercontent.com/16796652/134768466-cf580997-1201-48a8-812e-77eb0af6ce59.png'
        },
        {
          title: '文章内插入图片瀑布',
          shadow: true,
          img: 'https://user-images.githubusercontent.com/16796652/134768468-86751060-b3bf-43f4-970e-4baa8906e29a.png'
        }
      ]
    }
  },
  {
    title: '贡献者们',
    cover: true,
    props: {
      tiles: [
        {
          des: '感谢上面贡献者们，你可以在这里找到全部贡献者列表：https://github.com/theme-nexmoe/hexo-theme-nexmoe/graphs/contributors',
          img: 'https://opencollective.com/hexo-theme-nexmoe/contributors.svg?width=890&button=false',
          position: 'top'
        }
      ]
    }
  }
]

const footer = {
  links: [
    {
      title: 'Other Works',
      children: [
        {
          title: 'Monitor Pro',
          url: 'https://marketplace.visualstudio.com/items?itemName=nexmoe.monitor-pro'
        },
        {
          title: '小舒同学',
          url: 'https://xiaoshuapp.com'
        }
      ]
    }
  ]
}
</script>

<template>
  <LAutoSection
    v-for="item in sections"
    :key="item.title"
    v-bind:="item"
  ></LAutoSection>
  <LFooter v-bind="footer">
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
      <a href="https://i.nexmoe.com/" target="_blank">Nexmoe</a>
    </template>
    <template #right>
      Build with
      <a href="https://github.com/nexmoe/landify" target="_blank"
        >Landify</a
      >
    </template>
  </LFooter>
</template>

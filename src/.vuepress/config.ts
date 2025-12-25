import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics'
import { clarityAnalyticsPlugin } from '@vuepress/plugin-clarity-analytics'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  base: process.env.BASE_PATH  || "/PluginsWiki/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "零的知识库",
      description: "零的知识库 的文档演示",
    },
  },

  theme,

  plugins: [
    baiduAnalyticsPlugin({
      id:"34708047a8071eee154738d716bf5358",
    }),
    clarityAnalyticsPlugin({
      id:"ur1f2nltbv",
    }),
     docsearchPlugin({
      appId: '3PROY3UXS0',
      apiKey: '348c0ba1ede4821f2c04f13aaf427fe1',
      indices: ['PluginsWiki'],
      placeholder: '搜索插件',
    }),
  ],

  head: [
    // 添加百度统计
    [
      "script",
      {},
      `
!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"3OU0hYAW1rTBfxDe",ck:"3OU0hYAW1rTBfxDe",autoTrack:true,hashMode:true});
        `
    ]
  ]

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

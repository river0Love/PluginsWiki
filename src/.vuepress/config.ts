import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: process.env.BASE_PATH  || "/PluginsWiki/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "红玩知识库",
      description: "红玩知识库 的文档演示",
    },
  },

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

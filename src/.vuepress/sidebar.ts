import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/Dalamud/": "structure",
  "/Act/": "structure",
  "/": [
    "",
    {
      text: "卫月插件",
      icon: "book",
      prefix: "Dalamud/",
      link: "Dalamud/",
      children: "structure",
    }
  ],
});

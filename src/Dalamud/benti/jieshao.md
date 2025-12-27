---
title: 介绍

order: 1
---

## 卫月是什么?
- **Dalamud**

Dalamud 是为《最终幻想14》所设计的插件开发框架。插件允许你与游戏互动，添加功能、修改功能性，以及更多功能。

- **XIVLauncher**

XIVLauncher是登录器。FF14 原版启动器已经很老了，这导致它运行缓慢且不支持保存密码。 XIVLauncher用于自动登录和高速更新下载游戏本体，同时可以注入Dalamud。

## 卫月的风险性

卫月（Dalamuud）是附加在xivlauncher上的插件开发平台，其中使用的第三方插件均违反最终幻想14的服务条例，经核实有封号的风险，请谨慎使用。详情请看：

[xivlauncher、dalamud-和-dalamud-插件安全吗](/Dalamud/benti/xl_troubleshooting.html#问-xivlauncher、dalamud-和-dalamud-插件安全吗)

## XIVLauncher分支

### 国际服

[XIVLauncher](https://goatcorp.github.io/) (abbreviated as XL) is a faster launcher for FFXIV, with various available addons and enhancements to the game!
[Download](https://github.com/goatcorp/FFXIVQuickLauncher/releases/latest)

### 国服

#### XIVLauncherCN 【蓝月】

XIVLauncher（简写为 XL）是用于最终幻想14的一个多功能启动器，包含各种可用的附加组件和游戏增强功能。

[项目主页](https://ottercorp.github.io/)
[下载链接](https://github.com/ottercorp/FFXIVQuickLauncher/releases/latest)

#### XIVLauncherCN (Soil) 【 橙月 、猫月、土月】

XIVLauncherCN (Soil) 是 最终幻想14 非官方启动器 XIVLauncherCN 的分支。
注: 项目完全不使用 ottercorp 的服务器资源, 全部使用 Github 或者 公益 CDN 实现。
我建议使用第三方插件的使用橙月以减少不必要的麻烦。

**与 XIVLauncherCN 的区别 [信息可能滞后]**

- 删除了 Dalamud 启动时的游戏版本检测
- 删除了所有的数据上报逻辑
- 删除了国服 Dalamud 的插件封禁逻辑
- 一大堆鸡零狗碎的界面、逻辑优化等等...
总结：==解除==了国服蓝月的限制

[项目主页](https://github.com/AtmoOmen/FFXIVQuickLauncher)
[下载链接](https://github.com/AtmoOmen/FFXIVQuickLauncher/releases/latest)

::: warning
使用 橙月 访问 ottercorp 提供的主库/使用 ottercorp 维护的 `Mare Synchronos CN` 时,

你可能因为 `版本信息验证错误` 或 `你的个人设备信息` 没有被正确上传至 ottercorp 下的水獭云, 导致你被其封禁, (土月先前已经删除了所有的数据上报逻辑)
进而无法使用包括但不限于`原版 XIVLauncherCN` 提供的在线服务、`ottercorp 所提供的主库`、`ottercorp 所维护的 Mare Synchronos CN` 等服务,

如果你十分在意上述任一服务的使用体验, 请勿继续使用 XIVLauncherCN (Soil) 和 Dalamud (Soil), 感谢各位理解与支持

同时, 目前已自行以上游 (goatcorp) 为基础维护了主库插件内容, 你可以在设置内将主库切换至该链接, 避免你因访问其所维护的主库资源被 ottercorp 封禁/国际服更新 7.2 后无法继续使用。

链接: `https://gh.atmoomen.top/https://raw.githubusercontent.com/Dalamud-DailyRoutines/PluginDistD17/main/pluginmaster.json`

Dalamud (Soil) 在更新至 `25-03-11-03` 版本后, 默认主库也会为该链接 (先前已使用土月的用户需要手动在设置内切换主库)
:::
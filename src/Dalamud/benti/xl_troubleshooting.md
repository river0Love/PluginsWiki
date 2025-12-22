---
title: XIVLauncherQ&A
order: 999
---
采用ai翻译XIVLauncherQ&A：[原文链接](https://goatcorp.github.io/faq/xl_troubleshooting)
### 问：如何禁用自动登录？
在打开 XIVLauncher 时，按住 Shift 键，直到主窗口出现时保持按住。

### 问：XIVLauncher、Dalamud 和 Dalamud 插件安全吗？
是的！在 Goatcorp，我们非常重视安全性。使用我们的软件永远不会让你陷入其他玩家能够检测出你在使用第三方修改的情况。目前，我们没有任何理由认为 Square Enix 会以任何形式检测客户端修改。相比于使用 ReShade/GShade、ACT、Teamcraft 和其他社区项目，我们的安全性是可以放心的。

### 一般免责声明
你不应该在游戏中提到使用 XIVLauncher 或插件，就像你不应该承认使用任何第三方修改一样，因为这在技术上违反了 FFXIV 服务条款。我们没有报告过因为使用 XIVLauncher、Dalamud 或 Dalamud 插件而被封禁的案例，但你仍然应该保持谨慎。所有官方支持的插件都会经过代码审查，确保它们不会利用游戏漏洞或以任何方式导致你的游戏客户端向服务器发送无效数据。我们不能支持任何来自第三方插件库的非官方插件，使用这些插件需要自担风险。

此外，XIVLauncher 完全是一个兴趣项目。我们这样做是因为我们觉得有趣，而不是因为我们从中获得报酬。这意味着我们始终尽力保持专业和响应，但也意味着我们提供的一切服务都基于“尽力而为”的原则——像这样的软件维护需要大量时间，而我们也是普通人 :)

如果你对 XIVLauncher、Dalamud 或 Dalamud 插件有任何问题，请随时在我们的 Discord 服务器上提问。我们是一个主要讲英语的社区，其他语言的支持可能有限。

### XIVLauncher 安全细节
以下是一些关于 XIVLauncher 的额外细节。

- XIVLauncher 是开源的，你可以在主 XIVLauncher GitHub 仓库中审计代码。
- XIVLauncher 的发布版本现在直接在 GitHub 上构建。你下载的任何内容，都可以确保它来自 GitHub 仓库中列出的开源代码版本。XIVLauncher 版本检查文件被缓存到一个私有 VPS 上，以帮助减少你遇到 GitHub API 请求限制和特定国家 ISP 阻止的机会。文件下载会显示我们的代理域名（），但这会重定向到 GitHub。你可以使用任意网络分析工具来验证这一行为。VPS 使用 Cloudflare 来缓存数据，并且只能通过 VPN 和硬件密钥访问。
- 如果启动器被修改，或者你运行的是开发版，它会清楚地标明这是调试版本或其他测试/不支持的版本。
- XIVLauncher 使用 Windows 凭据管理器来安全存储你的账户凭据，如果你选择保存它们。你的密码是加密的，并且只能由授权程序访问。不过，这也意味着，如果有人设法访问你的计算机，他们理论上可以提取你的密码（但到那时，你可能已经面临更大的问题）。
- XLCore（Linux 原生 XIVLauncher）使用安全存储你的账户凭据的机制。如果你使用的是 KDE Framework 版本 5.97.0 或更新的版本，可以使用 libsecret、gnome-keyring、kwallet、keepassxc 或 secret-service 这样的秘密存储服务来管理这些凭据。
- XIVLauncher 只与我们的安全代理、GitHub 和官方 FFXIV 网站进行通信。
- XIVLauncher 被设计为完全复制与官方启动器相同的登录和授权过程。已经采取了措施确保它总是与官方版一致，甚至体验到相同的登录问题。补丁下载来自 Square Enix 提供给官方启动器的相同补丁列表，所有补丁文件在应用之前都会经过验证，以确保其正确性。
### Dalamud 安全细节
以下是一些关于 Dalamud 的附加细节。

- Dalamud 是一个代码注入框架。根据定义，它会表现得像一个病毒程序。你的杀毒软件甚至可能认为它是有害或潜在有害的软件！你可以在 FAQ 的其他地方阅读更多关于将 Dalamud 列入白名单的信息。我们推荐将其列入白名单，以获得最佳体验，但你的计算环境可能不需要它。
- Dalamud 允许你读取游戏内存和网络数据包。可以与使用 ACT 相比较。
- Dalamud 框架具备修改游戏内存/钩住游戏客户端内存和插件可以选择使用的函数的能力。然而，我们仅通过官方 Dalamud 游戏数据 API 提供安全的只读访问权限（适用时）。

### 插件安全细节
以下是关于 Dalamud 插件的附加细节。

- 在我们的官方插件库中，Dalamud 插件被我们认为是“安全使用”的。
- 官方支持的插件应始终直接从游戏中的插件安装程序下载/安装。你不需要手动下载或手动安装它们。/xlplugins
- Dalamud 支持第三方插件库，但支持有限。
  
请注意：

- 我们不能为非官方插件提供支持。
- 尽管许多非官方插件是安全的，但也有一些插件可能会利用游戏漏洞或创建不安全的条件，可能导致向游戏服务器发送无效数据，甚至导致封禁。在使用不支持的插件之前请谨慎。我们对这些插件不承担任何责任。
- 不支持的插件故障排除应提交给插件开发者或其相关社区。请不要在 XIVLauncher 支持 Discord 上询问这些插件的支持，即使它们在其他地方没有适当的支持渠道。

### 网络安全细节
以下是你应该期望看到的非 FFXIV 域名的网络流量来源。所有连接尽可能使用 HTTPS。（Square-Enix 很傻，一些他们的服务不使用 HTTPS，我们不喜欢这种情况，但无法控制。）

你可以在这里找到我们的额外网络服务的源代码：[GitHub - XLWebServices](https://github.com/goatcorp/XLWebServices/tree/master/XLWebServices)

- kamori.goats.dev - 这是一个位于 Cloudflare 后的私有 VPS，由 XIVLauncher 的维护者运营，用于代理和缓存一些 XIVLauncher 和 Dalamud 需要检查版本的常见文件。它用于减少网络连接到 GitHub 的次数，这样用户就不用担心遇到 GitHub API 请求限制和被各自国家的防火墙阻止，从而根据需要将流量引导到 GitHub。该 VPS 使用 Cloudflare 缓存数据，并且只能通过 VPN 和硬件密钥访问。
- github.com，raw.githubusercontent.com，goatcorp.github.io - 这是 GitHub。你现在就在它上面！
- is.xivup.com - 用于检查服务器状态的基本社区网站。

### 问：如何卸载 XIVLauncher？
你可以像卸载任何普通的 Windows 程序一样通过控制面板或设置应用程序卸载 XIVLauncher。如果你想彻底清除任何痕迹，可以检查并删除以下文件夹。

程序安装和旧版本：

- `%LocalAppData%\XIVLauncher`
- `%LocalAppData%\goatsoft`（如果存在）

设置/插件和其他用户配置：

- `%AppData%\XIVLauncher`

### 问：插件/XIVLauncher 在版本更新日是否可用？
请记住，许多开发者都有学校/工作/两者兼有，而且他们生活在不同的时区。软件更新将在他们能做的时间更新。仍然存在“XL 可能随时消失”的说法。我们不清楚任何可能的更新需要多长时间，也不能给出任何预计时间——这是不可能的。请不要在版本更新日催促我们，版本更新日催促的工作越多，我们就越少能够做修复工作。

- **XIVLauncher**：
  用户不需要采取任何预防措施来确保 XIVLauncher 与新补丁的兼容性。
  除非 SE 完全改变认证或补丁下载/更新的方式，否则启动器将在版本更新日正常工作。

- **Dalamud**：
  Dalamud 有一个内部机制来检查客户端版本和已列入白名单的兼容文件。
  如果客户端版本与已列入白名单的版本不匹配，Dalamud 将无法加载。
  一旦 Dalamud 被列入白名单，它将在你下次启动 XIVLauncher 时加载。（我们还将在 Discord 上发布公告）
  Dalamud 可能需要更新以与当前客户端兼容。这取决于内部更改的程度，我们无法提供更新所需的时间估计。

- **插件**：
  每次补丁都会导致所有插件停止工作。
  一旦 Dalamud 被列入新补丁的白名单，它会尝试加载插件。
  补丁可能对 Dalamud 没问题，但会导致某些插件无法正常工作。（如果发生这种情况，你需要禁用/移除插件，直到它更新）

### 问：我能否在版本更新上线前使用 XIVLauncher 提前登录？
不能。

像每次版本维护一样，大厅服务器可能会被关闭。即使你在维护中期下载并应用了补丁，你的授权几乎肯定会在一切恢复之前过期。

你可以使用 XL 的“等待维护结束”功能，坐等补丁（无需登录），然后在补丁可用时提示你登录。

“等待维护结束”功能还可以每约 15 秒检查一次服务器是否恢复，以便尽早登录。

与任何补丁一样，游戏内的插件将在 Dalamud 更新以支持新补丁内容之前自动禁用。除非你想崩溃客户端，否则不要手动注入 Dalamud 作为启动应用程序！

### 问：在哪里可以找到我的 FFXIV 安装路径？
（即：XIVLauncher 中所指的“游戏路径”）

FFXIV 安装的位置会根据你使用的官方安装程序还是 Steam、安装时间以及是否安装了免费试用版而有所不同。以下是一些常见路径。基于 Linux 的系统不像 Windows 那样一致，这将更多地取决于你的本地环境。

无论如何，请**不要选择 bootgame 或 FFXIV 文件夹**。如果你已经有一个 FFXIV 副本，选择包含这些文件夹的文件夹。

**官方启动器：**
- `C:\Program Files (x86)\SquareEnix\FINAL FANTASY XIV - A Realm Reborn`

**Steam：**
- `C:\Program Files (x86)\Steam\steamapps\common\FINAL FANTASY XIV Online`
- `C:\Program Files (x86)\Steam\steamapps\common\FINAL FANTASY XIV - A Realm Reborn`

**XIVLauncher.Core (xlcore) 默认路径：**
- `~/.xlcore/ffxiv`（这是用户主目录中的隐藏文件夹）

**Linux 上的 Steam：**
- `~/.steam/steam/steamapps/common/FINAL FANTASY XIV Online`
- **注意**：如果你的 Steam 库在另一个盘 上，它会有不同但相似的结构。

### 问：如何将 FFXIV 和/或 XIVLauncher 文件从旧 Wine 前缀迁移到新前缀？[Linux]
一旦你建立了新的 XIVLauncher 基础前缀，你可以从旧的 FFXIV 前缀复制文件，具体步骤如下：

1. 复制 FFXIV 安装文件：
   - **Lutris**：`~/Games/<new prefix>/drive_c/Program Files (x86)/SquareEnix/FINAL FANTASY XIV - A Realm Reborn`
   - **Proton**：`~/.steam/steam/steamapps/common/FINAL FANTASY XIV Online`
   - **XLCore**：`~/.xlcore/ffxiv`

2. 复制用户/角色设置：
   这取决于你如何/在哪里安装了 FFXIV。以下是每种安装方法的默认位置：
   - **Lutris**：`~/Games/<new prefix>/drive_c/users/<username>/Documents/My Games/FINAL FANTASY XIV - A Realm Reborn`
   - **旧版 Steam/Proton**：`~/.local/share/Steam/steamapps/compatdata/39210/pfx/drive_c/users/steamuser/My Documents/My Games/FINAL FANTASY XIV - A Realm Reborn`
   - **Proton**：`~/.steam/steam/steamapps/compatdata/39210/pfx/drive_c/users/steamuser/My Documents/My Games/FINAL FANTASY XIV - A Realm Reborn`
   - **XLCore**：`~/.xlcore/ffxivConfig`

**注意：** 如果你在不同的启动器之间共享游戏配置（例如：Proton 和 XLCore），我们建议先复制到 Proton，然后在 XIVLauncher 设置中设置游戏配置路径。

**注意 2：** 如果你使用的是 FFXIV 免费试用版，配置路径可能会使用与 `31206039210` 不同的 ID。

3. 复制 XIVLauncher 配置到以下位置：
   - **Lutris**：`~/Games/<new prefix>/drive_c/users/<username>/AppData/Roaming/XIVLauncher/`
   - **XL
### 问：如何将 FFXIV 和/或 XIVLauncher 文件从旧安装迁移到新安装？[Windows]

#### 复制 FFXIV 安装
大部分情况下，FFXIV 是便携的。你只需确保安装了 DirectX。建议先使用 SE 的安装程序安装启动器，然后如果不想打补丁，可以用备份文件替换。

**注意：** 如果你之前安装了 TexTools，请不要这样做，或者至少确保先恢复索引/修复游戏，因为它可能已经破坏了你的客户端。

#### 复制用户/角色设置
复制你的用户/角色设置：`%USERPROFILE%\Documents\My Games\FINAL FANTASY XIV - A Realm Reborn`

#### 需要复制哪些 XIVLauncher 文件？
我们建议仅复制那些便携的配置文件：
- `pluginConfigs`：存储你的插件配置。
- `dalamudConfig.json`：你的 Dalamud 设置配置文件，包含任何自定义的仓库配置。
- `dalamudui.ini`：存储 Dalamud/插件窗口位置。仅在你使用相同分辨率的显示器时复制此文件。
- `dalamudVfs.db`：存储插件集合和其他信息。

**注意：** 我们不建议备份整个文件夹。启动器配置是机器特定的，不应该随同迁移。其他 Dalamud 文件和文件夹将在新机器上重新下载。

#### 复制 XIVLauncher 配置到以下位置：
- 复制到：`%appdata%\XIVLauncher\` 或 `%userprofile%\appdata\roaming\xivlauncher`

---

### 问：Steam 支持有何问题？
购买了 Steam 版 FFXIV 的玩家需要将他们的 Steam 账户与 Square Enix 账户绑定到官方启动器中。我们无法绕过这一点，因此，如果你有 Steam 服务账户，必须保持 Steam 打开。

Steam 安装也需要登录正确的账户。

如果你想在非 Steam 服务账户上使用 Steam 覆盖，你需要通过 Steam 将 XIVLauncher 添加为非 Steam 游戏。如果你想让 Steam 计算 FFXIV 的游戏时间，可以右键点击它在库中，选择 **属性** 并设置启动选项：
C:\Users**YOUR USERNAME HERE**\AppData\Local\XIVLauncher\XIVLauncher.exe %command%

---

### 问：我打开程序时收到错误，提示 XIVLauncher 未能检查更新
有几种原因可能导致 XIVLauncher 无法打开。以下是一些常见原因。

#### XIVLauncher 被杀毒软件/防火墙拦截
请查看主杀毒软件 FAQ，了解如何将 XIVLauncher 列入白名单。

#### GitHub 请求限制
如果你最近向 GitHub 发起了很多请求，可能会被限制。这通常是因为 XIVLauncher、Dalamud、Dalamud 插件更新、GShade 等操作在短时间内迅速进行。

- 尝试访问 https://api.github.com/rate_limit，查看返回的 JSON 文件。
- 查找 `resources.core.remaining`，如果是 0，表示你已经达到了 GitHub 的请求限制。
- 如果达到了限制，从 `resources.core.reset` 获取时间戳，并将其转换为人类可读的日期。你可以使用 unixtimestamp.com 来转换。
- 等待规定的时间后再次启动，或者在此期间使用官方启动器。

如果不确定，可以加入我们的 Discord 服务器，在 XIVLauncher 帮助频道发布错误信息、截图（如果可能），以及你的文件 `output.log`（可以在 `%AppData%\XIVLauncher` 中找到）来获得更快速的支持。

---

### 问：为什么游戏内插件（Dalamud）不起作用或插件无法显示？
像许多其他游戏工具一样，Dalamud 通过注入 FFXIV 进程并钩住 DirectX 来工作。有时，它会与其他工具发生冲突，导致无法正常工作。

以下是一些常见的可能导致问题的工具：

- **常见第三方杀毒软件**：请查看此 FAQ 条目。
- **FRAPS**：请确保在打开 FFXIV 时关闭 FRAPS。它会钩住 DirectX 以显示 FPS 或进行录制。你可以在游戏运行后打开它。
- **Logitech GHub**：我们不清楚为什么这是一个有问题的应用程序，但它确实会导致 Dalamud 在退出游戏时崩溃，出现黑屏，需要强制关闭。
- **MacType**：MacType 不会更改 FFXIV，因为它并未使用正常的字体。阻止它钩住 FFXIV 就没问题。
- **MSI Afterburner**：包含 RTSS，查看下面的内容。
- **OBS**：某些流媒体模式会钩住 DirectX 以改善捕捉，这可能导致插件在流媒体中无法渲染。你可能需要更改捕捉方式。
- **RivaTuner/RTSS**：可以将 FFXIV 从自动钩住列表中排除，或者设置 RTSS 加载延迟。在 Dalamud 加载后使用 RTSS 不会有问题。
- **SpecialK**：此工具也会注入 DirectX，可能会影响 Dalamud 的注入。尽管不一致，但最好不要使用，除非你能确保它在 Dalamud 加载后才钩住。

---

### 问：如何将 XIVLauncher 和 Dalamud 列入白名单，以便杀毒软件不拦截它们？
请为以下文件夹添加例外或列入白名单：

- `%LocalAppData%\XIVLauncher`
- `%AppData%\XIVLauncher`
- 你的 FFXIV 游戏安装文件夹

操作后，请重启计算机。

**注意：** 大多数程序不允许使用 `%localappdata%` 和 `%appdata%` 的简写。你需要使用它们的完整路径，通常是 `C:\Users\<username>\AppData\Local` 或 `C:\Users\<username>\AppData\Roaming`。

---

### 问：如何重置 Dalamud？
你可能还需要重置 Dalamud（插件系统）。要重置 Dalamud，请删除以下文件夹：
- `%AppData%\XIVLauncher\addon\Hooks`

---

### 额外例外
如果可能的话，还应该尝试将以下文件列入白名单：

- `(你的 FFXIV 安装路径)\game\ffxiv_dx11.exe`
- `%LocalAppData%\XIVLauncher\XIVLauncher.exe`
- `%LocalAppData%\XIVLauncher\current\XIVLauncher.exe`
- `%AppData%\XIVLauncher\addon\Hooks\W.X.Y.Z\Dalamud.Injector.exe`（请将 W.X.Y.Z 替换为最新版本）
- `%AppData%\XIVLauncher\addon\Hooks\W.X.Y.Z\DalamudCrashHandler.exe`
- `%AppData%\XIVLauncher\addon\Hooks\W.X.Y.Z\Dalamud.dll`

**注意：** 请根据每次 Dalamud 更新替换版本号。

---

### 问：XIVLauncher 没有保存我的新密码 / 如何清除已保存的密码？
XIVLauncher 将用户凭据保存在 Windows 凭据管理器中。它们会被适当标记，方便你找到并编辑/删除所需的凭据。

1. 打开 Windows 凭据管理器应用程序。最快捷的方法是直接在开始菜单中输入它的名称。
2. 选择 **Windows 凭据**。
3. 向下滚动，直到看到类似 `FINAL FANTASY XIV-username` 的条目，并展开该条目。
4. 删除该条目。XIVLauncher 将无法加载它。
5. 现在打开 XIVLauncher 并尝试重新登录。

如需更多帮助，可以查看 [Windows 凭据管理器基础指南](https://pureinfotech.com/credential-manager-windows-10/)。

---

### 问：我认为 XIVLauncher 让我遇到了蓝屏。哪些信息有助于缩小范围？
（**注意：** 这可能不是 XIVLauncher 的问题，但以下信息将帮助我们确认）

1. 你得到的停止代码是什么？
2. 出现故障的应用程序或驱动程序是什么？
3. 这个问题什么时候开始出现的？
4. 你安装了哪些插件？如果禁用它们并逐个重新启用，问题是否仍然存在？
5. 你是否完全卸载了 XIVLauncher 并重新安装？（请查看前面的几条帖子了解详细信息）
6. 如果不确定某些细节，或者 Windows 事件查看器没有提供足够信息，可以使用 BlueScreenView 来读取内存转储（请让计算机完成转储，避免在转储过程中重启）。

---

### 问：如何修复启动时的崩溃？
如果你使用 Windows，请尝试从 Microsoft 安装 VC Redist：https://aka.ms/vc14/vc_redist.x64.exe，以及 .NET 4.8 Runtime：https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net48-web-installer。

这不适用于在 Linux 上运行的 XIVLauncher.Core，因为 .NET Framework 不被使用，Wine 处理了提供 Visual C++ 兼容性。

如果你仍然遇到问题，请加入我们的 Discord 服务器获取帮助。

---

### 问：当尝试登录时，启动器显示红色世界图标并显示错误信息，而官方启动器无法打开
这是 Square Enix 服务器的问题，已影响美国的玩家一段时间，原因是登录服务器直接由 SE 在日本托管，并未照顾好通往玩家的路由。

解决方法是，你可以等一会儿再试，或者将 VPN 设置为日本，直到你进入标题屏幕。之后，你应该能够正常游戏，不再需要 VPN。DNS 更改也有帮助。

我们推荐使用 MUDFISH 作为 FFXIV 的 VPN，它便宜且稳定。如果你在打补丁时遇到错误，我们建议使用 ProtonVPN 或 Cloudflare WARP。

要进行故障排除，你可以尝试 ping SE 的日本登录服务器：`frontier.ffxiv.com`。
### 问：官方启动器无法工作 / XIVLauncher 未能检查更新 / 无法验证补丁文件
最可能的原因是你的网络连接或通往 Square Enix 服务器和/或 GitHub 的路由出现问题。XIVLauncher 能获取的唯一信息是“出了点问题”。

虽然这种情况通常是家庭网络特定的问题，但多个计算机在同一位置可能并不会被平衡到同一服务器（这就是为什么一台计算机能正常工作而另一台不行的原因）。

如果你确定这不是防火墙问题或请求限制，以下是一些你可以尝试的方法：

#### 重启计算机
重启网络设备（调制解调器和路由器）。
确保硬盘没有满。
尝试不同的 DNS：
- Google 提供 8.8.8.8 和 8.8.4.4。
- CloudFlare 提供 1.1.1.1 和 1.0.0.1。
- Level3 提供 4.2.2.2 和 4.2.2.4。

#### 尝试使用 VPN
如果你已经通过 VPN 连接，尝试断开它。
如果你想尝试一个免费的 VPN 服务，Cloudflare 提供了 [https://1.1.1.1/](https://1.1.1.1/)，或者你也可以尝试 ProtonVPN 以获得更多控制。
如果你想尝试一个付费 VPN 服务（仍然不能保证），我们曾经推荐过 MUDFISH。

#### 从另一台计算机复制 FFXIV 安装
最简单的方法是将文件夹复制到一个大容量的 U 盘或外部硬盘上。
如果你熟悉设置 Windows 共享，也可以通过网络共享驱动器/文件夹，将其复制过来。

#### 不要以管理员身份运行 XIVLauncher
是的，你没看错！请不要以管理员身份运行 XIVLauncher。（也不要以管理员身份手动运行 Dalamud。）

你也永远不应该以管理员身份运行 FFXIV，因为这样会导致游戏配置数据被你的用户写保护。这样会使你无法保存角色配置、快捷栏设置、截图等，解决起来非常麻烦，通常需要修复权限或删除所有配置并重新开始。（SE 对文件权限的处理非常糟糕！）

#### XL 环境变量
你可以为测试新的 XIVLauncher 版本设置环境变量。如果你在不知道它做什么的情况下设置了 `XL_PRERELEASE=true`，我们不会帮助你解决可能发生的故障。

不再使用 wine 环境变量，直接使用与 SquirrelSetup 配合正常工作的 Lutris 脚本。

如果你使用过时的版本，可能会导致崩溃，因此使用时要谨慎。

---

### 问：WTFast 配置
WTFast 配置设置

---

### 问：如何在 RivaTuner/RTSS 中设置注入延迟？
1. 转到 `C:\Program Files (x86)\RivaTuner Statistics Server\Profiles\`
2. 用文本编辑器打开文件 `ffxiv_dx11.exe.cfg`
3. 查找并修改以下两个参数：[Hooking]
InjectionDelay=15000
InjectionDelayTriggers=KERNEL32.dll,USER32.dll
4. 如果没有找到这些参数，可以添加它们。

---

### 问：我可以修复 FFXIV 安装吗？
可以！右键点击或使用 XIVLauncher 中的高级启动选项按钮，选择 **修复游戏文件**。

**注意：** 切勿使用官方启动器中的修复功能！它会删除你的整个游戏安装并重新下载。

---

### 问：当尝试更新 FFXIV 时如何解决版本检查错误？
1. 转到 `\Documents\My Games\FINAL FANTASY XIV - A Realm Reborn`
2. 用文本编辑器打开文件 `FFXIV_BOOT.cfg`
3. 修改 `BootVersionCheckMode` 为 `1`
4. 重新启动。

---

### 问：我在安装 TexTools 模组后更新了游戏，如何修复崩溃问题？
如果官方启动器也崩溃了，你就会知道自己受到了影响。这个问题并不是 XIVLauncher 引起的。

请备份你的模组文件并按照本 FAQ 中的修复方法修复游戏。请注意，你的模组将被卸载。

---

### 问：如何禁用智能应用控制？
这是 Windows 10 引入的一个功能，但在 Windows 11 的全新安装中（或者预装 Windows 的 OEM 机器中）更为常见。

它可能会显示如下消息：“你需要安装一个应用来执行此任务”，“智能应用控制阻止了一个可能不安全的应用”或启动游戏时显示“我们无法确认谁发布了”。

原始帖子可以在这里找到：[Superuser](https://superuser.com/questions/1525779/search-for-app-in-the-store-prompt-when-opening-exe-files)

#### 在 Windows 安全中有两个设置需要检查：

1. 首先，进入 **应用与浏览器控制**，点击 **智能应用控制设置** -> 关闭它（在 Windows 10/11 升级过来的机器上默认为关闭，这只是一个过度保护功能）。然后，重新启动计算机并重试。

2. 如果问题仍然存在，可以临时关闭 **Windows 智能屏幕**（不过稍后记得重新开启）。在 Windows 安全中，返回 **应用与浏览器控制**，点击 **基于声誉的保护** -> 关闭 “检查应用和文件”。


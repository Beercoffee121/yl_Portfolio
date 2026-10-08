/*
 * =========================  编辑说明  =========================
 * 以后更新作品集，主要修改这一个文件即可。
 * 1. 修改引号里的中文：项目介绍、个人参与、主要设计内容等。
 * 2. 更新 url 字段：Figma / Dify 体验链接。
 * 3. 更换工作流截图：将新图片覆盖同名 png 文件。
 * 4. 修改完在 GitHub 点击 Commit changes，网站会自动更新。
 *
 * 请保留英文引号、逗号、花括号等符号。
 * 无需修改 index.html 或 app.js。
 * ============================================================
 */
window.PORTFOLIO_CONTENT = {
  // ——— 首页基本信息（可编辑）———
  site: {
    eyebrow: "PORTFOLIO · 2026",
    title: "项目作品集",
    description: "收录产品设计、业务系统与智能应用相关项目，展示项目背景、核心方案、主要设计内容与体验方式。",
    github: "https://github.com/Beercoffee121/yl_Portfolio",
    footer: "© 2026 YL · Portfolio"
  },

  // ——— 项目内容（按网站显示顺序排列）———
  projects: [
    {
      id: "bus",
      number: "01",
      title: "公交/小红车",
      category: "智能客服 · 工作流 Demo",
      tags: ["Dify Workflow", "知识问答", "实时查询"],
      summary: "面向杭州公交与公共自行车咨询场景，设计覆盖知识问答、实时查询和多轮对话的智能客服流程。",
      background: "公交与公共自行车业务涉及线路、票价、乘车规则、办卡流程及站点车辆查询等多类问题。不同问题需要调用知识文档或实时业务接口，对咨询分流、上下文承接和异常处理提出了较高要求。",
      role: "参与项目整体方案与工作流设计，主要负责场景意图、多轮对话及工具调用相关流程。",
      points: [
        "根据用户问题将咨询分流至知识问答、公交查询或公共自行车查询流程。",
        "根据数据类型选择静态知识库或实时接口，并统一处理工具返回结果。",
        "针对信息缺失、查询异常和多轮任务切换设计澄清与兜底流程。"
      ],
      links: [
        { label: "尝试 Demo ↗", url: "https://udify.app/chat/WWByT3n4FkqQuhuU" }
      ],
      image: "bus-workflow.png",
      imageAlt: "公交/小红车工作流截图，展示意图分流和多个工具节点",
      imageCaption: "Dify Workflow 实际截图（点击图片可放大）",
      exampleTitle: "测试问题与历史返回",
      exampleQuestion: "武林广场附近哪里有小红车可以借？",
      exampleAnswer: "武林广场附近暂时没有查询到可借的小红车站点，范围内暂无可用车辆。提醒：车辆余量可能会实时变化，建议您稍后再试，或前往其他区域查询。",
      exampleNote: "以上为本地测试数据产生的历史回答，不代表真实的实时车辆情况。",
      notice: "此项目为独立 Demo，在线体验可能无法正常回复；不作为实际出行信息来源。"
    },
    {
      id: "lenovo",
      number: "02",
      title: "想帮帮",
      category: "知识问答 · 工作流 Demo",
      tags: ["说明书知识库", "联网检索", "故障排查"],
      summary: "围绕消费电子设备说明与故障排查，设计结合说明书知识库和联网检索的问答流程。",
      background: "用户遇到设备连接或使用问题时，通常需要同时查阅说明书、设备信息和外部排查资料。项目希望将分散的信息查询过程整合为统一的问答体验。",
      role: "参与智能问答体验优化与方案设计，并基于相关场景独立搭建作品集演示工作流。",
      points: [
        "导入设备说明书并配置知识库切分与检索方式。",
        "结合设备信息、知识库结果与联网检索补充回答依据。",
        "根据检索结果和设备匹配情况设计确认、澄清及无结果处理流程。"
      ],
      links: [
        { label: "尝试 Demo ↗", url: "https://udify.app/workflow/Mc5oHMFqXldd6fQY" }
      ],
      image: "lenovo-workflow.png",
      imageAlt: "联想想帮帮 Dify 工作流截图，展示知识检索、多路分支和结果处理",
      imageCaption: "Dify Workflow 实际截图（点击图片可放大）",
      exampleTitle: "推荐测试输入",
      exampleQuestion: "设备型号：DEV-19；设备名称：联想蓝牙键盘 K300；问题：为什么蓝牙连接断断续续？",
      exampleAnswer: "排查方向包括设备电量、无线干扰、连接状态及更换环境交叉测试。",
      exampleNote: "Demo 通过手动输入设备信息模拟设备识别结果；具体输出取决于当前工作流与接口状态。",
      notice: "此项目为独立 Demo，并非联想官方售后服务；在线回答可能不稳定。"
    },
    {
      id: "mall",
      number: "03",
      title: "EverJoy 企业内部积分商城",
      category: "企业内部产品 · Figma 原型",
      tags: ["员工端", "管理后台", "业务闭环"],
      summary: "面向企业员工激励与福利兑换场景，设计员工端与管理后台一体化的积分商城。",
      background: "项目通过积分获取与商品兑换机制支持员工激励和福利数字化管理，同时满足商品、库存、订单、积分及审批流程的后台运营需求。",
      role: "负责需求梳理、业务流程、PRD 和 Figma 原型设计，并参与评审推进与测试验收。",
      points: [
        "员工端覆盖商品浏览、积分查询、商品兑换、订单跟踪和积分流水。",
        "管理后台覆盖商品、SKU、库存、订单审批、积分发放和规则管理。",
        "梳理积分余额、商品库存、限购规则与审批状态之间的校验关系。"
      ],
      links: [
        { label: "员工端 Figma 原型 ↗", url: "https://www.figma.com/proto/VX5fC0CB0PQjHGvnVCxBqR/EverJoy-%E7%A7%AF%E5%88%86%E5%95%86%E5%9F%8E-Phase-1-%E5%8E%9F%E5%9E%8B?node-id=258-2774&p=f&t=9r8oE5GpyB2EBGna-0&scaling=min-zoom&content-scaling=fixed&page-id=258%3A2773&starting-point-node-id=258%3A2774" },
        { label: "管理员端 Figma 原型 ↗", url: "https://www.figma.com/proto/VX5fC0CB0PQjHGvnVCxBqR/EverJoy-%E7%A7%AF%E5%88%86%E5%95%86%E5%9F%8E-Phase-1-%E5%8E%9F%E5%9E%8B?node-id=371-3&p=f&t=9r8oE5GpyB2EBGna-0&scaling=min-zoom&content-scaling=fixed&page-id=371%3A2&starting-point-node-id=371%3A3&show-proto-sidebar=1" }
      ],
      experienceTitle: "建议查看顺序",
      experience: [
        "员工端：商城首页 → 商品详情 → 兑换确认 → 我的订单。",
        "管理员端：商品管理 → 订单审批 → 积分管理 → 自动发放规则。"
      ],
      notice: "企业内部使用业务项目，目前已完成测试、待上线。尚无正式上线后的运营效果数据。"
    },
    {
      id: "game",
      number: "04",
      title: "EverJoy 游戏网站",
      category: "D2C 产品 · Figma 原型",
      tags: ["Web 网站", "内容展示", "交互原型"],
      summary: "面向游戏内容展示、商城和玩家社区场景设计的 D2C 网站原型。",
      background: "围绕游戏官网的基础访问路径，规划游戏内容、商城、社区及用户账户等主要页面。",
      role: "负责网站信息架构、页面布局与基础交互原型设计。",
      points: [
        "规划首页、游戏展示、商城和玩家社区等主要页面。",
        "设计登录、账户及相关基础访问流程。",
        "建立 Web 页面之间的导航关系和内容层级。"
      ],
      links: [
        { label: "打开 Figma 原型 ↗", url: "https://www.figma.com/proto/NvhNs25GoVXeeaOxJHfkfL/EverJoy-%E5%AE%98%E7%BD%91%E5%8E%9F%E5%9E%8B-%C2%B7-Web---Mobile-%C2%B7-V1?node-id=155-2164&p=f&t=9r8oE5GpyB2EBGna-0&scaling=min-zoom&content-scaling=fixed&page-id=151%3A2&starting-point-node-id=155%3A2164" }
      ],
      experienceTitle: "建议查看顺序",
      experience: ["首页 → 游戏展示 → 商城 → 社区；本版本主要展示基础结构和交互设计。"],
      notice: "目前仍属于初期设计阶段，并非已经上线的网站。"
    }
  ]
};

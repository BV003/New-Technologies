// 内容数据：保持简短、可核验，优先链接到论文或项目官方页面。
const TECH = [
  { name: "Gemini Robotics", category: "具身智能", desc: "把视觉、语言和动作统一到模型中，让机器人理解自然语言、空间关系并直接执行物理任务。", impact: "通用模型开始跨过屏幕，进入真实世界的控制回路。", url: "https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/", source: "Google DeepMind", date: "2025.03", status: "快速进展" },
  { name: "Model Context Protocol", category: "AI 工程", desc: "一套开放协议，用统一方式把 AI 应用连接到数据源、工具和工作流。", impact: "可能成为智能体调用外部世界的通用接口层。", url: "https://modelcontextprotocol.io/introduction", source: "MCP", date: "2024.11", status: "正在普及" },
  { name: "AlphaFold 3", category: "生物计算", desc: "预测蛋白质与 DNA、RNA、小分子等多种生物分子的结构和相互作用。", impact: "把生成式 AI 的影响推进到药物发现与生命科学实验设计。", url: "https://deepmind.google/discover/blog/alphafold-3-predicts-the-structure-and-interactions-of-all-lifes-molecules/", source: "Google DeepMind", date: "2024.05", status: "进入应用" },
  { name: "Willow 量子芯片", category: "新型计算", desc: "Google 的量子处理器展示了随规模扩大而降低错误率的纠错进展。", impact: "容错量子计算从理论目标逐渐转向可验证的工程路线。", url: "https://blog.google/technology/research/google-willow-quantum-chip/", source: "Google Quantum AI", date: "2024.12", status: "长期信号" },
  { name: "可控核聚变点火", category: "能源", desc: "美国国家点火装置实现聚变靶丸释放能量高于激光传递到靶丸的能量，并持续复现实验。", impact: "验证了聚变点火这一关键物理里程碑，工程化仍需长期突破。", url: "https://lasers.llnl.gov/science/achieving-fusion-ignition", source: "LLNL", date: "2022.12", status: "长期信号" }
];

const HISTORY = [
  { year: "1947", name: "晶体管", desc: "把计算从真空管时代带向可缩放的半导体时代。", url: "https://www.nokia.com/bell-labs/about/history/innovation-stories/the-transistor/" },
  { year: "1956", name: "人工智能被命名", desc: "达特茅斯研究项目为一个新的研究领域确立了名字。", url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth" },
  { year: "2012", name: "AlexNet", desc: "深度卷积网络在 ImageNet 上的突破，开启现代深度学习浪潮。", url: "https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks" },
  { year: "2017", name: "Transformer", desc: "“Attention Is All You Need” 奠定了大模型时代的核心架构。", url: "https://arxiv.org/abs/1706.03762" },
  { year: "2023", name: "首个 CRISPR 疗法获批", desc: "基因编辑从实验工具进入获批治疗方案。", url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease" }
];

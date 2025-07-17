export const PROJECTS = [
  {
    title: "Optimism Governance Dashboard",
    image: "https://i.imgur.com/lBdTI25.png",
    w: "Curia Lab",
    chain: "Optimism",
    description:
      "Governance dashboard for Optimism focusing on participation, voter behavior, power structure, proposal outcomes. Providing insights and democratizing information for informed decision-making in governance process.",
    website: "https://optimism.curiahub.xyz/",
    scope: "Fullstack (Frontend, Backend), Some of the data pipeline",
  },
  {
    title: "OP Passport",
    image: "https://i.imgur.com/TScpjoJ.png",
    w: "Curia Lab",
    chain: "Optimism",
    description:
      "The OP Passport project aims to develop an open-source platform for governance participants on Optimism, ZKP technology for privacy-preserving attestations and on-chain self-manageable identity passports.",
    website: "https://www.oppassport.xyz/",
    scope:
      "Privacy-preserving attestation design, ZK Circuit (Noir), Smart Contract, Demo Frontend",
  },
  {
    title: "Osmosis Alloyed Asset Dashboard",
    image: "https://i.imgur.com/vu69VFN.png",
    chain: "Osmosis",
    description:
      "Analytical dashboard for Osmosis alloyed asset pool. Visualizing multiple information, data points, and statistics related to Osmosis' new alloyed asset.",
    website: "https://alloyed.osmosis.zone/",
    scope: "Fullstack (Frontend, Backend), Data Pipeline",
  },
  {
    title: "Minity Dashboard",
    image: "https://i.ibb.co/ch1GGcnZ/og-image.png",
    w: "Minity",
    chain: "Initia",
    description:
      "Initia and interwoven roll-up data dashboard. Access to analytics, staking data, vip insights, and other Initia's related information.",
    website: "https://minity.xyz/",
    scope: "Fullstack (Frontend, Backend), Data Pipeline",
  },
  {
    title: "Minity Portfolio",
    image: "https://i.ibb.co/ch1GGcnZ/og-image.png",
    chain: "Initia",
    w: "Minity",
    description:
      "Initia and interwoven roll-up native portfolio tracker. Track your portfolio, assets, defi positions, NFTs, Jennies, across every interwoven roll-up minitia.",
    website: "https://portfolio.minity.xyz/",
    scope: "Fullstack (Frontend, Backend), Data Pipeline",
  },
  {
    title: "Initia Realtime Activity Visualizer",
    image: "https://i.ibb.co/pr9J0Dd9/og.webp",
    w: "Minity",
    chain: "Initia",
    description:
      "Initia activity visualizer. View realtime activity of Initia and all interwoven roll-ups in space theme 3D visualization.",
    website: "https://realtime.minity.xyz/",
    scope: "Fullstack (Frontend, Backend), Data Pipeline",
  },
  {
    title: "PRACC",
    description:
      "A curated list of privacy-focused protocols including mixers, cryptography solutions, and privacy applications. Each protocol is evaluated based on multiple metrics to provide an objective overview.",
    chain: "Agnostic",
    website: "https://pracc.xyz/",
    scope: "Fullstack (Frontend, Backend), Data Pipeline",
  },
] as {
  title: string
  image?: string
  w?: string
  chain: string
  description: string
  website: string
  scope: string
}[]

export const HACKATHONS = [
  {
    at: "Delphi Labs Cosmos Hackathon",
    atIcon:
      "https://pbs.twimg.com/profile_images/1592487915317301248/gpLsITSX_400x400.jpg",
    title: "Night Market",
    description:
      "Multi-Asset Shielded Pools with external interaction and compliance features. Trade, LP, stake, and more privately while comply with regulators",
    date: new Date("May 29, 2023"),
    tags: [
      "Cryptography",
      "zkSNARK",
      "MASP",
      "Shielded Pool",
      "Privacy",
      "DeFi",
    ],
    links: [
      ["Hackathon", "https://delphilabs.devpost.com"],
      ["Submission", "https://devpost.com/software/night-market"],
      ["Github", "https://github.com/Tetration-Lab/night-market"],
    ],
    prizes: [
      [
        "Delphi Labs Cosmos Hackathon Osmosis 2nd Place",
        "https://devpost.com/software/night-market",
      ],
    ],
  },
  {
    at: "Zama Bounty Program",
    atIcon: "https://avatars.githubusercontent.com/u/57671822?s=200&v=4",
    title: "ECDSA Signing In Tfhe-rs",
    description:
      "Experiment and technical report on implementing fully homomorphic encrypted elliptic curve digital signature algorithm (ECDSA) using tfhe-rs",
    date: new Date("Jun 30, 2023"),
    tags: ["Cryptography", "Homomorphic Encryption", "tfhe-rs", "ECDSA"],
    links: [
      ["Bounty", "https://github.com/zama-ai/bounty-program/issues/45"],
      ["Submission", "https://github.com/yoyoismee"],
      ["Github", "https://github.com/Tetration-Lab/TFHECDSA"],
      [
        "Docs",
        "https://github.com/Tetration-Lab/TFHECDSA/blob/master/tutorial.md",
      ],
    ],
    prizes: [
      [
        "Zama Bounty Program - Create a FHE ECDSA signature tutorial",
        "https://github.com/zama-ai/bounty-program/issues/45",
      ],
    ],
  },
  {
    at: "ETHOnline 2023",
    atIcon:
      "https://ethglobal.b-cdn.net/events/ethonline2023/square-logo/default.png",
    title: "ZTF",
    description:
      "Decentralized cross-chain bounty and crisis management protocol. A.k.a. On-chain ctf with claimable bounty using zero-knowledge proof.",
    date: new Date("Oct 28, 2023"),
    tags: ["Cryptography", "zkVM", "zkSNARK", "RISC-0", "revm"],
    links: [
      ["Link", "https://ztf.tetrationlab.com/"],
      ["Submission", "https://ethglobal.com/showcase/ztf-xnvwb"],
      ["Github", "https://github.com/Tetration-Lab/ztf"],
    ],
    prizes: [
      ["ETHOnline 2023 Finalist", "https://ethglobal.com/showcase/ztf-xnvwb"],
      [
        "ETHOnline 2023 - Wormhole: Best Use Of Wormhole",
        "https://ethglobal.com/showcase/ztf-xnvwb",
      ],
    ],
  },
  {
    at: "ZK Hack Istanbul",
    atIcon:
      "https://pbs.twimg.com/profile_images/1435913575458033665/91HHbFG6_400x400.png",
    title: "Turing Zero zkVM",
    description:
      "Turing Zero zkVM is a zk circuit simulating a simple Turing machine, and the circuit can prove that given a public input tape and output tape, there is a program witness that sucessfully simulate with such tape.",
    date: new Date("Nov 12, 2023"),
    tags: ["Cryptography", "zkVM", "Turing Machine", "Noir"],
    links: [
      ["Link", "https://turing-zero.tetrationlab.com/"],
      ["Submission", "https://devfolio.co/projects/zkvm-f280"],
      ["Github", "https://github.com/Tetration-Lab/turing-zero"],
    ],
    prizes: [
      [
        "ZK Hack Istanbul 2023 Finalist",
        "https://devfolio.co/submissions/zkvm-f280",
      ],
      [
        "ZK Hack Istanbul 2023 - Best Use Of Scroll",
        "https://devfolio.co/submissions/zkvm-f280",
      ],
      [
        "ZK Hack Istanbul 2023 - Best Use Of Mantle",
        "https://devfolio.co/submissions/zkvm-f280",
      ],
    ],
  },
  {
    at: "ZK Hack Istanbul",
    atIcon:
      "https://pbs.twimg.com/profile_images/1435913575458033665/91HHbFG6_400x400.png",
    title: "Type-5 zkEVM",
    description:
      "Type-5 zkEVM is a 30-ish opcodes/instructions simplified EVM that captures important concepts like state transition proof, opcodes, etc. Users can easily add/modify opcodes or VM behaviour due to our small, easily-read codebase.",
    date: new Date("Nov 12, 2023"),
    tags: ["Cryptography", "zkVM", "EVM", "Noir"],
    links: [
      ["Link", "https://t5zkevm.tetrationlab.com/"],
      ["Submission", "https://devfolio.co/projects/zkvm-f280"],
      ["Github", "https://github.com/Tetration-Lab/turing-zero"],
    ],
    prizes: [
      [
        "ZK Hack Istanbul 2023 Finalist",
        "https://devfolio.co/submissions/zkvm-f280",
      ],
      [
        "ZK Hack Istanbul 2023 - Best Use Of Scroll",
        "https://devfolio.co/submissions/zkvm-f280",
      ],
      [
        "ZK Hack Istanbul 2023 - Best Use Of Mantle",
        "https://devfolio.co/submissions/zkvm-f280",
      ],
    ],
  },
  {
    at: "ETHGlobal Frameworks",
    atIcon:
      "https://ethglobal.b-cdn.net/events/frameworks/square-logo/default.png",
    title: "Frames Hub",
    description:
      "FrameHub is frames aggregator with additional analytic on Farcaster aim to capture the trends, engagement to enhance project decisions. We offer a FrameHub website to monitor and analyze trends of Frames on Farcaster, and a FrameHub account on Farcaster to send daily updates on for Farcaster users to keep updates on the trends.",
    date: new Date("Mar 25, 2024"),
    tags: ["Frames", "Farcaster", "Analytics", "Dashboard"],
    links: [
      ["link", "https://frame-analytics.vercel.app"],
      ["submission", "https://ethglobal.com/showcase/frames-hub-w77f9"],
      ["github", "https://github.com/tontan2545/frame-analytics"],
    ],
    prizes: [
      [
        "ETHGlobal Frameworks Finalist",
        "https://ethglobal.com/showcase/frames-hub-w77f9",
      ],
      [
        "ETHGlobal Frameworks - Optimism: Super Frame Discovery",
        "https://ethglobal.com/showcase/frames-hub-w77f9",
      ],
    ],
  },
  {
    at: "ETHGlobal Circuit Breaker",
    atIcon:
      "https://ethglobal.b-cdn.net/events/circuitbreaker/square-logo/default.png",
    title: "EVM Trace",
    description:
      "EVMtrace aims to shed light on adopting cryptography on chains. Collecting data with techniques like tracing, tracking precompiles, pattern recognition, and manual works. EVMtrace provides a user-friendly dashboard and etherscan-like tools.",
    date: new Date("Apr 16, 2024"),
    tags: ["EVM", "Cryptography", "Dashboard", "Analytics"],
    links: [
      ["Link", "https://evmtrace.info"],
      ["Submission", "https://ethglobal.com/showcase/evmtrace-z6vh8"],
      ["Github", "https://github.com/scb-10x/evmtrace-etl"],
    ],
    prizes: [
      [
        "ETHGlobal Circuit Breaker Finalist",
        "https://ethglobal.com/showcase/evmtrace-z6vh8",
      ],
    ],
  },
  {
    at: "ETHGlobal Singapore 2024",
    atIcon:
      "https://ethglobal.b-cdn.net/events/singapore2024/square-logo/default.png",
    title: "BlockElf",
    description:
      "BlockElf enables users to query on-chain data using natural language. Our product abstracts the complexities of on-chain queries, making this vital data accessible to everyone, regardless of their technical expertise.",
    date: new Date("Oct 31, 2024"),
    tags: ["AI", "On-chain Data", "Natural Language", "Query", "LLM"],
    links: [
      ["Link", "https://blockelf.vercel.app"],
      ["Submission ETHGlobal", "https://ethglobal.com/showcase/blockelf-qxtw5"],
      ["Submission REDACTED", "https://devpost.com/software/block-elf"],
      ["Github", "https://github.com/y-pakorn/blockelf"],
    ],
    prizes: [
      [
        "REDACTED - Honorable Mention",
        "https://devpost.com/software/block-elf",
      ],
      [
        "ETHGlobal Singapore - NEAR Protocol: User owned AI is Near",
        "https://ethglobal.com/showcase/blockelf-qxtw5",
      ],
    ],
  },
  {
    at: "NoirHack 2025",
    atIcon: "https://avatars.githubusercontent.com/u/72610319?s=280&v=4",
    title: "Noiri",
    description:
      "Noiri is a privacy-preserving money market protocol on Ethereum L1 powered by Noir. Users can lend, borrow, repay and withdraw with interest, while keeping their positions private. Liquidations are triggered publicly but the liquidated positions remain private.",
    date: new Date("May 10, 2025"),
    tags: [
      "Privacy",
      "Cryptography",
      "zkSNARK",
      "Noir",
      "Ethereum",
      "Money Market",
      "Lending",
    ],
    links: [
      ["Link", "zk-lending.vercel.app/"],
      ["Github", "https://github.com/JernKunpittaya/zk-lending"],
      [
        "announcement",
        "https://discord.com/channels/1113924620781883405/1359700989082599618/1378053635077967934",
      ],
    ],
    prizes: [
      [
        "NoirHack 2025 - 2nd Place",
        "https://discord.com/channels/1113924620781883405/1359700989082599618/1378053635077967934",
      ],
    ],
  },
  {
    at: "Sui Overflow 2025",
    atIcon: "https://vote.sui.io/favicon.ico",
    title: "Shroud",
    description:
      "Shroud is the first fully functional privacy-preserving DApp on the Sui blockchain, enabling confidential and compliant trading by integrating zero-knowledge proofs with public DEX infrastructure.",
    date: new Date("May 23, 2025"),
    tags: ["Privacy", "Cryptography", "zkSNARK", "Sui", "DEX", "ZK DEX"],
    links: [
      ["Link", "https://zkshroud.xyz/"],
      ["Github", "https://github.com/y-pakorn/shroud"],
    ],
    prizes: [
      [
        "Sui Overflow 2025 - Cryptography 2nd Place",
        "https://blog.sui.io/2025-sui-overflow-hackathon-winners/#cryptography",
      ],
    ],
  },
] as {
  at: string
  atIcon: string
  title: string
  description: string
  date: Date
  tags: string[]
  links: [string, string][]
  prizes: [string, string][]
}[]

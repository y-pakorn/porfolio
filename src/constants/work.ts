export const WORKS = []
export const HACKATHONS = [
  {
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
      ["hackathon", "https://delphilabs.devpost.com"],
      ["submission", "https://devpost.com/software/night-market"],
      ["github", "https://github.com/Tetration-Lab/night-market"],
    ],
    prizes: [
      [
        "Delphi Labs Cosmos Hackathon Osmosis 2nd Place",
        "https://devpost.com/software/night-market",
      ],
    ],
  },
  {
    title: "ECDSA Signing In Tfhe-rs",
    description:
      "Experiment and technical report on implementing fully homomorphic encrypted elliptic curve digital signature algorithm (ECDSA) using tfhe-rs",
    date: new Date("Jun 30, 2023"),
    tags: ["Cryptography", "Homomorphic Encryption", "tfhe-rs", "ECDSA"],
    links: [
      ["bounty", "https://github.com/zama-ai/bounty-program/issues/45"],
      ["submission", "https://github.com/yoyoismee"],
      ["github", "https://github.com/Tetration-Lab/TFHECDSA"],
      [
        "docs",
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
    title: "ZTF",
    description:
      "Decentralized cross-chain bounty and crisis management protocol. A.k.a. On-chain ctf with claimable bounty using zero-knowledge proof.",
    date: new Date("Oct 28, 2023"),
    tags: ["Cryptography", "zkVM", "zkSNARK", "RISC-0", "revm"],
    links: [
      ["link", "https://ztf.tetrationlab.com/"],
      ["submission", "https://ethglobal.com/showcase/ztf-xnvwb"],
      ["github", "https://github.com/Tetration-Lab/ztf"],
    ],
    prizes: [
      ["ETHOnline 2023 Finalist", "https://ethglobal.com/showcase/ztf-xnvwb"],
      [
        "ETHOnline 2023 - Best Use Of Wormhole",
        "https://ethglobal.com/showcase/ztf-xnvwb",
      ],
    ],
  },
  {
    title: "Turing Zero zkVM",
    description:
      "Turing Zero zkVM is a zk circuit simulating a simple Turing machine, and the circuit can prove that given a public input tape and output tape, there is a program witness that sucessfully simulate with such tape.",
    date: new Date("Nov 12, 2023"),
    tags: ["Cryptography", "zkVM", "Turing Machine", "Noir"],
    links: [
      ["link", "https://turing-zero.tetrationlab.com/"],
      ["submission", "https://devfolio.co/projects/zkvm-f280"],
      ["github", "https://github.com/Tetration-Lab/turing-zero"],
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
    title: "Type-5 zkEVM",
    description:
      "Type-5 zkEVM is a 30-ish opcodes/instructions simplified EVM that captures important concepts like state transition proof, opcodes, etc. Users can easily add/modify opcodes or VM behaviour due to our small, easily-read codebase.",
    date: new Date("Nov 12, 2023"),
    tags: ["Cryptography", "zkVM", "EVM", "Noir"],
    links: [
      ["link", "https://t5zkevm.tetrationlab.com/"],
      ["submission", "https://devfolio.co/projects/zkvm-f280"],
      ["github", "https://github.com/Tetration-Lab/turing-zero"],
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
        "ETHGlobal Frameworks - Optimism Super Frame Discovery",
        "https://ethglobal.com/showcase/frames-hub-w77f9",
      ],
    ],
  },
  {
    title: "EVM Trace",
    description:
      "EVMtrace aims to shed light on adopting cryptography on chains. Collecting data with techniques like tracing, tracking precompiles, pattern recognition, and manual works. EVMtrace provides a user-friendly dashboard and etherscan-like tools.",
    date: new Date("Apr 16, 2024"),
    tags: ["EVM", "Cryptography", "Dashboard", "Analytics"],
    links: [
      ["link", "https://evmtrace.info"],
      ["submission", "https://ethglobal.com/showcase/evmtrace-z6vh8"],
      ["github", "https://github.com/scb-10x/evmtrace-etl"],
    ],
    prizes: [
      [
        "ETHGlobal Circuit Breaker Finalist",
        "https://ethglobal.com/showcase/evmtrace-z6vh8",
      ],
    ],
  },
]

export const REGISTRY = {
  chain: {
    Osmosis: {
      title: "Osmosis",
      description:
        "A Cosmos SDK-based AMM protocol that enables liquidity providers to earn fees and yield by providing liquidity in a multi-token pool",
      logo: "https://cryptologos.cc/logos/osmosis-osmo-logo.svg?v=033",
      website: "https://osmosis.zone",
    },
    Optimism: {
      title: "Optimism",
      description:
        "A Layer 2 scaling solution for Ethereum that enables fast, low-cost, and scalable transactions",
      logo: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg?v=033",
      website: "https://optimism.io",
    },
    Initia: {
      title: "Initia",
      description:
        "Initia is a network for interwoven rollups. Binding a highly interwoven system of modular networks through architectural ownership.",
      logo: "https://initia.xyz/favicon.svg",
      website: "https://initia.xyz",
    },
  },
  organization: {
    "Curia Lab": {
      title: "Curia Lab",
      description:
        "Curia Lab is a research and development lab focusing on privacy-preserving technologies and decentralized governance",
      logo: "https://www.curialab.xyz/images/favicon.png",
      website: "https://curialab.xyz",
    },
  },
} as {
  chain: Record<
    string,
    { title: string; description: string; logo: string; website: string }
  >
  organization: Record<
    string,
    { title: string; description: string; logo: string; website: string }
  >
}

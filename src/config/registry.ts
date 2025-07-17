export const REGISTRY = {
  chain: {
    Osmosis: {
      title: "Osmosis",
      description:
        "A Cosmos SDK-based AMM protocol that enables liquidity providers to earn fees and yield by providing liquidity in a multi-token pool",
      logo: "https://images.seeklogo.com/logo-png/60/2/osmosis-osmo-icon-logo-png_seeklogo-609346.png",
      website: "https://osmosis.zone",
    },
    Optimism: {
      title: "Optimism",
      description:
        "A Layer 2 scaling solution for Ethereum that enables fast, low-cost, and scalable transactions",
      logo: "https://altcoinsbox.com/wp-content/uploads/2023/03/optimism-logo.jpg",
      website: "https://optimism.io",
    },
    Sui: {
      title: "Sui",
      description:
        "Sui is a first-of-its-kind Layer 1 blockchain and smart contract platform designed to make digital asset ownership fast, private, secure, and accessible.",
      logo: "https://assets.staticimg.com/cms/media/8uGGQmvkfODw7cnx3GuekBb404A2bTYUcTjBklHja.png",
      website: "https://sui.io",
    },
    Initia: {
      title: "Initia",
      description:
        "Initia is a network for interwoven rollups. Binding a highly interwoven system of modular networks through architectural ownership.",
      logo: "https://chainbroker.io/_next/image/?url=https%3A%2F%2Fstatic.chainbroker.io%2Fmediafiles%2Fprojects%2Finitia%2Finitia.jpeg&w=2560&q=75",
      website: "https://initia.xyz",
    },
    Agnostic: {
      title: "Chain Agnostic",
      description: "Agnostic to any specific blockchain",
      logo: "https://www.freeiconspng.com/uploads/related-white-star-vector-star-png-transparent-background-star-png--20.png",
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
    Minity: {
      title: "Minity",
      description:
        "Minity is a platform for building analytics and data visualization for Initia and interwoven roll-ups",
      logo: "https://pbs.twimg.com/profile_images/1801220850009718784/HycPd4WK_400x400.jpg",
      website: "https://minity.xyz",
    },
  },
} as {
  chain: Record<
    string,
    { title: string; description: string; logo: string; website?: string }
  >
  organization: Record<
    string,
    { title: string; description: string; logo: string; website: string }
  >
}

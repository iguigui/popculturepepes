export const ETH_MAINNET_NETWORK = {
  chainId: "0x1",
  chainName: "Ethereum Mainnet",
  rpcUrls: ["https://mainnet.infura.io/v3/bde0a312a4954054a3173a284307245a"],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://etherscan.io/"],
};

export const ETH_SEPOLIA_NETWORK = {
  chainId: `0x${Number(11155111).toString(16)}`,
  chainName: "Ethereum Sepolia",
  rpcUrls: ["https://rpc.sepolia.dev"],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://sepolia.etherscan.io"],
};

export const ETH_GOERLI_NETWORK = {
  chainId: `0x${Number(5).toString(16)}`,
  chainName: "Ethereum Goerli",
  rpcUrls: ["https://eth-goerli.public.blastapi.io"],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://goerli.etherscan.io"],
};

export const POLYGON_MAINNET_NETWORK = {
  chainId: "0x89", // web3.utils.toHex(137) === "0x89"
  chainName: "Polygon Mainnet",
  rpcUrls: ["https://polygon-rpc.com/"],
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  blockExplorerUrls: ["https://polygonscan.com/"],
};
export const POLYGON_MUMBAI_NETWORK = {
  chainId: "0x13881", //web3.utils.toHex(80001) === "0x13881"
  chainName: "Polygon Mumbai Testnet",
  rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
};
export const ETH_LOCALHOST_NETWORK = {
  chainId: "0x539",
  chainName: "Hardhat ETH",
  rpcUrls: ["http://localhost:8545"],
  nativeCurrency: {
    name: "HardhatETH",
    symbol: "HardhatETH",
    decimals: 18,
  },
};
export const SEPOLIA_BLAST = {
  chainId: `0x${Number(168587773).toString(16)}`,
  chainName: "Blast Sepolia",
  rpcUrls: ["https://sepolia.blast.io"],
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
};

export const NETWORK =
  process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "development"
    ? SEPOLIA_BLAST
    : SEPOLIA_BLAST; //uncomment this line to switch to mainnet
// process.env.NODE_ENV === "prod" ? ETH_GOERLI_NETWORK : ETH_GOERLI_NETWORK;

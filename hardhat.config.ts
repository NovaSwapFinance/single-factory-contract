import { HardhatUserConfig } from "hardhat/config";

import "@matterlabs/hardhat-zksync";

const config: HardhatUserConfig = {
  defaultNetwork: "zkLinkNovaMainnet",
  networks: {
    zkLinkNovaMainnet: {
      url: 'https://rpc.zklink.io',
      ethNetwork: 'mainnet',
      zksync: true,
      verifyURL: 'https://explorer.zklink.io/contract_verification',
    },
    zklinkNovaSepoliaTestnet: {
      url: 'https://sepolia.rpc.zklink.io',
      ethNetwork: 'sepolia',
      zksync: true,
      verifyURL: 'https://sepolia.explorer.zklink.io/contract_verification',
    },
    hardhat: {
      zksync: false,
    },
  },
  zksolc: {
    version: '1.3.13',
    settings: {
      // find all available options in the official documentation
      // https://era.zksync.io/docs/tools/hardhat/hardhat-zksync-solc.html#configuration
      isSystem: true,
    },
    
  },
  solidity: {
    version: '0.8.20',
  },
};

export default config;

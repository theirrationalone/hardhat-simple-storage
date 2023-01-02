require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/accounts");
require("./tasks/block-number");

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "rpc__url___not__provided";
const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY || "private__key___not__provided";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "coinmarketcap__api__key___not__provided";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "etherscan__api__key___not__provided";

module.exports = {
    defaultNetwork: "hardhat",
    solidity: {
        compilers: [{ version: "0.8.17" }, { version: "0.8.8" }],
    },
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [METAMASK_PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            url: "http://127.0.0.1:8545",
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        noColors: true,
        outputFile: "gas-report.txt",
        token: "MATIC",
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
    mocha: {
        timeout: 1000 * 60 * 5,
    },
};

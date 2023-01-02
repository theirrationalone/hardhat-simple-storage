const { task } = require("hardhat/config");

task("accounts", "\x1b[36mPrints Number of accounts to work with local Project development!\x1b[0m").setAction(
    async (taskArgs, hre) => {
        const accounts = await hre.ethers.getSigners();

        for (const account of accounts) {
            console.log(`\x1b[32mAccount: ${account.address}\x1b[0m`);
        }
    }
);

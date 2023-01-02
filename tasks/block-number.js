const { task } = require("hardhat/config");

task(
    "block-number",
    "\x1b[36mPrints Current Block Number that can be used for Transaction(s) to be Mined!\x1b[0m"
).setAction(async (taskArgs, hre) => {
    const currentBlockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`\x1b[32mCurrent Block-Number is: ${currentBlockNumber.toString()}\x1b[0m`);
});

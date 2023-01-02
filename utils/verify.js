const { run } = require("hardhat");

module.exports = async (contractAddress, constructorArguments) => {
    console.log("\x1b[33m%s\x1b[0m", "Verifying Contract on Etherscan, Please wait...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: constructorArguments,
        });
        console.log("\x1b[32m%s\x1b[0m", "Contract Verified Successfully!");
    } catch (e) {
        if (!!e.message.toLowerCase().includes("already verified")) {
            console.log("\x1b[32m%s\x1b[0m", "Contract Already Verified!");
        } else {
            console.log(`\x1b[31mverify.js -- ERROR: ${e}\x1b[0m`);
        }
    }
};

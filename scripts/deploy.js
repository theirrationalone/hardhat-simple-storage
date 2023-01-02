const { ethers, network } = require("hardhat");
require("dotenv").config();

const verify = require("../utils/verify");

const main = async () => {
    console.log("\x1b[33m%s\x1b[0m", "Deploying Contract, Please wait...");
    const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await simpleStorageFactory.deploy();
    await simpleStorage.deployed();
    console.log(
        `\x1b[32mContract Deployed with Address: \x1b[36m${simpleStorage.address} \x1b[32mSuccessfully!\x1b[0m`
    );

    if (network.config.chainId.toString() === "5" || !!process.env.ETHERSCAN_API_KEY) {
        console.log("\x1b[33m%s\x1b[0m", "Confirming Blocks, Please Wait...");
        await simpleStorage.deployTransaction.wait(6);
        console.log("\x1b[32m%s\x1b[0m", "Blocks Confirmed!");
        await verify(simpleStorage.address, []);
    }

    console.log("\x1b[36m%s\x1b[0m", "Interacting with Contract...");
    console.log("");

    console.log("\x1b[33m%s\x1b[0m", "Fetching Current Favorite Number, Please wait...");
    const currentFavoriteNumber = await simpleStorage.retrieve();
    console.log(`\x1b[32mCurrent Favorite Number: \x1b[35m${currentFavoriteNumber.toString()}\x1b[0m`);
    console.log("");

    console.log("\x1b[33m%s\x1b[0m", "Updating Favorite Number, Please wait...");
    const updateFavNumTxResponse = await simpleStorage.store("9");
    await updateFavNumTxResponse.wait(1);
    console.log("\x1b[32m%s\x1b[0m", "Favorite Number Updated!");
    const updatedFavoriteNumber = await simpleStorage.retrieve();
    console.log(`\x1b[32mUpdated Favorite Number: ${updatedFavoriteNumber.toString()}!\x1b[0m`);
    console.log("");

    console.log("\x1b[33m%s\x1b[0m", "Adding New Person with his/her Favorite Number, Please wait...");
    const addPersonTxResponse = await simpleStorage.addPerson("Anil", "36");
    await addPersonTxResponse.wait(1);
    console.log("\x1b[32m%s\x1b[0m", "New Person Added Successfully!");
    console.log("");

    console.log("\x1b[33m%s\x1b[0m", "Fetching Person, Please wait...");
    const [favoriteNumber, name] = await simpleStorage.getPerson("0");
    console.log(
        `\x1b[32mPerson Name: \x1b[35m${name} \x1b[32mand his/her Favorite Number is: \x1b[35m${favoriteNumber.toString()} \x1b[32m!\x1b[0m`
    );
    console.log("");

    console.log("\x1b[33m%s\x1b[0m", `Fetching ${name}'s Favorite Number, Please wait...`);
    const favoriteNumberOfPerson = await simpleStorage.getFavoriteNumberOfPerson(name.toString());
    console.log(`\x1b[32mFavorite Number of ${name} is \x1b[35m${favoriteNumberOfPerson.toString()}\x1b[0m`);
    console.log("");

    console.log("\x1b[36m%s\x1b[0m", "Interaction With Contract is Completed!");
};

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(`\x1b[31mdeploy.js -- ERROR: ${err}\x1b[0m`);
        process.exit(1);
    });

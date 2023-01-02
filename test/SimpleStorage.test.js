const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("\x1b[35mSimpleStorage -- Unit Test\x1b[0m", () => {
    let simpleStorageFactory, simpleStorage;
    const nameToAdd = "theirrationalone";
    const favoriteNumberToAdd = "999";
    beforeEach(async () => {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
        await simpleStorage.deployed();
    });

    it("\x1b[36mShould have Current Favorite Number \x1b[35m'0' \x1b[36minitially!\x1b[0m", async () => {
        const favoriteNumber = await simpleStorage.retrieve();
        assert.equal(favoriteNumber.toString(), "0");
    });

    it("\x1b[36mShould Update Favorite Number Correctly and Successfully!\x1b[0m", async () => {
        const txResponse = await simpleStorage.store("9");
        await txResponse.wait(1);

        const updatedFavoriteNumber = await simpleStorage.retrieve();

        assert.equal(updatedFavoriteNumber.toString(), "9");
        assert.notEqual(updatedFavoriteNumber.toString(), "0");
    });

    it("\x1b[36mShould Add new Person with his/her Favorite Number Correctly and Successfully!\x1b[0m", async () => {
        const txResponse = await simpleStorage.addPerson(nameToAdd, favoriteNumberToAdd);
        await txResponse.wait(1);

        const [favoriteNumber, name] = await simpleStorage.getPerson("0");

        assert.equal(name, nameToAdd);
        assert.equal(favoriteNumber.toString(), favoriteNumberToAdd);
    });

    it("\x1b[36mShould be Reverted if fetched a Person who don't exist!\x1b[0m", async () => {
        await expect(simpleStorage.getPerson("0")).to.be.reverted;
    });

    it("\x1b[36mShould return Favorite Number of a Person Correctly!\x1b[0m", async () => {
        const txResponse = await simpleStorage.addPerson(nameToAdd, favoriteNumberToAdd);
        await txResponse.wait(1);

        const favoriteNumber = await simpleStorage.getFavoriteNumberOfPerson(nameToAdd);

        assert.equal(favoriteNumber.toString(), favoriteNumberToAdd);
    });
});

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarketplace", function () {
  it("Should return the new greeting once it's changed", async function () {
    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    const nftMarketplace = await NFTMarketplace.deploy();
    // await greeter.deployed();

    
    // wait until the transaction is mined
   

    console.log(nftMarketplace.address)
  });
});

const { ethers } = require("ethers");

require("dotenv").config({ path: ".env" });

const { BASE_URL, PRIVATE_KEY } = process.env;

async function getAccountBalance(PRIVATE_KEY, BASE_URL) {
  const provider = new ethers.providers.JsonRpcProvider(BASE_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

  console.log("wallet", wallet);
  console.log("wallet address", wallet.address);
  const balance = await provider.getBalance(
    wallet.address
  );
  console.log("balance", balance);
  try {
    const balance = await wallet.getBalance();
    console.log(balance);
    console.log("Account Balance:", ethers.utils.formatEther(balance), "ETH");
  } catch (error) {
    console.error("Error fetching account balance:", error);
  }
}

// const PRIVATE_KEY = "YOUR_PRIVATE_KEY";
// const BASE_URL = "https://rpc-mainnet.maticvigil.com"; // Mainnet RPC URL for Polygon (Matic)

getAccountBalance(PRIVATE_KEY, BASE_URL);

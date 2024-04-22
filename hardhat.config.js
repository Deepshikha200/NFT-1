/* eslint-disable no-unused-vars */
const fs = require("fs");
/* eslint-disable import/no-extraneous-dependencies */

require("@nomiclabs/hardhat-waffle");

require("dotenv").config({ path: ".env" });

const { BASE_URL, PRIVATE_KEY } = process.env;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    amoy: {
      url: BASE_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: "0.8.4",
};

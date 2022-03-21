require("@nomiclabs/hardhat-waffle");


const ALCHEMY_API_KEY = "";

const ROPSTEN_PRIVATE_KEY = "";

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};

require("@nomiclabs/hardhat-waffle");


const ALCHEMY_API_KEY = "1mqxw-OBwSSK9yV-fTK3eHULrFme0WHH";

const ROPSTEN_PRIVATE_KEY = "8e9782556665488cc51c9f6378587abfeaf117645e5874269438aef3e70c9431";

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
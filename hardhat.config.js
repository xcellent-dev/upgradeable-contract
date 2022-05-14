/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-truffle5");
require('@openzeppelin/hardhat-upgrades');

module.exports = {
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts/contracts"
  },
  solidity: "0.8.4",
};

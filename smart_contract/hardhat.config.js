require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/VwV_vADAbftrl5K4YhIMwXsLJ3QgmZud",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

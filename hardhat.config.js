

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: API_URL,
      chainId: 80001, // Chain ID for Polygon Mumbai Testnet
      accounts: [PRIVATE_KEY]
    }
  },
};


// hardhat.config.js

// require('dotenv').config();
// require("@nomiclabs/hardhat-ethers");

// const { API_URL, PRIVATE_KEY } = process.env;

// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     hardhat: {},
//     polygon_mumbai: {
//       url: API_URL || "https://polygon-mumbai.g.alchemy.com/v2/https://polygon-mumbai.g.alchemy.com/v2/gRFPxpaWuiowthSvrjK3moxfWqovdOAn", // Provide your own API URL
//       chainId: 80001, // Chain ID for Polygon Mumbai Testnet
//       accounts: [PRIVATE_KEY],
//     },
//   },
// };


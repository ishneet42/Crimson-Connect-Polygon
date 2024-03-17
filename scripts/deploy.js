// async function main() {
//     const HelloWorld = await ethers.getContractFactory("DataStored");
 
//     // Start deployment, returning a promise that resolves to a contract object
//     const data_stored = await HelloWorld.deploy("Data has been Stored");
//     console.log("Contract deployed to address:", data_stored.address);
//  }
 
//  main()
//    .then(() => process.exit(0))
//    .catch(error => {
//      console.error(error);
//      process.exit(1);
//    });
 

//    // contract address  0xbF264dA6AC3ECBEBde979675a068EaaCC5279941

// async function main() {
//     const DataStored = await ethers.getContractFactory("DataStored");
 
//     const dataStored = await DataStored.deploy("Initial Data");
//     console.log("Contract deployed to address:", dataStored.address);

//     // Store data
//     await dataStored.setData("New data");

//     // Retrieve stored data
//     const storedData = await dataStored.getData();
//     console.log("Stored Data:", storedData);
// }

// main()
//     .then(() => process.exit(0))
//     .catch(error => {
//         console.error(error);
//         process.exit(1);
//     });


const { ethers } = require("hardhat");
const readline = require("readline");

async function main() {
    const DataStored = await ethers.getContractFactory("DataStored");

    const dataStored = await DataStored.deploy("Initial Data");
    console.log("Contract deployed to address:", dataStored.address);

    // Create an interface to read input from the console
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    // Prompt the user to enter input data
    rl.question("Enter User ID: ", async function(inputData) {
        // Close the readline interface
        rl.close();

        // Store the input data
        await dataStored.setData(inputData);

        // Retrieve stored data
        const storedData = await dataStored.getData();
        console.log("Stored Data:", inputData);

        // Exit the process
        process.exit(0);
    });
}

main()
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


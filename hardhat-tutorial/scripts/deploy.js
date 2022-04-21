const { ethers }= require("hardhat");
require("dotenv").config({path: ".env"});
const {CRYPTO_DEVS_NFT_CONTRACT_ADDRESS} = require("../constants/index.js")

async function main() {
    const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;
    const cryptoDevTokenContract = await ethers.getContractFactory("CryptoDevToken");

    //deploy the contract

    const cryptoDevsTokenContractDeploy = await cryptoDevTokenContract.deploy(cryptoDevsNFTContract);

    await cryptoDevsTokenContractDeploy.deployed(); //0x53bbA30a80f142e2B97c502513AeFE8aA89E01c8

    console.log("CryptoDevsContractToken is deployed to: ", cryptoDevsTokenContractDeploy.address);
}

main()
    .then(()=>{
        process.exit(0);
    })
    .catch((err)=>{
        console.error(err);
        process.exit(1);
    });
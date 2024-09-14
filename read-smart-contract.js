
const votingContractABI = require('./votingContractABI');
const { ethers } = require('ethers')
const provider = new ethers.providers.JsonRpcProvider('https://linea-sepolia.infura.io/v3/2a253b904fcc44d980240bf856b40043')

const walletAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'
const walletAbi = votingContractABI

const readContract = async() => {
    const walletContract = new ethers.Contract(
        walletAddress,
        walletAbi,
        provider
    )

    // check contact name
    const contractName =  await walletContract.name()
    console.log(contractName)

    // check contract value
    const contractValue = await walletContract.value()
    console.log(contractValue.toString())

    //check contract balance 
    const contractBalance = await walletContract.balance()
    console.log(contractBalance.toString())
}

readContract();
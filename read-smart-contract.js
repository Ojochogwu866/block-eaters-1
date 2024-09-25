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

    const contractName =  await walletContract.name()
    console.log(contractName)

    const contractValue = await walletContract.value()
    console.log(contractValue.toString())

    const contractBalance = await walletContract.balance()
    console.log(contractBalance.toString())
}

readContract();
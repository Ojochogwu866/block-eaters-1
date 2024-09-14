/** Read operation on a smart contract */

const { ethers } = require('ethers')
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/2a253b904fcc44d980240bf856b40043')

const queryChain = async () => {
    const block = await provider.getBlockNumber();
    console.log(block)

    const balance = await provider.getBalance('0x511024BC2431474a28d46ED33a71B080De38dcB4')

    const balanceInEther = ethers.utils.formatEther(balance.toString())
    console.log("Accoung Balance:", balanceInEther.toString())
}

queryChain();

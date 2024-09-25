# Block Eaters 1 - Voting Contract

A simple Ethereum-based voting contract with read functionality.

## Overview

This project demonstrates how to interact with an Ethereum smart contract deployed on the Linea Sepolia testnet. It uses ethers.js to read data from the contract.

## Features

- Read contract name
- Fetch current contract value
- Check contract balance

## Prerequisites

- Node.js
- npm

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/block-eaters-1.git
   cd block-eaters-1
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `votingContractABI.js` file with your contract's ABI.

## Usage

Run the script to read contract data:

```
node scriptName.js
```

## Contract Details

- Network: Linea Sepolia
- Contract Address: 0xd9145CCE52D386f254917e481eB44e9943F39138
- Provider: Infura

## Code Snippet

```javascript
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
```

## License

MIT

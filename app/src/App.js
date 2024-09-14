import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import votingContractABI from './votingContractABI.json';
import { Button, Card, Input } from './components/customCompoennts'

const walletAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
const walletAbi = votingContractABI;

export default function VotingApp() {
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [delegateAddress, setDelegateAddress] = useState('');
  const [voterAddress, setVoterAddress] = useState('');
  const [proposalNumber, setProposalNumber] = useState('');

  useEffect(() => {
    const initializeContract = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send('eth_requestAccounts', []);
          const signer = provider.getSigner();
          setSigner(signer);
          const contract = new ethers.Contract(walletAddress, walletAbi, signer);
          setContract(contract);
        } catch (error) {
          console.error('Failed to initialize contract:', error);
        }
      } else {
        console.log('Please install MetaMask!');
      }
    };

    initializeContract();
  }, []);

  const handleDelegate = async () => {
    if (contract && delegateAddress) {
      try {
        await contract.delegate(delegateAddress);
        alert('Delegation successful!');
      } catch (error) {
        console.error('Error delegating:', error);
      }
    }
  };

  const handleGiveRightToVote = async () => {
    if (contract && voterAddress) {
      try {
        await contract.giveRightToVote(voterAddress);
        alert('Right to vote given successfully!');
      } catch (error) {
        console.error('Error giving right to vote:', error);
      }
    }
  };

  const handleVote = async () => {
    if (contract && proposalNumber) {
      try {
        await contract.vote(parseInt(proposalNumber));
        alert('Vote cast successfully!');
      } catch (error) {
        console.error('Error voting:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Voting Contract Interaction</h1>
            
            <Card className="mb-6">
              <h2 className="text-lg font-medium mb-2">Delegate Vote</h2>
              <Input
                type="text"
                placeholder="Delegate address"
                value={delegateAddress}
                onChange={(e) => setDelegateAddress(e.target.value)}
                className="mb-2"
              />
              <Button onClick={handleDelegate}>Delegate</Button>
            </Card>

            <Card className="mb-6">
              <h2 className="text-lg font-medium mb-2">Give Right to Vote</h2>
              <Input
                type="text"
                placeholder="Voter address"
                value={voterAddress}
                onChange={(e) => setVoterAddress(e.target.value)}
                className="mb-2"
              />
              <Button onClick={handleGiveRightToVote}>Give Right to Vote</Button>
            </Card>

            <Card>
              <h2 className="text-lg font-medium mb-2">Vote</h2>
              <Input
                type="number"
                placeholder="Proposal number"
                value={proposalNumber}
                onChange={(e) => setProposalNumber(e.target.value)}
                className="mb-2"
              />
              <Button onClick={handleVote}>Vote</Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
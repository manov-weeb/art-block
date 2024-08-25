import  { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers"; // ethers v6
// import { contractABI, contractAddress } from "../utils/constants"; // Update with ArtBlock's contract details

export const WalletContext = createContext();

// const getEthereumContract = () => {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();
//   const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

//   return transactionContract;
// };

export const WalletProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount") || 0);
  const [pointsEarned, setPointsEarned] = useState(0); // Assuming points earned is tracked here

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setConnectedAccount(accounts[0]);
      // Set pointsEarned based on your logic
      setPointsEarned(0);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setConnectedAccount(accounts[0]);
        // Set pointsEarned based on your logic
        setPointsEarned(120);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.error(error);
      throw new Error("No Ethereum Object.");
    }
  };

  const sendTransaction = async (addressTo, amount, message, keyword) => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask");

     //  const provider = new ethers.providers.Web3Provider(window.ethereum);
     //  const signer = provider.getSigner();
     //  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

      const parsedAmount = ethers.utils.parseEther(amount);

      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: "0x5208", // 21000 Gwei (default gas limit for a transaction)
            value: parsedAmount.toString(), // Amount in Wei
          },
        ],
      });

     //  const transactionHash = await transactionContract.addToBlockchain(
     //    addressTo,
     //    parsedAmount,
     //    message,
     //    keyword
     //  );

      setIsLoading(true);

     //  await transactionHash.wait();

      setIsLoading(false);

     //  const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
      localStorage.setItem("transactionCount", transactionCount.toNumber());

    } catch (error) {
      console.error("Transaction failed:", error);
      throw new Error("Transaction failed.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        connectedAccount,
        connectWallet,
        sendTransaction,
        isLoading,
        transactionCount,
        pointsEarned,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => useContext(WalletContext);

import hre from "hardhat";

async function main() {
  // Compile and deploy the contract
  const MyCustomToken = await hre.ethers.getContractFactory("MyCustomToken");
  const myCustomToken = await MyCustomToken.deploy();
  await myCustomToken.deployed();

  console.log("MyCustomToken deployed to:", myCustomToken.address);

  // Replace with the address to which you want to mint tokens and the amount
  const recipientAddress = "0x20063E657646969aCFAC74977dD9dDAc34d92e33";
  const mintAmount = hre.ethers.utils.parseUnits("100", 18); // Mint 90 tokens

  // Mint new tokens
  const tx = await myCustomToken.mint(recipientAddress, mintAmount);
  await tx.wait();

  console.log(`Minted ${mintAmount.toString()} tokens to ${recipientAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

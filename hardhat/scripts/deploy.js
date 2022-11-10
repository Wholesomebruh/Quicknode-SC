const {ethers} = require("hardhat");
async function main() {
  const Bounty = await ethers.getContractFactory("Bounty");
  const NftBounty = await Bounty.deploy();
  await NftBounty.deployed();
  console.log("Address is :",NftBounty.address)
}
main()
.then(() => process.exit(0))
.catch((error)=>{
  console.error(error);
  process.exit(1)
})
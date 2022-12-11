const{loadFixture}=require("@nomicfoundation/hardhat-network-helpers")
const {ethers,hre}= require("hardhat");

const {expect}= require("chai");

describe("TESTING",function(){
    let owner;
    let Add1;
    async function runnow(){
    const MyTest= await ethers.getContractFactory("StreaxToken")
    const myTest = await MyTest.deploy();
    [owner , Add1] = await ethers.getSigners();
    return {myTest,owner,Add1}
    }

    describe("Deployment", function(){
        
        
        it("Successfully Deployed", async function(){
            
            const{myTest}=await loadFixture(runnow);
            console.log("Contract Address : ",myTest.deployTransaction.hash)
            console.log("Owner Address : ",myTest.deployTransaction.from)
        })
        it("Issuing Token", async function(){
            const{myTest,owner,Add1}=await loadFixture(runnow);
            await myTest.IssueToken(50)
            const balance =  await myTest.balanceOf(owner.address)
            console.log(balance)
            //console.log(Add1.address)
        })
        it("Transferring Token", async function(){
            const{myTest,owner,Add1}=await loadFixture(runnow);
            await myTest.IssueToken(50)
            await myTest.TransferToken(Add1.address,2)
            const balance =  await myTest.balanceOf(owner.address)
            const balancet=await myTest.balanceOf(Add1.address)
            console.log("Balance of Account to which tokens are transfered : ",balancet)
            console.log("Balance of Account from which tokens are transfered : ",balance)

        })
    })
    //runnow();
})
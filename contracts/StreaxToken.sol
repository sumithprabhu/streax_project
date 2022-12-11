//SPDX-License-Identifier: UNLICENSED
 
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

 contract StreaxToken is ERC20{
    //Created a Token , with token name SToken and Symbol ST 
     constructor() ERC20("SToken","ST"){
     }
     function BalanceOfUser() public returns(uint) {
        return 123;
     }
     //Function to issue token to the one who is the user
     function IssueToken(uint amount) public{
        //currently no limit for sissuing tokens but that feature can be added
        _mint(msg.sender,amount);
     }

     //function to transfer tokens from users to anoter account with specified amount of tokens
     function TransferToken(address receiver,uint256 amount) public{
        //to Check amount of token to transfer is less then present in account
        require(balanceOf(msg.sender)>=amount,"try again");
        
        transfer(receiver, amount);
     }

 }
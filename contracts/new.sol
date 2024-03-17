// SPDX-License-Identifier: None

pragma solidity >=0.8.9;

contract DataStored {
   event DataStoredEvent(address indexed sender, string data);
   
   string private storedData;

   constructor(string memory initMessage) {
      storedData = initMessage;
   }

   function setData(string memory newData) public {
      storedData = newData;
      emit DataStoredEvent(msg.sender, newData);
   }

   function getData() public view returns (string memory) {
      return storedData;
   }
}





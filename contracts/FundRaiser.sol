// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract Fundraiser is Ownable {
  using SafeMath for uint256;

  struct Donation {
    uint256 value;
    uint256 date;
  }
  struct Data{
      uint Amount;
      address Address;
      uint Date;
  }
  Data[] public datas;
  Data[] public newdata;

  mapping(address => Donation[]) public _donations;

  event DonationReceived(address indexed donor, uint256 value);
  event Withdraw(uint256 amount);

  string public name;
  string public image;
  string public description;
  address payable public beneficiary;
  uint256 public goalAmount;
  string public facebookLink;
  string public linkedinLink;
  string public twitterLink;
  string public videoLink;
  string public campaignType;
  uint256 public totalDonations;
  uint256 public donationsCount;

  constructor(
    string memory _name,
    string memory _image,
    string memory _description,
    uint256 _goalAmount,
    string memory _facebookLink,
    string memory _linkedinLink,
    string memory _twitterLink,
    string memory _videoLink,
    string memory _campaignType,
    address payable _beneficiary,
    address _custodian
  ) public {
    name = _name;
    image = _image;
    description = _description;
    goalAmount = _goalAmount;
    facebookLink =_facebookLink;
    linkedinLink =_linkedinLink;
    twitterLink = _twitterLink;
    videoLink = _videoLink;
    campaignType = _campaignType;
    beneficiary = _beneficiary;
    _transferOwnership(_custodian);
  }

  function setBeneficiary(address payable _beneficiary) public onlyOwner {
    beneficiary = _beneficiary;
  }

  function myDonationsCount() public view returns (uint256) {
    return _donations[msg.sender].length;
  }
  
  //----------------------------------------------------------------------------------------------------------------
  function getAllDonation() public view returns(Data[] memory){
       
       return datas;
      
  }

  function dataByIndex(uint index) public view returns(Data memory){
      return datas[index];
  }

//   function allData() public view returns(Data[] memory ){
//     //   for(uint i =0; i<datas.length; i++){  
//     //        return (datas[i].Amount,datas[i].Address,datas[i].Date);
//     //    }
   
//     Data[] memory id = new Data[](datas.length);
// for (uint i = 0; i < datas.length; i++) {
// Data storage member = datas[i];
// id[i] = member;
// }
// return id;

//     }
   
  //---------------------------------------------------------------------------------------------------------------

  function donate() public payable {
    datas.push(Data({Amount:msg.value, Address:msg.sender, Date:block.timestamp}));
    Donation memory donation = Donation({
      value: msg.value,
      date: block.timestamp
    });
    _donations[msg.sender].push(donation);
    totalDonations = totalDonations.add(msg.value);
    donationsCount++;

    emit DonationReceived(msg.sender, msg.value);
  }

  function myDonations() public view returns (
      uint256[] memory values,
      uint256[] memory dates
  )

  {
    uint256 count = myDonationsCount();
    values = new uint256[](count);
    dates = new uint256[](count);
    for (uint256 i = 0; i < count; i++) {
        Donation storage donation = _donations[msg.sender][i];
        values[i] = donation.value;
        dates[i] = donation.date;
    }
    return (values, dates);
  }

  function withdraw() public onlyOwner {
      uint256 balance = address(this).balance;
      beneficiary.transfer(balance);
      emit Withdraw(balance);
  }

  fallback() external payable {
      totalDonations = totalDonations.add(msg.value);
      donationsCount++;
  }

}
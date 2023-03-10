// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './FundRaiser.sol';

contract FundraiserFactory {
  uint256 constant maxLimit = 100;
  Fundraiser[] public _fundraisers;

  event FundraiserCreated(Fundraiser indexed fundraiser, address indexed owner);

  function createFundraiser(
    string memory name,
    string memory image,
    string memory description,
    string memory facebookLink,
    string memory linkedinLink,
    string memory twitterLink,
    string memory videoLink,
    string memory campaignType,
    uint256 goalAmount,
    address payable beneficiary
  ) public {
    Fundraiser fundraiser = new Fundraiser(
      name,
      image,
      description,
      goalAmount,
      facebookLink,
      linkedinLink,
      twitterLink,
      videoLink,
      campaignType,
      beneficiary,
      msg.sender
    );
    _fundraisers.push(fundraiser);
    emit FundraiserCreated(fundraiser, msg.sender);
  }


  function fundraisersCount() public view returns (uint256) {
    return _fundraisers.length;
  }

  function fundraisers(uint256 limit, uint256 offset)
    public
    view
    returns (Fundraiser[] memory coll)
  {
    require(offset <= fundraisersCount(), 'offset out of bounds');

    uint256 size = fundraisersCount() - offset;
    size = size < limit ? size : limit;
    size = size < maxLimit ? size : maxLimit;
    coll = new Fundraiser[](size);

    for (uint256 i = 0; i < size; i++) {
      coll[i] = _fundraisers[offset + i];
    }

    return coll;
  }
}

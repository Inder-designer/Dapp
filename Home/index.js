import React from 'react'
import FundRaising from './FundRaising/FundRaising'
import HowItWork from './How it work/HowItWork'
import LatestStories from './LatestStories/LatestStories'
import StartCampaign from './StartCampaign/StartCampaign'
import StartDonating from './StartDonating/StartDonating'
import TrustedByWorld from './TrustedByWorld/TrustedByWorld'
import ClickOnIndustry from './clickOnIndustry/ClickOnIndustry'
import JoinOurMIssion from './JoinOurMission/JoinOurMIssion'
const index = () => {
  return (
    <div >
      <StartDonating/>
      <FundRaising />
      <HowItWork/>
      <LatestStories/>
      <StartCampaign/>
      <TrustedByWorld/>
      <ClickOnIndustry/>
      <JoinOurMIssion/>
    </div>
  )
}

export default index

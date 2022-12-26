import React,{useContext,useState,useEffect} from 'react'
import style from './FundRaising.module.css'
import Image from 'next/image'
import Images from '../../public/Images'
import {ContextData} from '../../Context/DataContext';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import FundraiserContract from '../../build/contracts/Fundraiser.json';
const FundRaising = () => {
  const[contract,setContract]=useState([]);
  const[fundName,setFundName]=useState(null);
  const[data,setData]=useState([])
  const [image,setImage]=useState(null);
  const [goalAmount,setGoalAmount]=useState(null);
  const[description,setDescription]=useState("");
const {funds,fundRaiser}=useContext(ContextData)

useEffect(() => {
  funds.map((item,i)=>{
    console.log(item,'funDraiser');
    if (item) {
      init(item);
    }
  })
 
}, []);
const init = async (fundRaiser) => {
  try {
    const fund = fundRaiser;
    console.log(fund,'-------------fund---------------')
    const provider = await detectEthereumProvider();
    const web3 = new Web3(provider);
    const account = await web3.eth.getAccounts();
    console.log('accounts---', account);
    const instance = new web3.eth.Contract(FundraiserContract.abi, fund);
    // setWeb3(web3);
    setContract(instance);
    // setAccounts(account);
    // console.log('----account0--', accounts[0]);
    setFundName(await instance.methods.name().call());
    setImage(await instance.methods.image().call());
   
    // setFaceBookLink(await instance.methods.facebookLink().call())
    // setlinkedINLink(await instance.methods.linkedinLink().call())
    // setTwitterLink(await instance.methods.twitterLink().call())
    setDescription(await instance.methods.description().call());
    setGoalAmount(await instance.methods.goalAmount().call());
    setData(...data,[
    fundName,image,description,goalAmount,
    ])
    // console.log('---------data--------');
console.log(await instance.methods.name().call());
console.log(await instance.methods.image().call())
console.log(description);
console.log(goalAmount);
console.log(image);
   } catch (error) {
    console.error(error);
  }
};
console.log(data,'data');
  const cardData=[{
    image:Images.cardImg1,
    title:"Black Girls Code",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  },
  {
    image:Images.cardImg2,
    title:"Solar Foundation",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  },
  {
    image:Images.cardImg3,
    title:"Skill India",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  },
  {
    image:Images.cardImg4,
    title:"Pet Aid",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  },
  {
    image:Images.cardImg5,
    title:"Old Age Home",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  },
  {
    image:Images.cardImg6,
    title:"River Cleaning",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  },
  {
    image:Images.cardImg7,
    title:"Specially Abled",
    percentage:"75%",
    raisedData:"$ 50,09,008",
    subHeading:"raised",
  },
  {
    image:Images.cardImg8,
    title:"Village Education",
    raisedData:"$ 50,09,008",
    percentage:"75%",
    subHeading:"raised",
  }
]
  return (
    <div className={` py-5 ${style.section}`}>
      <div className='container text-center'>
        <p className={style.heading}>Listed campaign for fundraising</p>
       <p> See why we're the fundraising engine of choice for nonprofits concerned with ease of use and higher impact.
       </p>
      <div className='row gx-0 mx-5'>
      {cardData.map((item,i)=>
        <div key={i} className={`col-lg-3  mb-5 mx-auto ${style.columstyle}`}>
        <div className="card p-3" >
  <Image src={item.image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{fundName}</h5>
    <div className={`progress ` }>
  <div className={`progress-bar w-75 ${style.progressBar}`} role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className='row gx-0'>
  <div className='col-md-6'>
  <p>{item.raisedData}</p> 
  </div>
  <div className='col-md-6'>
  <p>{item.percentage}</p> 
  </div>
</div>
 <p className={`text-start ${style.raised}`}>Raised</p>
 <button className={`btn ${style.viewButton}`}>view campiagn</button>
  </div>
</div>
        </div>
      )}
      
      </div>
      <button className={style.viewAll}>View All</button>
      </div>
    </div>
  )
}

export default FundRaising

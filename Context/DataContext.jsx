import React,{useState,createContext, useContext, useEffect} from 'react'
import FundraiserFactoryContract from '../build/contracts/FundraiserFactory.json';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
const ContextData=createContext();
const DataContext = (props) => {
    const[contract,setContract]=useState(null);
    const[accounts,setAccounts]=useState(null);
    const[fundRaiser,setFundRaiser]=useState("")
    const[funds,setFunds]=useState([]);
    useEffect(()=>{
        init();
    },[])
    const init = async () => {
        try {
          const web3Modal = new Web3Modal({
            network: 'testnet',
            cacheProvider: true,
          });
          const connection = await web3Modal.connect();
          const web3 = new Web3(connection);
          const networkId = await web3.eth.net.getId();
          console.log(networkId,"network id ")
          const deployedNetwork = FundraiserFactoryContract.networks[networkId];
          console.log(deployedNetwork,"deployedNetwork--json file ")
          const accounts = await web3.eth.getAccounts();
          const instance = new web3.eth.Contract(
            FundraiserFactoryContract.abi,
            deployedNetwork && deployedNetwork.address,
          );
          console.log(instance,'instance');
          setContract(instance);
          setAccounts(accounts);
          const funds = await instance.methods.fundraisers(100, 0).call();
          setFunds(funds);
          console.log('------', funds);
          funds.map((fundraiser,index)=>
            setFundRaiser(fundraiser)
          )
          
        } catch (error) {
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
      };
  return (
    <div>
       <ContextData.Provider value={{contract,accounts,fundRaiser,funds}}>
        {props.children}
      </ContextData.Provider>
    </div>
  )
}

export  {ContextData,DataContext}

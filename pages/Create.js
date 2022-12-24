import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import style from '../styles/Create.module.css'
import IMAGES from '../public/Images'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FundraiserFactoryContract from '../build/contracts/FundraiserFactory.json';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from 'yup';
const Create = () => {
    const [contract,setContract]=useState(null);
    const[file,setFile]=useState("");
    const[accounts,setAccounts]=useState(null)
    const [getData, setGetData] = useState({
        file:"",   
        title:"",
        type:"",
        comment:"",
        beneficiary:"",
        goalAmount:"",
        twitterLink:"",
        faceBookLink:"",
        linkedinLink:"",
        videoLink:""
   })
   console.log(axios);
   const networkAddSchema = Yup.object().shape({
        file: Yup.string().required("**Please Upload Image!"),
        title:Yup.string().required("**Required!"),
        type:Yup.string().required("Please Select"),
        comment:Yup.string().required("Please Enter comment Here"),
        beneficiary:Yup.string().required("**Required!"),
        goalAmount:Yup.string().required("Please Enter GoalAmount"),
        twitterLink:Yup.string().required("Please Enter TwitterLink"),
        faceBookLink:Yup.string().required("Please Enter faceBookLink"),
        linkedinLink:Yup.string().required("Please Enter linkedInLink"),
        videoLink:Yup.string().required("Please Enter VideoLink"),
})
useEffect(() => {
    init();
  }, []);

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
      
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };
  // async function saveToIpfs(e) {
  //   const file = e.target.files[0];
  //  console.log(file,'--------file')
  //   try {
  //     const formData = new FormData();
  //               formData.append("file", file);

  //               const resFile = await axios({
  //                   method: "post",
  //                   url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //                   data:formData,
  //                   headers: {
  //                       'pinata_api_key': '141e53a02abcfba7afd4',
  //                       'pinata_secret_api_key':'d57f4dd6c7acfba2dbeacbcdd89b7fe7a70cd9266f9062222f9651e8f128fe07',
  //                       "Content-Type": "multipart/form-data"
  //                   },
  //               });
  //                 console.log(resFile);
  //               const ImgHash = `https://ipfs.io/ipfs/${resFile.data.IpfsHash}`;
  //               console.log(ImgHash); 
  //               console.log(resFile.data.IpfsHash);
  //     // const reader = new window.FileReader();
  //     // reader.readAsArrayBuffer(file);
  //     // reader.onloadend = () => {
  //     //   console.log("Buffer data: ", Buffer(reader.result));
  //     // }
  //     // const created = await client.add(file);
  //     // const fileUrl = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  //     // const fileUrl = `https://polygon-mumbai.g.alchemy.com/v2/bOkRhmdHOEc1AnDW3_-C2DCfQKTjhZOf ${file} `;
  //     //  console.log(added.path,'path');
  //     setFile("ImgHash");
  //   } catch (error) {
  //     alert(error);
  //     console.log('Error uploading file: ', error);
  //   }
  // }
  return (
    <section className={style.section}>
    <ToastContainer/>
    <div className='container'>
      <p className={style.heading}>Tell us about your campaign to get started with</p>
      <Formik initialValues={{
        file:"",   
        title:"",
        type:"",
        comment:"",
        beneficiary:"",
        goalAmount:"",
        faceBookLink:"",
        twitterLink:"",
        linkedinLink:"",
        videoLink:""
                         }}
                              validationSchema={networkAddSchema}
                                onSubmit={async(values) => {
                                   console.log(values)
    const { title,file,type,comment, beneficiary, goalAmount,twitterLink,faceBookLink,linkedinLink,videoLink } = values;
            //                        console.log({ 
            //         fileName:values.file.name, 
            //             type: values.file.type,
            //      size: `${values.file.size} bytes`
            // })
         
          
const data = JSON.stringify({
  title,file,comment,faceBookLink,linkedinLink,twitterLink,videoLink,type,goalAmount,beneficiary 
});
console.log(data);
try {
  const formData = new FormData();
      formData.append("file", file);
       const resFile = await axios({
                     method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data:formData,
                    headers: {
                        'pinata_api_key': '0f5da370094bb5f9f336',
                       'pinata_secret_api_key':'b32eff4114105dc6a21fb283a5ad11ecd8196243931110c6e14a9624a1abe966',
                       "Content-Type": "multipart/form-data"
                   },
               });
               const ImgHash = `https://ipfs.io/ipfs/${resFile.data.IpfsHash}`;
               console.log(ImgHash); 
              console.log(resFile.data.IpfsHash);
               setFile(ImgHash);
  const transaction =await  contract.methods
    .createFundraiser(title,file,comment,faceBookLink,linkedinLink,twitterLink,videoLink,type,goalAmount,beneficiary )
    .send({ from: accounts[0] });
    console.log(transaction);
  toast.success("Campaign Create Successfully");
 
} catch (error) {
  // alert(error);
  alert(error);
 
}

                              }}
                         >
                              {({ values, setValues, setFieldValue, errors, touched }) => (
                                   <Form>
            <div className={`d-flex flex-column align-items-center justify-content-center ${style.fileContainer}`}>
                 <input className='text-center mx-auto'  accept={
                'image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp'
              } type="file"  name="file"  
                 onChange={e => { setGetData({  ...getData, file: e.target.files[0] })
   setFieldValue('file', e.target.files[0]) }}
                    />
                    {errors.file && touched.file ? (
                  <div className="input-error text-danger">{errors.file}</div>
                 ) : null}

  
   {/* <input
              type="file"
              name={'images'}
              accept={
                'image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp'
              }
              id="upload"
              onChange={saveToIpfs} // fix here change to image
          
            /> */}
  {/* {errors.file && touched.file ? (
                  <div  style={{marginLeft:"-150px"}}  className="input-error text-danger my-2">{errors.file}</div>
                 ) : null} */}

                
            </div>
          
            <div className='row gx-0 my-2'>
                <div className='col-md-6'>
                    <p>Campaign Title</p>
                    <input className={style.input} type="text"  name="title"
                         onChange={e => { setGetData({  ...getData, title: e.target.value, })
   setFieldValue('title', e.target.value) }}
                    />
                    {errors.title && touched.title ? (
                  <div className="input-error text-danger">{errors.title}</div>
                 ) : null}
                        
                </div>
                <div className='col-md-6 d-flex flex-column'>
                    <p className={style.label}>Campaign Type</p>
                    <select className={`ms-auto ${style.dropdown}`} name="type" 
                     onChange={e => { setGetData({  ...getData, type: e.target.value, })
   setFieldValue('type', e.target.value) }}>
                        <option>Agriculture</option>
                        <option>HomeLess</option>
                        <option>education</option>
                        <option>Homeless</option>
                    </select>
                    {errors.type && touched.type ? (
                  <div style={{marginLeft:"65px"}} className="input-error text-danger">{errors.type}</div>
                 ) : null}
                </div>
            </div>
            <div className='row my-3 gx-0'>
            <textarea name="comment" rows={5} 
            onChange={e => { setGetData({  ...getData, comment: e.target.value, })
   setFieldValue('comment', e.target.value) }}/>
            {errors.comment && touched.comment ? (
                  <div className="input-error text-danger">{errors.comment}</div>
                 ) : null}
            </div>
            <div className='row'>
                <div className='col-md-6'>
                <p>Beneficiary Wallet Address</p>
                    <input name="beneficiary" className={style.input} type="text"
 onChange={e => { setGetData({  ...getData,beneficiary : e.target.value, })
   setFieldValue('beneficiary', e.target.value) }}
                    /> 
                   {errors.beneficiary && touched.beneficiary ? (
                  <div className="input-error text-danger">{errors.beneficiary}</div>
                 ) : null}
                </div>
                <div className='col-md-6 d-flex flex-column'>
                <p className={style.label}>Goal amount (in USD)</p>
                    <input name="goalAmount"  className={`ms-auto ${style.input}`} type="text"
                         onChange={e => { setGetData({  ...getData, goalAmount: e.target.value, })
   setFieldValue('goalAmount', e.target.value) }}
                    /> 
                   {errors.goalAmount && touched.goalAmount ? (
                  <div  style={{marginLeft:"65px"}} className="input-error text-danger">{errors.goalAmount}</div>
                 ) : null}
                    
                   
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                <p>FaceBook Link</p>
                    <input name="faceBookLink" className={style.input} type="text"
                         onChange={e => { setGetData({  ...getData, faceBookLink: e.target.value, })
   setFieldValue('faceBookLink', e.target.value) }}
                    /> 
                   {errors.faceBookLink && touched.faceBookLink ? (
                  <div className="input-error text-danger">{errors.faceBookLink}</div>
                 ) : null}
                    {/* <button className={style.add}>Add Another</button> */}
                </div>
                <div className='col-md-6 d-flex flex-column'>
                <p className={style.label}>Twitter Link ( Youtube, Vimeo )</p>
                    <input className={`ms-auto ${style.input}`}
  type="text" name="twitterLink"  onChange={e => { setGetData({  ...getData,twitterLink : e.target.value, })
   setFieldValue('twitterLink', e.target.value) }}
 /> 
                    {errors.twitterLink && touched.twitterLink ? (
                  <div  style={{marginLeft:"65px"}} className="input-error text-danger">{errors.twitterLink}</div>
                 ) : null}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                <p>LinkedIn Link</p>
                    <input className={style.input} type="text"  name="linkedinLink"
                         onChange={e => { setGetData({  ...getData, linkedinLink: e.target.value, })
   setFieldValue('linkedinLink', e.target.value) }}
                    /> 
                   {errors.linkedinLink && touched.linkedinLink ? (
                  <div className="input-error text-danger">{errors.linkedinLink}</div>
                 ) : null}
                    {/* <button className={style.add}>Add Another</button> */}
                </div>
                <div className='col-md-6 d-flex flex-column'>
                <p className={style.label}>Video Link ( Youtube, Vimeo )</p>
                    <input className={`ms-auto ${style.input}`}
  type="text" name="videoLink"  onChange={e => { setGetData({  ...getData,videoLink : e.target.value, })
   setFieldValue('videoLink', e.target.value) }}
 /> 
                    {errors.videoLink && touched.videoLink ? (
                  <div  style={{marginLeft:"65px"}} className="input-error text-danger">{errors.videoLink}</div>
                 ) : null}
                </div>
            </div>
            <div className='text-center'>
            <button type="submit" className={style.create}>Create</button>
            </div>
            <Image src ={IMAGES.Create}/>
        </Form>
        )}
     </Formik>
        </div>
    </section>
  )
}

export default Create

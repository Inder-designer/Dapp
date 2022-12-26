import Layout from '../component/Layout'
import '../styles/globals.css'
import Script from "next/script";
import Head from "next/head";
import {DataContext} from '../Context/DataContext';
function MyApp({ Component, pageProps }) {
  return <>
  <Head> 
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Source+Sans+Pro:wght@400;600;700;900&display=swap" rel="stylesheet"/>
       <link href="https://fonts.cdnfonts.com/css/helvetica-neue-9" rel="stylesheet"/>
       <link href="https://fonts.cdnfonts.com/css/svn-gilroy" rel="stylesheet"/>          
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
       <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
   </Head>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></Script>
 <Layout><DataContext><Component {...pageProps} /></DataContext></Layout></>
}

export default MyApp

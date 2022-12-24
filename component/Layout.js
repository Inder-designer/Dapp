
import Header from './Header'
import Footer from '../component/Footer/Footer'
const Layout = ({children,type}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}
export default Layout
import Nav from "../components/Nav"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import CompanyPage from "../components/CompanyPage"
export default function Company(){
  return(
    <div>
      <Nav/>
      <CompanyPage/>

      <Newsletter/>
      <Footer/>
    </div>
  )
}
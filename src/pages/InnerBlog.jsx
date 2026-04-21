import Nav from "../components/Nav"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import InnerBlogPage from "../components/InnerBlogPage"

export default function InnerBlog(){
  return(
    <div>
      <Nav/>
      <InnerBlogPage />
      <Newsletter/>
      <Footer/>
    </div>
  )
}

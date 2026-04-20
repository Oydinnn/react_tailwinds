import { Link } from "react-router-dom";
import facebookIcon from "../../public/img/facebook.svg"
import instagramIcon from "../../public/img/instagram.svg"
import twitterIcon from "../../public/img/twitter.svg"
import linkdeinIcon from "../../public/img/linkidein.svg"

export default function Footer() {
  return (
    <div className="pt-24">
      <div className="container flex justify-between pb-16">
        <div className="w-[35%]">
          {/* Public papkadagi rasmlarga to'g'ridan-to'g'ri murojaat */}
          <img src="/img/Shapes.svg" alt="Shapes.svg" />  {/* / bilan boshlang */}
          <h2 className="h2 mb-10">Let's make something special</h2>
          <h4 className="h4 mb-7">Let's talk! 🤙</h4>
          <p className="p mb-1">020 7993 2905</p>
          <p className="p mb-7">hi@finsweet.com</p>
          <p className="p w-48">DLF Cybercity, Bhubaneswar, India, &52050</p>
        </div>
        
        <div className="flex flex-col gap-24">
          <div className="flex justify-around gap-24 pt-24 pr-24">
            <ul className="flex flex-col gap-3">
              <li><Link className="h6" to="/">Home</Link></li>
              <li><Link className="h6" to="/service">Service</Link></li>
              <li><Link className="h6" to="/company">Company</Link></li>
              <li><Link className="h6" to="/career">Career</Link></li>
              <li><Link className="h6" to="/blog">Blog</Link></li>
              <li><Link className="h6" to="/contact">Contact us</Link></li>
            </ul>

            <ul className="flex flex-col gap-3">
              <li><Link className="h6" to="/service">Service</Link></li>
              <li><Link to="/service#technical-support">Technical support</Link></li>
              {/* <li><Link to="/testing">Testing</Link></li> */}
              <li><Link to="/service#development">Development</Link></li>
              <li><Link to="/service#aws-azure">AWS/Azure</Link></li>
              <li><Link to="/service#consulting">Consulting</Link></li>
              <li><Link to="/service#information-technology">Information Technology</Link></li>
            </ul>

            <ul className="flex flex-col gap-3">
              <li><Link className="h6" to="/resources">Resources</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/testimonial">Testimonial</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of use</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <Link className="ml-auto" to="/contact">
            <img src="/img/Contact.svg" alt="contact.svg" /> 
          </Link>
        </div>
      </div>

      {/* footer footer */}
      <div className="bg-[#FFE6D2] w-full py-10">
        <div className="container flex justify-between items-center">
          <div className="flex justify-between items-center gap-10">
            <img src="/img/logoFooter.svg" alt="logoFooter.svg" />  {/* / bilan */}
            <p className="p">©2021 Finsweet</p>
          </div>
          <div className="flex justify-between items-center gap-7">
            <img src={facebookIcon} alt="facebook" />
            <img src={twitterIcon} alt="twitter" />
            <img src={instagramIcon} alt="instagram" />
            <img src={linkdeinIcon} alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  )
}
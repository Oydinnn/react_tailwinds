import { Link } from 'react-router-dom'

export default function Nav(){
  return(
    <div className="fixed z-50 w-full bg-[#232536] text-white ">
      <nav className=" mb-24 h-20 container flex items-center justify-between">
        <Link to="/">
          <img src="./img/Logo.svg" alt="logo" />
        </Link>
        <div className="flex items-center justify-between gap-8">
          <ul className="flex items-center gap-8">
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/service">Service</Link></li>
            <li><Link className="link" to="/company">Company</Link></li>
            <li><Link className="link" to="/career">Career</Link></li>
            <li><Link className="link" to="/blog">Blog</Link></li>
            <li><Link className="link" to="/contact">Contact us</Link></li>
          </ul>
          <Link to="/clone">
            <img src="./img/Clone Button.svg" alt="button" />
          </Link>
        </div>
      </nav>
    </div>
  )
}
import { NavLink } from 'react-router-dom'
import Logo from '../../public/img/Logo.svg'
import CloneButton from '../../public/img/CloneButton.svg'





export default function Nav(){
  return(
    <div className="fixed z-50 w-full bg-[#232536] text-white ">
      <nav className="mb-24 h-20 container flex items-center justify-between">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <div className="flex items-center justify-between gap-8">
          <ul className="flex items-center gap-8">
            <li>
              <NavLink 
                className={({ isActive }) => 
                  isActive ? "active-link border-t-2 border-[#FFA155] pt-7" : "link"
                } 
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => 
                  isActive ? "active-link border-t-2 border-[#FFA155] pt-7" : "link"
                } 
                to="/service"
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => 
                  isActive ? "active-link border-t-2 border-[#FFA155] pt-7" : "link"
                } 
                to="/company"
              >
                Company
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => 
                  isActive ? "active-link border-t-2 border-[#FFA155] pt-7" : "link"
                } 
                to="/career"
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => 
                  isActive ? "active-link border-t-2 border-[#FFA155] pt-7" : "link"
                } 
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => 
                  isActive ? "active-link border-t-2 border-[#FFA155] pt-7" : "link"
                } 
                to="/contact"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
          <NavLink to="/clone">
            <img src={CloneButton} alt="CloneButton" />
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
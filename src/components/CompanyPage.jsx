import { Link, useLocation } from "react-router-dom"
import { useEffect } from 'react';
import ShapeSquareBeije from '../../public/img/ShapeSquareBeije.svg'
import ShapeSquare from '../../public/img/ShapeSquare.svg'
import ShapeRight from '../../public/img/ShapeRight.svg'
import ShapeRectangle from '../../public/img/ShapeRectangle.png'
import CompanyImg1 from '../../public/img/companyImg1.png'
import CompanyImg2 from '../../public/img/companyImg2.png'
import CompanyImg3 from '../../public/img/companyImg3.png'
import LogoBar from '../../public/img/LogoBar.png'
import visionImg from '../../public/img/visionImg.png'
import Team1 from '../../public/img/Team1.png'
import Team2 from '../../public/img/Team2.png'
import Team3 from '../../public/img/Team3.png'
import Team4 from '../../public/img/Team4.png'
import Team5 from '../../public/img/Team5.png'
import Team6 from '../../public/img/Team6.png'
import Team7 from '../../public/img/Team7.png'
import Team8 from '../../public/img/Team8.png'
import instagramIcon from "../../public/img/instagram.svg"
import twitterIcon from "../../public/img/twitter.svg"
import linkdeinIcon from "../../public/img/linkidein.svg"




export default function CompanyPage(){
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return(
    <div>
      <div className="container pt-48 pb-6">
      <div className="flex justify-between">
        <img src={ShapeSquareBeije} alt="ShapeSquareBeije" />
        <img src={ShapeRight} alt="ShapeRight" />
      </div>


      {/* Company */}
      <div className="w-[50%]">
        <span className="span mb-5">Company</span>
        <h2 className="h2 mb-6">Award-winning Company seen and used by millions around the world.</h2>
        <p className="p mb-16">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
      </div>

      <div className="relative">
        <img className="absolute right-0 top-[-24px] w-[350px] h-6" src={ShapeRectangle} alt="ShapeRectangle" />
      </div>

      <div className="flex gap-3">
        <img src={CompanyImg1} alt="CompanyImg1" />
        <img src={CompanyImg2} alt="CompanyImg2" />
        <img src={CompanyImg3} alt="CompanyImg3" />
      </div>




      {/* our story */}
      <div className="py-24 flex justify-between">
        <div className="w-[40%]">
          <img className="mb-4" src={ShapeSquare} alt="ShapeSquare" />
          <span className="span my-4">Our Story 👇 </span>
          <h3 className="h3 mb-6">From Startups to Titans of Industry</h3>
          <p className="p">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up</p>
        </div>

        <div className="w-[50%] bg-[#FFD3AF91] pt-10 pl-32">
          <div className="flex gap-20 mb-6">
            <div>
               <h3 className="h3 ">1560+</h3>
              <img className="w-20 h-2 mb-2" src={ShapeRectangle} alt="ShapeRectangle" />
              <p className="p">Project Delivered</p>
            </div>
            <div>
               <h3 className="h3 ">100+</h3>
              <img className="w-20 h-2 mb-2" src={ShapeRectangle} alt="ShapeRectangle" />
              <p className="p">Project Delivered</p>
            </div>
          </div>

          <div className="flex gap-20">
            <div>
               <h3 className="h3 ">950+</h3>
              <img className="w-20 h-2 mb-2" src={ShapeRectangle} alt="ShapeRectangle" />
              <p className="p">Project Delivered</p>
            </div>
            <div>
               <h3 className="h3 ">10yrs</h3>
              <img className="w-20 h-2 mb-2" src={ShapeRectangle} alt="ShapeRectangle" />
              <p className="p">Project Delivered</p>
            </div>
          </div>
        </div>
      </div>

      {/* LogoBar */}
      <img src={LogoBar} alt="LogoBar" />

      </div>
      {/* EXPERTISE */}
      <div className="bg-[#ECF8F9] py-24">
        <div className="container my-24 flex justify-between gap-24">
        <div className="w-[624px] pt-12">
          <span className="span mb-5">OUR EXPERTISE</span>
          <h2 className="h2 mb-6 ">We want to get local identification in every corner of the world in this era of global citizenship</h2>
          <p className="p">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
        </div>


        <div  className="w-[515px] flex flex-col gap-4">
          <div className="bg-white  h-[140px]">
            <div className="flex p-8 gap-12">
              <img src="./img/rocket.svg" alt="rocket" />
              <div>
                <h6 className="h6">On Time Delivery</h6>
                <p className="p">Through True Rich Attended does no end it his mother since real had half every him.</p>
              </div>
            </div>
          </div>


          <div className="bg-white  h-[140px]">
            <div className="flex p-8 gap-12">
              <img src="./img/rocket.svg" alt="rocket" />
              <div>
                <h6 className="h6">On Time Delivery</h6>
                <p className="p">Through True Rich Attended does no end it his mother since real had half every him.</p>
              </div>
            </div>
          </div>


          <div className="bg-white  h-[140px]">
            <div className="flex p-8 gap-12">
              <img src="./img/rocket.svg" alt="rocket" />
              <div>
                <h6 className="h6">On Time Delivery</h6>
                <p className="p">Through True Rich Attended does no end it his mother since real had half every him.</p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>

      {/* Our VISION */}
      <div className="container py-24">
        <div className="w-1/2">
          <span className="span mb-4">OUR VISION</span>
          <h3 className="h3 mb-6">We want to get local identification in every corner of the world in this era of global citizenship.</h3>
          <p className="p mb-16">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
        </div>
        <img className="w-[100%] " src={visionImg} alt="visionImg" />
      </div>




      {/* MEET OUR TEAM */}


      <div className="container pt-24">
        <div className="w-1/2">
          <span className="span mb-4">MEET OUR TEAM</span>
          <h3 className="h3 mb-6">Teamwork is the only way we work</h3>
          <p className="p mb-16">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
        </div>





        
        <div className="flex gap-4 mb-4">
          {[Team1, Team2, Team3, Team4].map((team, index) => (
            <div key={index} className="relative group w-[25%] h-80 overflow-hidden rounded-lg">
              <Link to='/teamTemplate'>
                <img 
                  src={team}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link> 
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500  pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-bold mb-1">Javena Melo</h3>
                  <p className="text-gray-200 text-sm mb-3">Support Assist</p>
                  <div className="flex gap-3 justify-center">
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-colors">
                      <img src={twitterIcon} alt="twitter" />
                    </a>

                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-colors">
                      <img src={instagramIcon} alt="instagram" />
                    </a>

                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-colors">
                      <img src={linkdeinIcon} alt="linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-4">
          {[Team5, Team6, Team7, Team8].map((team, index) => (
            <div key={index + 4} className="relative group w-[25%] h-80 overflow-hidden rounded-lg">
              <Link to='/teamTemplate' className="cursor-pointer block" style={{display: 'block', width: '100%', height: '100%'}}>
                <img 
                  src={team}
                  alt={`Team member ${index + 5}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500  pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-bold mb-1">Team Member</h3>
                  <p className="text-gray-200 text-sm mb-3">Position</p>
                  <div className="flex gap-3 justify-center">
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-colors">
                      <img src={twitterIcon} alt="twitter" />
                    </a>

                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-colors">
                      <img src={instagramIcon} alt="instagram" />
                    </a>

                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-colors">
                      <img src={linkdeinIcon} alt="linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
    
  )
}
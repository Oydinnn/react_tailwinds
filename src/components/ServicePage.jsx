import { Link, useLocation } from "react-router-dom"
import arrowIcon from "../../public/img/arrow.svg"
import Feature1 from "../../public/img/Feature1.svg"
import Feature2 from "../../public/img/Feature2.svg"
import Feature3 from "../../public/img/Feature3.svg"
import Feature4 from "../../public/img/Feature4.svg"
import Feature5 from "../../public/img/Feature5.svg"
import Feature6 from "../../public/img/Feature6.svg"
import { useEffect } from 'react';


export default function ServicePage(){
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

   <main>
      {/* // header section */}
      <div className=" bg-[#FFE6D2]">
        <div className="container flex justify-between pt-48 pb-24 gap-60 items-center">
          <div className="w-[50%]">
            <span className="span mb-3">Our Services</span>
            <h2 className="h2">We Build Software Solutionthat Solve Clients Business Challenges</h2>
            <p className="p mb-10">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
            <a className="relative flex justify-between items-center  w-[219px] h-[64px] bg-[#444CFC] py-5 px-8" href="#">
              <img className="absolute top-0 left-0" src="./img/Shapes.svg" alt="shape"/>
              Request Quote
              <img src="./img/Icon.svg" alt="button"/>
            </a>
          </div>
          <div  className="w-[50%]">
            <ul className="flex flex-col gap-3">
                <li><Link className="text-6 font-semibold" to="/service#technical-support">Technical support</Link></li>
                <li><Link className="text-6 font-semibold flex justify-start items-center gap-1" to="/service#development">
                Development
                <img className="w-4" src={arrowIcon} alt="arrow icon" />
                </Link></li>
                <li><Link className="text-6 font-semibold" to="/service#aws-azure">AWS/Azure</Link></li>
                <li><Link className="text-6 font-semibold" to="/service#consulting">Consulting</Link></li>
                <li><Link className="text-6 font-semibold" to="/service#information-technology">Information Technology</Link></li>
              </ul>
          </div>
        </div>
      </div>








      {/* //process section */}
      <div className="container py-24">
      <div className="w-[50%] mb-16">
        <span className="span">OUR PROCESS</span>
        <h2 className="h2 my-4">
          The process we are working With Our client Worldwide
        </h2>
        <p className="p">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable.
        </p>
      </div>

      <div className="flex gap-8  mb-8">
        <div className="w-[30%] p-7 border border-solid border-[#2325362B] flex justify-between gap-8 items-center">
          <img
            className="w-6 h-6"
            src="./img/IconHeadphone.svg"
            alt="IconHeadphone"
          />
          <div>
            <div className="relative flex justify-between">
              <h6 className="h6">Discover</h6>
              <p className="absolute top-[-20px] right-0 text-2xl opacity-20 font-semibold leading-8">01</p>
            </div>
            <p className="p">
              We aim to attain the greatest satisfaction for our clients and be
              one of the prominent.
            </p>
          </div>
        </div>

        <div className="w-[30%] p-7 border border-solid border-[#2325362B] flex justify-between gap-8 items-center">
          <img
            className="w-6 h-6"
            src="./img/IconHeadphone.svg"
            alt="IconHeadphone"
          />
          <div>
            <div className="relative flex justify-between">
              <h6 className="h6">Discover</h6>
              <p className="absolute top-[-20px] right-0 text-2xl opacity-20 font-semibold leading-8">02</p>
            </div>
            <p className="p">
              We aim to attain the greatest satisfaction for our clients and be
              one of the prominent.
            </p>
          </div>
        </div>


        <div className="w-[30%] p-7 border border-solid border-[#2325362B] flex justify-between gap-8 items-center">
          <img
            className="w-6 h-6"
            src="./img/IconHeadphone.svg"
            alt="IconHeadphone"
          />
          <div>
            <div className="relative flex justify-between">
              <h6 className="h6">Discover</h6>
              <p className="absolute top-[-20px] right-0 text-2xl opacity-20 font-semibold leading-8">03</p>
            </div>
            <p className="p">
              We aim to attain the greatest satisfaction for our clients and be
              one of the prominent.
            </p>
          </div>
        </div>

        
      </div>


        <div className="flex gap-8">
        <div className="w-[30%] p-7 border border-solid border-[#2325362B] flex justify-between gap-8 items-center">
          <img
            className="w-6 h-6"
            src="./img/IconHeadphone.svg"
            alt="IconHeadphone"
          />
          <div>
            <div className="relative flex justify-between">
              <h6 className="h6">Discover</h6>
              <p className="absolute top-[-20px] right-0 text-2xl opacity-20 font-semibold leading-8">04</p>
            </div>
            <p className="p">
              We aim to attain the greatest satisfaction for our clients and be
              one of the prominent.
            </p>
          </div>
        </div>

        <div className="w-[30%] p-7 border border-solid border-[#2325362B] flex justify-between gap-8 items-center">
          <img
            className="w-6 h-6"
            src="./img/IconHeadphone.svg"
            alt="IconHeadphone"
          />
          <div>
            <div className="relative flex justify-between">
              <h6 className="h6">Discover</h6>
              <p className="absolute top-[-20px] right-0 text-2xl opacity-20 font-semibold leading-8">05</p>
            </div>
            <p className="p">
              We aim to attain the greatest satisfaction for our clients and be
              one of the prominent.
            </p>
          </div>
        </div>


        <div className="w-[30%] p-7 border border-solid border-[#2325362B] flex justify-between gap-8 items-center">
          <img
            className="w-6 h-6"
            src="./img/IconHeadphone.svg"
            alt="IconHeadphone"
          />
          <div>
            <div className="relative flex justify-between">
              <h6 className="h6">Discover</h6>
              <p className="absolute top-[-20px] right-0 text-2xl opacity-20 font-semibold leading-8">06</p>
            </div>
            <p className="p">
              We aim to attain the greatest satisfaction for our clients and be
              one of the prominent.
            </p>
          </div>
        </div>

        
      </div>
    </div>









    {/* Technical Support */}

    <div id="technical-support" className="container flex items-center justify-between gap-36 mb-24">
      <div className="mt-36 w-1/2">
        <h4 className="h4">Technical Support</h4>
        <h2 className="h2 mb-6">Best in class tech support for your company. We become your tech backbone</h2>
        <p className="p">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
      </div>
      <div className="w-1/2">
        <img src={Feature1} alt="feature img" />
      </div>
    </div>




      {/* Developoment*/}

    <div id="development" className="bg-[#ECF8F9] mt-24 pb-24">
      
      <div className="container flex items-center justify-between gap-36">
        <div className="w-1/2">
          <img src={Feature4} alt="feature img"  />
        </div>

        <div className="mt-36 w-1/2">
          <h4 className="h4">Developoment</h4>
          <h2 className="h2 mb-6">Best in class tech support for your company. We become your tech backbone</h2>
          <p className="p">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
        </div>
      </div>
    </div>








     {/* AWS/Azure  */}

    <div id="aws-azure" className="container flex items-center justify-between gap-36 pb-24">
      <div className="mt-36 w-1/2">
        <h4 className="h4">AWS/Azure </h4>
        <h2 className="h2 mb-6">We help you deploy, manage and secure your application on leading web services</h2>
        <p className="p">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
      </div>
      <div className="w-1/2">
        <img src={Feature2} alt="feature img" className="w-full h-auto" />
      </div>
    </div>








    {/* Consulting*/}

      <div id="consulting" className="bg-[#ECF8F9] mt-24 pb-24">
        
        <div className="container flex items-center justify-between gap-36">
          <div className="w-1/2">
            <img src={Feature6} alt="feature img"  />
          </div>

          <div className="mt-36 w-1/2">
            <h4 className="h4">Consulting</h4>
            <h2 className="h2 mb-6">Get advice from world class professionals </h2>
            <p className="p">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
          </div>
        </div>
      </div>








     {/* Information Technology */}

    <div id="information-technology" className="container flex items-center justify-between gap-36  pb-24">
      <div className="mt-36 w-1/2">
        <h4 className="h4">Information Technology</h4>
        <h2 className="h2 mb-6">We want to get local identification in every corner of the world in this era of global citizenship.</h2>
        <p className="p">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
      </div>
      <div className="w-1/2">
        <img src={Feature5} alt="feature img" className="w-full h-auto" />
      </div>
    </div>


   </main>




   
    
  )
}
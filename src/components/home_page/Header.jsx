export default function Header(){
  return(
     <header className="bg-[#232536] text-white mb-24">
      {/* <!-- hero --> */}

      <div className="flex justify-between container pt-20 items-center gap-30">
        <div className="w-[624px] h-[420px]">
          <h1 className="text-[68px] font-semibold leading-20 mb-6">  
            Transform Your Idea Into Reality with Finsweet
          </h1>
          <p className="opacity-[60%] text-[16px] leading-6 mb-6">
            The entire Finsweet team knows what's good with Webflow and you can
            too with 1 week and a good attitude.
          </p>
          <a className="relative flex justify-between items-center  w-[219px] h-[64px] bg-[#444CFC] py-5 px-8" href="#">
            <img className="absolute top-0 left-0" src="./img/Shapes.svg" alt="shape"/>
            Request Quote
            <img src="./img/Icon.svg" alt="button"/>
          </a>
        </div>
        <img className="w-[523px] h-[632px]" src="./img/Header Image.svg" alt="" />
        
      </div>

      {/* <!-- logos --> */}
       <div className="container">
        <ul className="flex justify-between items-center">
          <li>
            <span className="text-[14px] opacity-[60%] leading-[20px]">Our Clients</span>
            <p>We've Worked with</p>
          </li>
          <li>
            <img src="./img/Logo — копия.svg" alt="logo"/>
          </li>
          <li>
            <img src="./img/Logo (1).svg" alt="logo"/>
          </li>
          <li>
            <img src="./img/Logo — копия 2.svg" alt="logo"/>
          </li>
          <li>
            <img src="./img/Logo — копия 3.svg" alt="logo"/>
          </li>
          <li>
            <img src="./img/Logo (1) — копия.svg" alt="logo"/>
          </li>
        </ul>
       </div>
    </header>
  )
}
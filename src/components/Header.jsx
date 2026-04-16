export default function Header(){
  return(
     <header class="bg-[#232536] text-white mb-24">
      <nav class="h-20 container flex items-center justify-between">
        <img src="./img/Logo.svg" alt="logo" />
        <div class="flex items-center justify-between gap-8">
          <ul class="flex items-center gap-8">
            <li><a class="border-t-2 border-[#FFA155] pt-7" href="#">Home</a></li>
            <li><a class="link" href="#">Service</a></li>
            <li><a class="link" href="#">Company</a></li>
            <li><a class="link" href="#">Career</a></li>
            <li><a class="link" href="#">Blog</a></li>
            <li><a class="link" href="#">Contact us</a></li>
          </ul>
          <a href="#">
            <img src="./img/Clone Button.svg" alt="button" />
          </a>
        </div>
      </nav>

      {/* <!-- hero --> */}

      <div class="flex justify-between container pt-20 items-center gap-30">
        <div class="w-[624px] h-[420px]">
          <h1 class="text-[68px] font-semibold leading-20 mb-6">
            Transform Your Idea Into Reality with Finsweet
          </h1>
          <p class="opacity-[60%] text-[16px] leading-6 mb-6">
            The entire Finsweet team knows what's good with Webflow and you can
            too with 1 week and a good attitude.
          </p>
          <a class="relative flex justify-between items-center  w-[219px] h-[64px] bg-[#444CFC] py-5 px-8" href="#">
            <img class="absolute top-0 left-0" src="./img/Shapes.svg" alt="shape"/>
            Request Quote
            <img src="./img/Icon.svg" alt="button"/>
          </a>
        </div>
        <img class="w-[523px] h-[632px]" src="./img/Header Image.svg" alt="" />
        
      </div>

      {/* <!-- logos --> */}
       <div class="container">
        <ul class="flex justify-between items-center">
          <li>
            <span class="text-[14px] opacity-[60%] leading-[20px]">Our Clients</span>
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
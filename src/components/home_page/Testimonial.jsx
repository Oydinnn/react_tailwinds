import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function Testimonial(){
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
    <div id="testimonial" className="bg-[#F9F9FF]">
      <div className="container flex justify-between gap-32 ">
        <div className="relative mt-24 flex justify-between gap-32">
          <img className="absolute top-[-16px] left-0" src="./img/ShapeSquare.svg" alt="ShapeSquare.svg" />
          <div className="w-[40%]">
          <h2 className="h2 mb-4">Our customers love what we do</h2>
          <p className="p mb-4">Transform your idea into reality with finsweet</p>
          <p className="p mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          <div>
            <div className="flex gap-3">
              <img src="./img/avatar.svg" alt="avatar" />
              <img src="./img/avatar.svg" alt="avatar" />
              <img src="./img/avatar.svg" alt="avatar" />
            </div>
            <p className="p">30+ Customer Reviews</p>
          </div>
        </div>

        <div className="w-[45%] flex bg-white gap-12">
          <img src="./img/ShapesTestimonial.svg" alt="ShapesTestimonial img" />
          <div className="relative pt-10  px-10">
            <img className="absolute top-[-20px] right-3" src="./img/Quote.svg" alt="Quote.svg" />

            <h4 className="h4">Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</h4>
            <div className="flex justify-between w-full">
              <div className="flex gap-4">
                <img src="./img/avatar.svg" alt="avatar" />
                <div>
                  <h6 className="h6">Johnny Andro</h6>
                  <p className="p">Director, Company</p>
                </div>
              </div>

              <img src="./img/LogoIpsum.svg" alt="LogoIpsum.svg" />
            </div>
          </div>
        </div>
        </div>
      

      </div>
    </div>
    
    
  )
}
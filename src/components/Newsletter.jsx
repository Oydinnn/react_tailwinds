export default function Newsletter(){
  return(
    <div className="container relative">
      <div className="flex h-full">
        <div className="w-full flex justify-between bg-[#666DFF] p-24 text-white gap-24 items-center">
          <div className=" w-[30%]">
            <img className="absolute top-0 left-0 w-20 h-20" src="./img/Shapes.svg" alt="shape"/>
            <span className="span mb-5">NEWSLETTER</span>
            <h4 className="text-[24px] font-semibold leading-9 mb-6 text-white">Subscribe our News Letter to get Latest Updates.</h4>
          </div>
          <div className="w-[50%]">
            <input className="w-full py-5 px-8 bg-white text-gray-600" type="text" placeholder="Paresh@Pixeto.com" />
          </div>
        </div>
        <img src="./img/ShapesTestimonial.svg" alt="ShapesTestimonial.svg" />
      </div>
    </div>
  )
}
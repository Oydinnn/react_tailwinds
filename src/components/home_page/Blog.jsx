export default function Blog(){
  return(
    <div className="bg-[#ECF8F9] py-24">
      <div className="relative container ">
        <img className="absolute top-[-30px] left-0" src="./img/ShapeSquare.svg" alt="ShapeSquare.svg" />
        <h2 className="h2 mb-12">Read our latest blogs & news</h2>
        <div className="flex justify-between gap-12">
          <div className="flex bg-white  w-[50%]">
            <img className=" w-[50%]" src="./img/BlogImg.svg" alt="BlogImg.svg" />
            <div className="p-8">
              <p className="p mb-2">Jan 19, 2021</p>
              <h4 className="h4 mb-6">Today’s best design trends for digital products</h4>
              <a href="#">
                <img src="./img/Read_more.svg" alt="read more" />
              </a>
            </div>
          </div>


          <div className="flex bg-white  w-[50%]">
            <img className=" w-[50%]"  src="./img/BlogImg.svg" alt="BlogImg.svg" />
            <div className="p-8">
              <p className="p mb-2">Jan 19, 2021</p>
              <h4 className="h4 mb-6">Today’s best design trends for digital products</h4>
              <a href="#">
                <img src="./img/Read_more.svg" alt="read more" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
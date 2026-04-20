export default function Service() {
  return (
    <div className="bg-[#FFE6D2] py-24">
      <div className="container">
        <div className="w-[50%] mb-20">
          <span className="span mb-3">OUR SERVICES</span>
          <h2 className="h2 mb-10">
            We build software solutions that solve client's business challenges
          </h2>
          <a
            className="relative flex justify-between items-center  w-[219px] h-[64px] bg-[#444CFC] py-5 px-8"
            href="#"
          >
            <img
              className="absolute top-0 left-0"
              src="./img/Shapes.svg"
              alt="shape"
            />
            Request Quote
            <img src="./img/Icon.svg" alt="button" />
          </a>
        </div>

        <div className="flex justify-between gap-4">
          <div className="w-[30%] bg-white p-12">
            <img src="./img/IconHeadphone.svg" alt="IconHeadphone" />
            <h6 className="h6 my-2.5">Technical support</h6>
            <p className="p mb-6">
              We aim to attain the greatest satisfaction for our clients and be
              one of the prominent names when it comes to world-class service
            </p>
            <a href="#">
              <img src="./img/Read_more.svg" alt="read more" />
            </a>
          </div>


          <div className="w-[30%] bg-white p-12">
            <img src="./img/IconHeadphone.svg" alt="IconHeadphone" />
            <h6 className="h6 my-2.5">Technical support</h6>
            <p className="p mb-6">
              We aim to attain the greatest satisfaction for our clients and be
              one of the prominent names when it comes to world-class service
            </p>
            <a href="#">
              <img src="./img/Read_more.svg" alt="read more" />
            </a>
          </div>


          <div className="w-[30%] bg-white p-12">
            <img src="./img/IconHeadphone.svg" alt="IconHeadphone" />
            <h6 className="h6 my-2.5">Technical support</h6>
            <p className="p mb-6">
              We aim to attain the greatest satisfaction for our clients and be
              one of the prominent names when it comes to world-class service
            </p>
            <a href="#">
              <img src="./img/Read_more.svg" alt="read more" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

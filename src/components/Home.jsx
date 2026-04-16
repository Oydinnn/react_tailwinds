export default function Home() {
  return (
    <div className="container">
      <div className="flex justify-between gap-[100px]">
        <div>
          <span className="span">
            ABOUT US
          </span>
          <h2 className="h2">
            The company leads entire webdesign process from concept to delivery.
          </h2>
        </div>
        <div>
          <h3 className="text-4xl font-semibold leading-14 text-[#232536]">
            The Era Of Technology.
          </h3>
          <p className="p">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.{" "}
          </p>
        </div>
      </div>

      {/* images */}
      <div className="flex gap-[11px] my-14">
        <img src="./img/card1.svg" alt="card1" />
        <img src="./img/card2.svg" alt="card1" />
        <img src="./img/card3.svg" alt="card1" />
      </div>

      {/* clients */}
      <div className="flex gap-20 justify-between items-center">
        <div>
          <h3 className="text-4xl font-semibold leading-14 text-[#232536]">1560+</h3>
          <img src="./img/_client.svg" alt="" />
          <p className="text-[16px] font-normal text-[#5D5F6D]" >Project Delivered</p>
        </div>
        <div>
          <h3 className="text-4xl font-semibold leading-14 text-[#232536]">100+</h3>
          <img src="./img/_client.svg" alt="" />
          <p className="text-[16px] font-normal text-[#5D5F6D]" >Project Delivered</p>
        </div>
        <div>
          <h3 className="text-4xl font-semibold leading-14 text-[#232536]">950+</h3>
          <img src="./img/_client.svg" alt="" />
          <p className="text-[16px] font-normal text-[#5D5F6D]" >Project Delivered</p>
        </div>
        <div>
          <h3 className="text-4xl font-semibold leading-14 text-[#232536]">10yrs</h3>
          <img src="./img/_client.svg" alt="" />
          <p className="text-[16px] font-normal text-[#5D5F6D]" >Project Delivered</p>
        </div>
        
        <a href="#">
          <img src="./img/Read_more.svg" alt="read more" />
        </a>
      </div>
    </div>
  );
}

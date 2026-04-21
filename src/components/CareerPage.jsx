import ShapeRight from '../../public/img/ShapeRight.svg'
import Careers from '../../public/img/careers.png'
import Apply from '../../public/img/Apply.svg'
import { Link } from 'react-router-dom'


export default function CareerPage(){
  return(
    <div >
      <div className="relative container flex flex-col justify-center items-center pt-48">
      
        <img className='absolute top-48 right-0' src={ShapeRight} alt="ShapeRight" />
        <span className="span tracking-widest mb-6">CAREER AT FINSWEET</span>
        <h2 className="h2 w-1/2 text-center mb-6">We hired people who are Always Passionate about what they do</h2>
        <p className="p w-1/2 text-center mb-16">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
        <img src={Careers} alt="Careers" />
        <p className="p mt-20 mb-24 text-center">See Our open positions <br />👇 </p>


        {/* career job's cards */}
        <div className='w-full p-20 bg-[#ECF8F9]'>
          <div className=' flex gap-8 mb-8'>
            <div className='w-1/3 bg-white p-12'>
              <h6 className="h6 mb-2.5">Full Stack Developer</h6>
              <p className="p mb-12">Bengaluru · Full Time. <br /> $10K - $18K · No equity</p>
              <Link to="/innerCareer">
                <img src={Apply} alt="Apply img for link" />
              </Link>
            </div>

            <div className='w-1/3 bg-white p-12'>
              <h6 className="h6 mb-2.5">Full Stack Developer</h6>
              <p className="p mb-12">Bengaluru · Full Time. <br /> $10K - $18K · No equity</p>
               <Link to="/innerCareer">
                <img src={Apply} alt="Apply img for link" />
              </Link>
            </div>

            <div className='w-1/3 bg-white p-12'>
              <h6 className="h6 mb-2.5">Full Stack Developer</h6>
              <p className="p mb-12">Bengaluru · Full Time. <br /> $10K - $18K · No equity</p>
               <Link to="/innerCareer">
                <img src={Apply} alt="Apply img for link" />
              </Link>
            </div>

          </div>


          <div className=' flex gap-8 mb-8'>
            <div className='w-1/3 bg-white p-12'>
              <h6 className="h6 mb-2.5">Full Stack Developer</h6>
              <p className="p mb-12">Bengaluru · Full Time. <br /> $10K - $18K · No equity</p>
               <Link to="/innerCareer">
                <img src={Apply} alt="Apply img for link" />
              </Link>
            </div>

            <div className='w-1/3 bg-white p-12'>
              <h6 className="h6 mb-2.5">Full Stack Developer</h6>
              <p className="p mb-12">Bengaluru · Full Time. <br /> $10K - $18K · No equity</p>
               <Link to="/innerCareer">
                <img src={Apply} alt="Apply img for link" />
              </Link>
            </div>

            <div className='w-1/3 bg-white p-12'>
              <h6 className="h6 mb-2.5">Full Stack Developer</h6>
              <p className="p mb-12">Bengaluru · Full Time. <br /> $10K - $18K · No equity</p>
               <Link to="/innerCareer">
                <img src={Apply} alt="Apply img for link" />
              </Link>
            </div>

          </div>


          <div className=' flex gap-8'>
            <div className='w-1/3 bg-white p-12'>
              <h6 className="h6 mb-2.5">Full Stack Developer</h6>
              <p className="p mb-12">Bengaluru · Full Time. <br /> $10K - $18K · No equity</p>
               <Link to="/innerCareer">
                <img src={Apply} alt="Apply img for link" />
              </Link>
            </div>

            <div className='w-1/3 bg-white p-12'>
              <h6 className="h6 mb-2.5">Full Stack Developer</h6>
              <p className="p mb-12">Bengaluru · Full Time. <br /> $10K - $18K · No equity</p>
               <Link to="/innerCareer">
                <img src={Apply} alt="Apply img for link" />
              </Link>
            </div>

            <div className='w-1/3 bg-white p-12'>
              <h6 className="h6 mb-2.5">Full Stack Developer</h6>
              <p className="p mb-12">Bengaluru · Full Time. <br /> $10K - $18K · No equity</p>
               <Link to="/innerCareer">
                <img src={Apply} alt="Apply img for link" />
              </Link>
            </div>

          </div>

        </div>
      
      </div>


      {/* OUR WORK & CULTURE */}
      <div className='bg-[#FAFAFC] mt-24'>
        <div className='container'>
          <div className='py-24 w-1/2'>
          <span className="span tracking-widest">OUR WORK & CULTURE</span>
          <h2 className="h2 my-6">Come and join a team of highly skilled professionals.</h2>
          <p className="p mb-8">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
        </div>
        <div>
          <div className='flex gap-3 mb-3'>
            <div className='bg-white w-1/3 p-8'>
              <span className='w-10 h-10 bg-[#FFD3AF80] p-2.5 rounded-[100%]'>😷</span>
              <h6 className="h6 my-2">Covid-19 insurance</h6>
              <p className="p">Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
            </div>
            <div className='bg-white w-1/3 p-8'>
              <span className='w-10 h-10 bg-[#FFD3AF80] p-2.5 rounded-[100%]'>😷</span>
              <h6 className="h6 my-2">Covid-19 insurance</h6>
              <p className="p">Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
            </div>
            <div className='bg-white w-1/3 p-8'>
              <span className='w-10 h-10 bg-[#FFD3AF80] p-2.5 rounded-[100%]'>😷</span>
              <h6 className="h6 my-2">Covid-19 insurance</h6>
              <p className="p">Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
            </div>
          </div>
          <div className='flex gap-3 mb-24'>
            <div className='bg-white w-1/3 p-8'>
              <span className='w-10 h-10 bg-[#FFD3AF80] p-2.5 rounded-[100%]'>😷</span>
              <h6 className="h6 my-2">Covid-19 insurance</h6>
              <p className="p">Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
            </div>
            <div className='bg-white w-1/3 p-8'>
              <span className='w-10 h-10 bg-[#FFD3AF80] p-2.5 rounded-[100%]'>😷</span>
              <h6 className="h6 my-2">Covid-19 insurance</h6>
              <p className="p">Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
            </div>
            <div className='bg-white w-1/3 p-8'>
              <span className='w-10 h-10 bg-[#FFD3AF80] p-2.5 rounded-[100%]'>😷</span>
              <h6 className="h6 my-2">Covid-19 insurance</h6>
              <p className="p">Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
            </div>
          </div>
        </div>

        </div>
        
      </div>
        
    </div>
    
  )
}
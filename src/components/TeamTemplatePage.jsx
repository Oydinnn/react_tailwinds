import TeamMember from '../../public/img/TeamMember.png'
import instagramIcon from "../../public/img/instagram.svg"
import twitterIcon from "../../public/img/twitter.svg"
import linkdeinIcon from "../../public/img/linkidein.svg"
import ShapeSquare from '../../public/img/ShapeSquare.svg'
import companyImg1 from '../../public/img/companyImg1.png'
import companyImg2 from '../../public/img/companyImg2.png'


export default function TeamTemplatePage(){
  return(
    <div className='pt-48'>
      {/* TeamMember img */}
      <div className='container'>
        <div className='w-1/4 m-auto  text-center mb-24'>
          <img className='mb-12' src={TeamMember} alt="TeamMember" />
          <h3 className="h3 mb-2">Javena Melo</h3>
          <p className="p mb-3">CEO</p>
          <p className="p mb-6">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
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

    {/* Blog posts from member */}
      <div className='bg-[#ECF8F9]'>
        <div className='container py-24 '>
          <img className='mb-5' src={ShapeSquare} alt="ShapeSquare" />
          <h2 className="h2 mb-12">Blog posts from Javena</h2>

          <div className="flex gap-8">
            <div className="flex w-1/2">
              <img className='w-[350px] h-[250px]' src={companyImg2} alt="companyImg2" />
              <div className=' bg-white p-8'>
                <p className="p">Jan 19, 2021</p>
                <h4 className="h4">Today’s best design trends for digital products</h4>
                <a href="#">Read More →</a>
              </div>
            </div>
            <div className="flex w-1/2">
              <img className='w-[350px] h-[250px]' src={companyImg1} alt="companyImg1" />
              <div className=' bg-white p-8'>
                <p className="p">Jan 19, 2021</p>
                <h4 className="h4">Today’s best design trends for digital products</h4>
                <a href="#">Read More →</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
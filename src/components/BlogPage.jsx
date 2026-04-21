import ShapeSquareBeije from '../../public/img/ShapeSquareBeije.svg'
import ShapeRight from '../../public/img/ShapeRight.svg'
import ShapesTestimonial from '../../public/img/ShapesTestimonial.svg'
import AvatarBlogPage from '../../public/img/avatarBlogPage.svg'
import ImageBlogPage from '../../public/img/ImageBlogPage.svg'
import BlogPostImg from '../../public/img/BlogPostImg.svg'
import BlogPostImg2 from '../../public/img/BlogPostImg2.png'
import BlogPostImg3 from '../../public/img/BlogPostImg3.png'
import BlogPostImg4 from '../../public/img/BlogPostImg4.png'
import blogImg5 from '../../public/img/blogImg5.png'
import blogImg6 from '../../public/img/blogImg6.png'
import blogImg7 from '../../public/img/blogImg7.png'
import blogImg8 from '../../public/img/blogImg8.png'
import blogImg9 from '../../public/img/blogImg9.png'
import blogImg10 from '../../public/img/blogImg10.png'
import { Link } from 'react-router-dom'





export default function BlogPage(){
  return(
    <div>

      <div className='container pt-52'>

        <div className='flex justify-between mb-24'>
          <div className='w-1/2'>
            <img className='mb-6' src={ShapeSquareBeije} alt="ShapeSquareBeije" />
            <span className="span">TRENDING</span>
            <h2 className="h2 my-6">Breaking the code How did we build our Figma plugin </h2>
            <p className="p mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>
            <Link  to='/innerBlog'  href="#">Read More →</Link>
            <div className='my-6 flex items-center gap-1'>
              <img src={AvatarBlogPage} alt="AvatarBlogPage" />
              <p className="p">Andrew Jonson | Posted on 27th January 2021</p>
            </div>
            <div>
              <img src={ImageBlogPage} alt="ImageBlogPage.svg" />
              {/* <img src={ShapesTestimonial} alt="ShapesTestimonial" /> */}
            </div>
          </div>

          <div className='w-[40%] bg-[#FFDFC6] p-18'>
            <img className=' ml-auto' src={ShapeRight} alt="ShapeRight" />
            <h4 className="h4">Great design expectations prejudice in digital products in Next Year</h4>

            <div className='my-6 flex items-center gap-2'>
              <img className='float-right' src={AvatarBlogPage} alt="AvatarBlogPage" />
              <p className="p">Andrew Jonson <br /> Jan 19, 2021</p>
            </div>




            <h4 className="h4">Great design expectations prejudice in digital products in Next Year</h4>

            <div className='my-6 flex items-center gap-2'>
              <img className='float-right' src={AvatarBlogPage} alt="AvatarBlogPage" />
              <p className="p">Andrew Jonson <br />Jan 19, 2021</p>
            </div>



            <h4 className="h4">Great design expectations prejudice in digital products in Next Year</h4>

            <div className='my-6 flex items-center gap-2'>
              <img className='float-right' src={AvatarBlogPage} alt="AvatarBlogPage" />
              <p className="p">Andrew Jonson <br /> Jan 19, 2021</p>
            </div>
          </div>
        </div>



        {/* Read Recent Post */}
        <div className=''>
          <h2 className="h2 mb-16">Read Recent Post</h2>

          <div className='flex gap-8 mb-8'>

            <div className='bg-[#F9F9FF] flex w-1/2'>
              <img src={BlogPostImg3} alt="BlogPostImg" />
              <div className='p-8'>
                <h4 className="h4">Today’s best design trends for digital products</h4>
                <div className='my-6 flex items-center gap-2'>
                  <img className='float-right' src={AvatarBlogPage} alt="AvatarBlogPage" />
                  <p className="p">Andrew Jonson <br /> Jan 19, 2021</p>
                </div>
              </div>
            </div>



            <div className='bg-[#F9F9FF] flex w-1/2'>
              <img src={BlogPostImg2} alt="BlogPostImg" />
              <div className='p-8'>
                <h4 className="h4">Today’s best design trends for digital products</h4>
                <div className='my-6 flex items-center gap-2'>
                  <img className='float-right' src={AvatarBlogPage} alt="AvatarBlogPage" />
                  <p className="p">Andrew Jonson <br /> Jan 19, 2021</p>
                </div>
              </div>
            </div>


          </div>


          <div className='flex gap-8 mb-24'>

            <div className='bg-[#F9F9FF] flex w-1/2'>
              <img src={BlogPostImg} alt="BlogPostImg" />
              <div className='p-8'>
                <h4 className="h4">Today’s best design trends for digital products</h4>
                <div className='my-6 flex items-center gap-2'>
                  <img className='float-right' src={AvatarBlogPage} alt="AvatarBlogPage" />
                  <p className="p">Andrew Jonson <br /> Jan 19, 2021</p>
                </div>
              </div>
            </div>



            <div className='bg-[#F9F9FF] flex w-1/2'>
              <img src={BlogPostImg4} alt="BlogPostImg" />
              <div className='p-8'>
                <h4 className="h4">Today’s best design trends for digital products</h4>
                <div className='my-6 flex items-center gap-2'>
                  <img className='float-right' src={AvatarBlogPage} alt="AvatarBlogPage" />
                  <p className="p">Andrew Jonson <br /> Jan 19, 2021</p>
                </div>
              </div>
            </div>


          </div>
          
        </div>




      </div>



      {/* All posts */}
      <div className='bg-[#F9F9F9]'>
        <div className='container'>

          <h2 className="h2 mb-16">All posts</h2>

          <div className='flex gap-8 mb-8'>
            <div className='w-1/3'>
              <img src={blogImg5} alt="blogImg" />
              <div className='p-3 m-auto w-[90%]'>
                <h4 className="h4">We aim to attain the greatest satisfaction for our clients </h4>
                <p className="p">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                <div className='my-6 flex items-center gap-2'>
                    <img src={AvatarBlogPage} alt="AvatarBlogPage" />
                    <p className="p">Andrew Jonson <br /> Jan 19, 2021</p>
                </div>
              </div>
            </div>


            <div className='w-1/3'>
              <img src={blogImg6} alt="blogImg" />
              <div className='p-3 m-auto w-[90%]'>
                <h4 className="h4">We aim to attain the greatest satisfaction for our clients </h4>
                <p className="p">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                <div className='my-6 flex items-center gap-2'>
                    <img src={AvatarBlogPage} alt="AvatarBlogPage" />
                    <p className="p">Andrew Jonson <br /> Jan 19, 2021</p>
                </div>
              </div>
            </div>


            <div className='w-1/3'>
              <img src={blogImg7} alt="blogImg" />
              <div className='p-3 m-auto w-[90%]'>
                <h4 className="h4">We aim to attain the greatest satisfaction for our clients </h4>
                <p className="p">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                <div className='my-6 flex items-center gap-2'>
                    <img src={AvatarBlogPage} alt="AvatarBlogPage" />
                    <p className="p">Andrew Jonson <br /> Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-8'>
            <div className='w-1/3'>
              <img src={blogImg5} alt="blogImg" />
              <div className='p-3 m-auto w-[90%]'>
                <h4 className="h4">We aim to attain the greatest satisfaction for our clients </h4>
                <p className="p">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                <div className='my-6 flex items-center gap-2'>
                    <img src={AvatarBlogPage} alt="AvatarBlogPage" />
                    <p className="p">Andrew Jonson <br /> Jan 19, 2021</p>
                </div>
              </div>
            </div>


            <div className='w-1/3'>
              <img src={blogImg6} alt="blogImg" />
              <div className='p-3 m-auto w-[90%]'>
                <h4 className="h4">We aim to attain the greatest satisfaction for our clients </h4>
                <p className="p">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                <div className='my-6 flex items-center gap-2'>
                    <img src={AvatarBlogPage} alt="AvatarBlogPage" />
                    <p className="p">Andrew Jonson <br /> Jan 19, 2021</p>
                </div>
              </div>
            </div>


            <div className='w-1/3'>
              <img src={blogImg7} alt="blogImg" />
              <div className='p-3 m-auto w-[90%]'>
                <h4 className="h4">We aim to attain the greatest satisfaction for our clients </h4>
                <p className="p">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                <div className='my-6 flex items-center gap-2'>
                    <img src={AvatarBlogPage} alt="AvatarBlogPage" />
                    <p className="p">Andrew Jonson <br /> Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
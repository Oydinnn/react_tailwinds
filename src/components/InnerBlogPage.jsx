import ShapeSquareBeije from '../../public/img/ShapeSquareBeije.svg'
import ShapeRight from '../../public/img/ShapeRight.svg'
import ShapesTestimonial from '../../public/img/ShapesTestimonial.svg'
import AvatarBlogPage from '../../public/img/avatarBlogPage.svg'
import ImgInnerBlog from '../../public/img/ImgInnerBlog.png'

import { Link } from 'react-router-dom'

export default function InnerBlogPage(){
  return(
    <div>

      <div className='container pt-52'>

        <div className='mb-24'>
          {/* div for shapes */}
          <div className='flex justify-between'>
            <img className='mb-6' src={ShapeSquareBeije} alt="ShapeSquareBeije" />
            <img className=' ml-auto' src={ShapeRight} alt="ShapeRight" />
          </div>

          {/* div for titles */}
          <div className='w-[55%]'>
            <h2 className="h2 my-6">Breaking the code How did we build our Figma plugin </h2>
            <p className="p mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>
            <div className='my-6 flex items-center gap-2'>
              <img src={AvatarBlogPage} alt="AvatarBlogPage" />
              <p className="p">Andrew Jonson | Posted on 27th January 2021</p>
            </div>
          </div>
          <img src={ImgInnerBlog} alt="ImgInnerBlog" />
          {/* <img src={ShapesTestimonial} alt="ShapesTestimonial" /> */}
        </div>


        {/* text innerBlog */}
        <div className='w-[60%] m-auto'>
          <h3 className="h3 mb-6">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h3>
          <p className="p mb-6">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.
          <br /><br />
          Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged. 
          <br /> <br />
          Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged. 
          <br /><br />
          Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.
          </p>
          <h4 className="h4 mb-6">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h4>
          <p className="p">Step 1: Download the plugin from Figma community, search Ghost UXWriter
            Step 2: Open the plugin on your artboard
            Step 3: Search for your copy or look through the different categories of the copies
            Step 4: Select the type of error you are looking for. You will get three different copies for each error
            Step 5: Tap on the cards to insert text in your frames
            And you are all geared up to make your UX copies more fun and exciting 😎
          </p>
          <h4 className="h4 my-6">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h4>
          <p className="p mb-6">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>


        </div>

          
      </div>

    </div>
  )
}
import ShapeSquareBeije from "../../public/img/ShapeSquareBeije.svg";
import ShapesTestimonial from "../../public/img/ShapesTestimonial.svg";
import Social from "../../public/img/Social.png";
import { useState } from "react";
import AvatarBlogPage from "../../public/img/avatarBlogPage.svg";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form yuborish logikasi
  };

  return (
    <div>
      <div className="container pt-52">
        <div className="flex justify-between mb-24">
          <div className="w-1/2">
            <img
              className="mb-6"
              src={ShapeSquareBeije}
              alt="ShapeSquareBeije"
            />
            <span className="span">CONTACT US</span>
            <h2 className="h2 my-6">
              Have a Question ? Let’s Get in Touch with us 👋
            </h2>
            <p className="p mb-6">
              Fill up the Form and ou team will get back to within 24 hrs
            </p>

            {/* forma */}

            <div className="max-w-2xl mx-auto p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 opacity-60 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Paresh Srichandan"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-2/3 pr-4 py-3 border-b border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>

                {/* E-mail */}
                <div>
                  <label className="block text-gray-700 opacity-60 font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Paresh@pixeto.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-2/3 pr-4 py-3 border-b border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 opacity-60 ">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="For web design work Enquire"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-2/3  pr-4 py-3 border-b border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 opacity-60 ">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Type your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-2/3  pr-4 py-3 border-b border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="relative flex justify-between items-center  w-[219px] h-[64px] bg-[#444CFC] text-white py-5 px-8"
                >
                  <img
                    className="absolute top-0 left-0"
                    src="./img/Shapes.svg"
                    alt="shape"
                  />
                  Send Message
                  <img src="./img/Icon.svg" alt="button" />
                </button>
              </form>
            </div>
          </div>

          <div className=" w-[40%]">
            {/* <img
              className="w-24 h-[300px]"
              src={ShapesTestimonial}
              alt="ShapesTestimonial"
            /> */}
            <div className=" bg-[#666DFF] text-white p-18 flex flex-col gap-4">
              <span className="span">Location</span>
              <hr className="opacity-15" />
              <h4 className="text-[24px] mb-2 text-white">
                DLF Cybercity, Bhubaneswar,{" "}
              </h4>
              <span className="span">Working Hour</span>
              <hr className="opacity-15" />
              <h4 className="text-[24px]  mb-2 text-white">
                Working Hour Monday To Friday 9:00 AM to 8:00 PM
              </h4>
              <span className="span">Our Support Team is available 24Hrs</span>
              <span className="span">Contact Us</span>
              <hr className="opacity-15" />
              <h4 className="text-[24px]  mb-2 text-white">
                Working Hour 020 7993 2905
              </h4>
              <span className="span">Hello@ether.com</span>
              <img className="w-[150px] h-[20px]" src={Social} alt="Social" />
            </div>
          </div>
        </div>

        {/* map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11988.183760521504!2d69.22725409269337!3d41.30786420038479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba862628adf%3A0x35cbda4b6948a351!2sKamolon%20Osh!5e0!3m2!1sru!2sus!4v1776766607787!5m2!1sru!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kamolon Osh map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

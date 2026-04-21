import { useState } from "react";
import { NavLink } from "react-router-dom";
import ShapeRight from "../../public/img/ShapeRight.svg";
import Shapes from "../../public/img/Shapes.svg";
import CareerInnerList from "../utills/data";

export default function InnerCareerPage() {
  const [activeData, setActiveData] = useState(CareerInnerList.details);

  const showInfo = (type) => {
    if (type === "details") {
      setActiveData(CareerInnerList.details);
    } else if (type === "requirements") {
      setActiveData(CareerInnerList.requirements);
    } else if (type === "responsibilities") {
      setActiveData(CareerInnerList.responsibilities);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    reason: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container pt-48">
      <div className="flex justify-center gap-16 px-28 mb-24">
        <div className="w-1/2">
          <span className="span">CAREER AT ETHER</span>
          <h2 className="h2 mt-6 mb-4">Full Stack Developer</h2>
          <p className="p mb-10">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages.
          </p>

          <a
            className="relative flex justify-between items-center  w-[219px] h-[64px] bg-[#444CFC] text-white opacity-85 py-5 px-8"
            href="#"
          >
            <img
              className="absolute top-0 left-0"
              src={Shapes}
              alt=" Shapes button"
            />
            Request Quote →
          </a>
        </div>

        <div className="relative w-1/2 bg-[#FFE0C7] p-20">
          <img
            className="absolute top-0 right-0"
            src={ShapeRight}
            alt="ShapeRight"
          />
          <h4 className="h4">Job Description</h4>
          <p className="p">Remote, India , 4 to 5 Years Of Experience</p>
          <p className="p my-4">Department: Product Engineering</p>
          <p className="p">Full Time 5 Position Available.</p>
        </div>
      </div>

      {/* details */}
      <div className="">
        <div className=" pb-16 bg-[#ECF8F9] rounded-lg shadow-sm">
          <ul className="flex justify-center gap-24 pt-11 relative">
            <li>
              <NavLink
                onClick={() => showInfo("details")}
                to="/innerCareer/details"
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#454DFD] font-bold pb-11 border-b-2 border-[#454DFD] -mb-[2px] relative z-10"
                    : "block text-gray-600 hover:text-[#454DFD] font-bold pb-11 hover:border-b-2 hover:border-[#454DFD] transition-all duration-300 -mb-[2px] relative z-10"
                }
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => showInfo("requirements")}
                to="/innerCareer/requirements"
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#454DFD] font-bold pb-11 border-b-2 border-[#454DFD] -mb-[2px] relative z-10"
                    : "block text-gray-600 hover:text-[#454DFD] font-bold pb-11 hover:border-b-2 hover:border-[#454DFD] transition-all duration-300 -mb-[2px] relative z-10"
                }
              >
                Requirements
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => showInfo("responsibilities")}
                to="/innerCareer/responsibilities"
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#454DFD] font-bold pb-11 border-b-2 border-[#454DFD] -mb-[2px] relative z-10"
                    : "block text-gray-600 hover:text-[#454DFD] font-bold pb-11 hover:border-b-2 hover:border-[#454DFD] transition-all duration-300 -mb-[2px] relative z-10"
                }
              >
                Responsibilities
              </NavLink>
            </li>
          </ul>

          <hr className="border-0 h-[1px] bg-[#E0F1F2] mt-0 relative -top-[2px]" />

          {/* Kontent */}
          <div className="w-2/3 m-auto p-6">
            <ul className="space-y-4">
              {activeData.map(
                (item, index) =>
                  item && (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="text-blue-500 font-bold text-lg mt-1">
                        •
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ),
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Apply Now */}

      <div className="mx-auto pt-16 pb-8">
        <h2 className="text-3xl font-bold mb-8">Apply Now</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Ism va Familya */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-10 py-6 border-none bg-[#F9F9FF] rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-10 py-6 border-none bg-[#F9F9FF] rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={handleChange}
                className="w-full  px-10 py-6 border-none bg-[#F9F9FF] rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>

            {/* Mobile No */}
            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-10 py-6 border-none bg-[#F9F9FF] rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>
          </div>

          {/* Textarea */}
          <div>
            <textarea
              name="reason"
              placeholder="Why do you think you are good fit for Ether?"
              value={formData.reason}
              onChange={handleChange}
              rows={4}
              className="w-full h-56 px-4 py-3 border-none bg-[#F9F9FF]  rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
              required
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="w-5 h-5 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              required
            />
            <label className="text-gray-500 text-sm leading-relaxed">
              I agree to accept the privacy policy. We will add your contact
              details provided in this form to our system for contacting you
              regarding your request.
            </label>
          </div>

          <a
            className="relative text-white opacity-85 flex justify-between items-center  w-[219px] h-[64px] bg-[#444CFC] py-5 px-8"
            href="#"
          >
            <img
              className="absolute top-0 left-0"
              src={Shapes}
              alt=" Shapes button"
            />
            Request Quote →
          </a>
        </form>
      </div>
    </div>
  );
}

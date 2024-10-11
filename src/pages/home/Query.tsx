import Link from "next/link";

import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

const Query = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-4 md:p-8">
            <h2 className="text-black font-bold text-3xl md:text-5xl">
              Get In Touch
            </h2>
            <h1 className="text-5xl md:text-7xl text-primary font-bold py-4">
              Our Experts
            </h1>
            <p className="text-[#161616]  md:text-base font-semibold">
              Want to find out how Neem Infosys can help your organization? Wed
              love to hear from you.
            </p>
            <div className="mt-5">
              <h2 className="text-black font-bold text-2xl md:text-4xl">
                Contact Info
              </h2>
              <div>
                <ul>
                  <li className="flex items-center gap-3 mt-4">
                    <FaLocationDot className="text-primary text-xl" />
                    <span className="text-base font-semibold text-[#161616]">
                      Itahari-6, Paruhang Chowk
                    </span>
                  </li>
                  <li className="flex items-center gap-3 mt-4">
                    <FaEnvelope className="text-primary text-xl" />
                    <Link
                      href="mailto:bluefoxpvtltd@gmail.com"
                      className="text-base font-semibold text-[#161616]"
                    >
                      bluefoxpvtltd@gmail.com
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 mt-4">
                    <FaPhone className="text-primary text-xl" />
                    <Link
                      href="tel:9817303073"
                      className="text-base font-semibold text-[#161616]"
                    >
                      +977-9817303073
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 rounded-[12px] p-4 md:p-8 ml-0 md:ml-20" style={{boxShadow: "0px 16px 48px 0px rgba(0, 0, 0, 0.176)"}}>
            <h2 className="text-black font-bold text-2xl md:text-4xl">
              Lets Get to know you
            </h2>
            <div className="mt-4 mb:mt-6">
              <form action="#">
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border-2 border-[#CCC] rounded-[50px] w-full h-[50px] py-3 px-5 text-[#333] focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border-2 border-[#CCC] rounded-[50px] w-full h-[50px] py-3 px-5 text-[#333] focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border-2 border-[#CCC] rounded-[50px] w-full h-[50px] py-3 px-5 text-[#333] focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="shadow appearance-none border-2 border-[#CCC] rounded-[16px] w-full py-3 px-5 text-[#333] focus:outline-none focus:shadow-outline"
                    rows={5}
                    placeholder="Tell Us About Your Project"
                  ></textarea>
                </div>
                <div className="text-center">
                  <div className="py-3 px-8 font-semibold bg-black text-center inline-block rounded-[8px] group cursor-pointer">
                    <Link
                      href="#"
                      className="text-center uppercase text-white  group-hover:tracking-wider duration-500 transition-all ease-in-out"
                    >
                      Submit
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Query;

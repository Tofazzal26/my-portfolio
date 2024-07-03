import { Parallax } from "react-parallax";
import "./ParallaxFooter.css";
import imgFooter from "../../assets/footer.webp";
import { HiOutlineHomeModern } from "react-icons/hi2";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <div>
        <Parallax bgImage={imgFooter} strength={500}>
          <div
            className="bg-black opacity-70"
            style={{
              height: 600,
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
            }}
          >
            <div className="text-center pt-16 text-white space-y-8">
              <h2 className="font-bold capitalize leading-3 text-2xl tracking-widest">
                Say Hello!
              </h2>
              <div className="grid grid-cols-3 pt-8">
                <div>
                  <HiOutlineHomeModern
                    size={35}
                    className="text-center mx-auto"
                  />
                  <p className="font-light tracking-widest mt-2">
                    Gazipur,Dhaka,Bangladesh
                  </p>
                </div>
                <div>
                  <FaPhoneAlt size={35} className="text-center mx-auto" />
                  <p className="font-light tracking-widest mt-2">
                    +8801826384854
                  </p>
                </div>
                <div>
                  <MdEmail size={35} className="text-center mx-auto" />
                  <p className="font-light tracking-widest mt-2">
                    1999workmail@gmail.com
                  </p>
                </div>
              </div>
              {/* ==================From & mail section submit====================== */}

              <form noValidate="" className="space-y-6 px-24 pt-12">
                <div className="flex items-center justify-between gap-10">
                  <div className="w-full">
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      className="w-full p-3 bg-black text-white border-[#333] border rounded"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      id="name"
                      type="text"
                      placeholder="Email"
                      className="w-full p-3 bg-black text-white border-[#333] border rounded"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    id="message"
                    rows="3"
                    placeholder="Your Message"
                    className="w-full p-3  bg-black text-white border-[#333] border rounded"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className=" p-4 text-xs font-light tracking-widest uppercase rounded-full  bg-black text-white border-gray-500 border"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </Parallax>
        <footer className=" bg-[#0C0B0B] w-full h-52 text-center text-[#fff]">
          <div className="flex items-center justify-center gap-4 mt-14">
            <FaFacebook size={21} className="text-[#0866FF]" />
            <FaTwitter size={21} className="text-[#5a99ff]" />
            <FaInstagram size={21} className="text-[#EC6453]" />
            <FaReact size={21} className="text-[#ce4bce]" />
          </div>
          <p className="tracking-widest text-sm mt-5">
            &copy; Copyright 2024 | All right reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

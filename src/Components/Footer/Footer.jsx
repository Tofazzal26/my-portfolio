import { Parallax } from "react-parallax";
import "./ParallaxFooter.css";
import imgFooter from "../../assets/footer.webp";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail, MdOutlineMail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <div>
        <Parallax bgImage={imgFooter} strength={500}>
          <div
            className="bg-black opacity-70"
            style={{
              height: 500,
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
              {/* ==================mail section submit====================== */}
              <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                <form noValidate="" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder=""
                      className="w-full p-3 rounded dark:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 rounded dark:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="3"
                      className="w-full p-3 rounded dark:bg-gray-100"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Parallax>
        <footer className="footer-content bg-black w-full h-60">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

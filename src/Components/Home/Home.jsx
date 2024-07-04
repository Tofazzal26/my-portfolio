import { VscMenu } from "react-icons/vsc";
import tow from "../../../public/banner/me3.jpg";

const Home = () => {
  return (
    <div className="font-open" id="home">
      <div
        className="rounded-t-md"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${tow})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        {/* ==================NavBar section=================== */}
        <div className="fixed w-full z-10">
          <div className=" dropdown float-right dropdown-left pt-12 mr-16 ">
            <div tabIndex={0} role="button" className="mr-1 ">
              <VscMenu size={33} className="text-gray-400" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content flex flex-row menu bg-black text-white  z-[1] w-80 h-10 text-center mx-auto  mr-3 p-1 shadow mt-[50px] "
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        {/* ==================NavBar section=================== */}
        <h1 className="text-7xl text-center text-[#fafafa] capitalize tracking-widest font-bold pt-60">
          Tofazzal Hossain
        </h1>
        <p className="text-center text-[#fafafa] pt-8 font-light tracking-widest text-xl">
          <span className="font-bold">W</span>eb-
          <span className="font-bold">D</span>eveloper
        </p>
        <div className="text-center mt-44">
          <button
            type="submit"
            className="btn btn-outline p-4 text-xs font-light tracking-widest uppercase rounded-full   text-white border-gray-800 border text-center mx-auto"
          >
            <a href="MYRESUME.pdf" download>
              Download resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

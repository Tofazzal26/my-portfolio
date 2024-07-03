import { VscMenu } from "react-icons/vsc";
import tow from "../../assets/tow.png";

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
        <div className="dropdown float-right dropdown-left pt-12 mr-16">
          <div tabIndex={0} role="button" className=" m-1">
            <VscMenu size={33} className="text-gray-400" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content flex flex-row menu bg-black text-white  z-[1] w-52 p-1 shadow mt-12"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skill">Skill</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        {/* ==================NavBar section=================== */}
        <h1 className="text-7xl text-center text-[#fafafa] capitalize tracking-widest font-bold pt-60">
          Mr. Nayem Khan
        </h1>
        <p className="text-center text-[#fafafa] pt-8 font-light tracking-widest text-xl">
          <span className="font-bold">W</span>eb-
          <span className="font-bold">D</span>eveloper
        </p>
      </div>
    </div>
  );
};

export default Home;

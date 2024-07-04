import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import About from "../About/About";
import MySkills from "../MySkills/MySkills";
import RecenWork from "../RecenWork/RecenWork";
import Blogs from "../Blogs/Blogs";
import Others from "./../Others/Others";
import Help from "../Help/Help";
import Meet from "../Meet/Meet";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <About></About>
      <MySkills></MySkills>
      <RecenWork></RecenWork>
      <Blogs></Blogs>
      <Others />
      <Help />
      <Meet />
      <Footer></Footer>
    </div>
  );
};

export default Root;

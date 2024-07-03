import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import About from "../About/About";
import MySkills from "../MySkills/MySkills";
import RecenWork from "../RecenWork/RecenWork";
import Blogs from "../Blogs/Blogs";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <About></About>
      <MySkills></MySkills>
      <RecenWork></RecenWork>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default Root;

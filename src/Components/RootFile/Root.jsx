import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import About from "../About/About";
import MySkills from "../MySkills/MySkills";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <About></About>
      <MySkills></MySkills>
      <Footer></Footer>
    </div>
  );
};

export default Root;

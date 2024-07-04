import ten from "../../assets/10.png";
import eleven from "../../assets/11.png";
import twelve from "../../assets/12.png";
import thirteen from "../../assets/13.png";
import fourteen from "../../assets/14.png";
import fifteen from "../../assets/15.png";
import CountUp from "react-countup";
const RecenWork = () => {
  return (
    <div className="font-one text-center mt-12">
      <h1 className="font-bold capitalize text-2xl leading-5 tracking-widest mb-10">
        My Recent Works.
      </h1>
      <div className="grid grid-cols-3 gap-16 px-10 mx-auto ml-10">
        <div className="card bg-base-100  shadow-xl  border-2 rounded-none  styleImg">
          <img className="" src={ten} alt="Shoes" />
        </div>
        <div className="card bg-base-100  shadow-xl  border-2 rounded-none  styleImg">
          <img className="" src={eleven} alt="Shoes" />
        </div>
        <div className="card bg-base-100  shadow-xl  border-2 rounded-none  styleImg">
          <img className="" src={twelve} alt="Shoes" />
        </div>
        <div className="card bg-base-100  shadow-xl  border-2 rounded-none  styleImg">
          <img className="" src={thirteen} alt="Shoes" />
        </div>
        <div className="card bg-base-100  shadow-xl  border-2 rounded-none  styleImg">
          <img className="" src={fourteen} alt="Shoes" />
        </div>
        <div className="card bg-base-100  shadow-xl  border-2 rounded-none  styleImg">
          <img className="" src={fifteen} alt="Shoes" />
        </div>
      </div>
      {/*============ Other section Rangking currnt position=================== */}
      <div className="mt-20">
        <div className="font-one bg-[#1B1B1B] text-[#fff] w-full h-[300px] text-center">
          <div className="grid grid-cols-4 gap-8 pt-28">
            <div className="flex flex-col items-center justify-center">
              <CountUp className="text-7xl font-medium" end={298} />
              <p className="text-[14px] capitalize text-[#fafafa] mt-3 tracking-widest font-normal">
                Total Contributions
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <CountUp className="text-7xl font-medium" end={51} />
              <p className="text-[14px] capitalize text-[#fafafa] mt-3 tracking-widest font-normal">
                Complete Project
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <CountUp className="text-7xl font-medium" end={28} />
              <p className="text-[14px] capitalize text-[#fafafa] mt-3 tracking-widest font-normal">
                Longest Streak
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <CountUp className="text-7xl font-medium" end={12} />
              <p className="text-[14px] capitalize text-[#fafafa] mt-3 tracking-widest font-normal">
                Current Streak
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecenWork;

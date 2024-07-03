import ten from "../../assets/10.png";
import eleven from "../../assets/11.png";
import twelve from "../../assets/12.png";
import thirteen from "../../assets/13.png";

const RecenWork = () => {
  return (
    <div className="font-one text-center mt-12">
      <h1 className="font-bold capitalize text-2xl leading-5 tracking-widest mb-10">
        My Recent Works.
      </h1>
      <div className="grid grid-cols-3 gap-5 px-10 mx-auto">
        <div className="card bg-base-100  shadow-xl">
          <img className="" src={ten} alt="Shoes" />
        </div>
        <div className="card bg-base-100  shadow-xl">
          <img src={eleven} alt="Shoes" />
        </div>
        <div className="card bg-base-100  shadow-xl">
          <img src={twelve} alt="Shoes" />
        </div>
        <div className="card bg-base-100  shadow-xl">
          <img src={thirteen} alt="Shoes" />
        </div>
        <div className="card bg-base-100  shadow-xl">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card bg-base-100  shadow-xl">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </div>
      </div>
    </div>
  );
};

export default RecenWork;

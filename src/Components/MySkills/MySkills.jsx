const MySkills = () => {
  return (
    <div className="font-one bg-[#1B1B1B] text-[#fff] w-full h-[400px] text-center">
      <h1 className="tracking-widest text-2xl font-bold capitalize pt-12">
        My Key Skills.
      </h1>
      <div className="grid grid-cols-3 gap-10 p-8 mx-auto ml-24">
        <div className="flex flex-col justify-evenly items-start">
          <h1 className="mb-3 tracking-widest capitalize">Html5</h1>
          <progress className="progress w-56 bg-orange-500"></progress>
        </div>
        <div className="flex flex-col justify-evenly items-start">
          <h1 className="mb-3 tracking-widest capitalize">Css3</h1>
          <progress className="progress w-56 bg-[#fff]"></progress>
        </div>
        <div className="flex flex-col justify-evenly items-start">
          <h1 className="mb-3 tracking-widest capitalize">Javascript</h1>
          <progress className="progress w-56 bg-orange-500"></progress>
        </div>
        <div className="flex flex-col justify-evenly items-start">
          <h1 className="mb-3 tracking-widest capitalize">Responsive Design</h1>
          <progress className="progress w-56 bg-[#fff]"></progress>
        </div>
        <div className="flex flex-col justify-evenly items-start">
          <h1 className="mb-3 tracking-widest capitalize">React.js</h1>
          <progress className="progress w-56 bg-orange-500"></progress>
        </div>
        <div className="flex flex-col justify-evenly items-start">
          <h1 className="mb-3 tracking-widest capitalize">TailwindCss</h1>
          <progress className="progress w-56 bg-[#fff]"></progress>
        </div>
      </div>
    </div>
  );
};

export default MySkills;

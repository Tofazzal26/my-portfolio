const Blogs = () => {
  return (
    <div className="font-one mt-16 text-center">
      <h1 className="font-bold capitalize text-2xl leading-5 tracking-widest mb-20">
        Recents Blogs
      </h1>
      <div>
        <h1 className="text-[14px] font-semibold text-[#333] tracking-widest">
          Destination Dream Travel website
        </h1>
        <p className="mt-3 font-light tracking-wider text-gray-500">
          May 04 2024
        </p>
        <button className="mt-3 font-normal tracking-wide text-black border-b border-black">
          Read More
        </button>
      </div>
      <div className="mt-12">
        <h1 className="text-[14px] font-semibold text-[#333] tracking-widest">
          Hotel Booking User-Friendly Interface website
        </h1>
        <p className="mt-3 font-light tracking-wider text-gray-500">
          june 17 2024
        </p>
        <button className="mt-3 font-normal tracking-wide text-black border-b border-black">
          Read More
        </button>
      </div>
      <div className="mt-12 mb-20">
        <h1 className="text-[14px] font-semibold text-[#333] tracking-widest">
          Talk Town Admin panel Dashboard website
        </h1>
        <p className="mt-3 font-light tracking-wider text-gray-500">
          August 28 2024
        </p>
        {/* ============================= */}
        <button
          className="mt-3 font-normal tracking-wide text-black border-b border-black"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Read More
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-rose-400">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <div>
              <h1 className="font-bold">
                live link url:{" "}
                <span className="font-bold text-blue-500">
                  https://b12-talktown.web.app
                </span>
              </h1>
              <h5>
                Admin UserName :
                <span className=" text-blue-500">shakibalhasan@gmail.com</span>
              </h5>
              <h6>
                Admin Password : <span>123456</span>
              </h6>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Blogs;

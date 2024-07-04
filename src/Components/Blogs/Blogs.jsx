const Blogs = () => {
  return (
    <div id="blog" className="font-one mt-16 text-center">
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
        {/* =============01================ */}
        <button
          className="mt-3 font-normal tracking-wide text-black border-b border-black"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Read More
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-rose-400">
                ✕
              </button>
            </form>
            <div>
              <h1 className="font-bold mb-2">
                live link url:
                <a href="https://transcreaw.web.app" target="blank">
                  <span className="font-semibold text-blue-500 ml-2">
                    https://transcreaw.web.app
                  </span>
                </a>
              </h1>
              <a
                href="https://github.com/programming-hero-web-course1/b9a12-client-side-Tofazzal26?tab=readme-ov-file"
                target="blank"
              >
                <span className="font-medium text-blue-500 ml-2 ">
                  GitHub Client-site link
                </span>
              </a>
              <span className="ml-3 font-bold">||</span>
              <a
                href="https://github.com/programming-hero-web-course1/b9a12-server-side-Tofazzal26"
                target="blank"
              >
                <span className="font-medium text-blue-500 ml-2 ">
                  GitHub Server-site link
                </span>
              </a>
              <div className="divider"></div>
              <p className="text-left text-sm text-gray-500 opacity-90 tracking-wider">
                This website is Travel and Tourist website Travel in Asia...{" "}
                <br />
                You can travel any country for asia and you can Book any hotel
                your sewtable place! View all details show the display You can
                see avareg cost or time duration it you choiche subcategory
                country your choiche.. And please visit our website and don't
                forget review..... This project is used by the following npm
                package name: React Hook form, Swiper slider, React icons,
                Tailwind CSS, Daisy UI, Mamba UI - Components, React-Hot-Toast,
                React Router Dom, Sweet Alert2,
              </p>
            </div>
          </div>
        </dialog>
      </div>
      <div className="mt-12">
        <h1 className="text-[14px] font-semibold text-[#333] tracking-widest">
          Hotel Booking User-Friendly Interface website
        </h1>
        <p className="mt-3 font-light tracking-wider text-gray-500">
          june 17 2024
        </p>
        {/* =============02================ */}
        <button
          className="mt-3 font-normal tracking-wide text-black border-b border-black"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Read More
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-rose-400">
                ✕
              </button>
            </form>
            <div>
              <h1 className="font-bold mb-2">
                live link url:
                <a
                  href="https://661e20134c9523a5b4ca1a11--tangerine-madeleine-b7a200.netlify.app"
                  target="blank"
                >
                  <span className="font-semibold text-blue-500 ml-2">
                    https://661e20134c9523a5b4ca1a11--tangerine-madeleine-b7a200.netlify.app
                  </span>
                </a>
              </h1>

              <span className="ml-3 font-bold">||</span>
              <a
                href="https://github.com/programming-hero-web-course-4/b9a9-real-estate-Tofazzal26?tab=readme-ov-file"
                target="blank"
              ></a>
              <div className="divider"></div>
              <p className="text-left text-sm text-gray-500 opacity-90 tracking-wider">
                User-Friendly Interface The hotel booking React project features
                an intuitive and responsive interface that allows users to
                effortlessly browse, search.! We are thrilled to announce an
                exclusive offer just for you! Book your stay with us and enjoy a
                25% discount on all room categories!Experience unparalleled
                comfort and luxury with our top-notch amenities, including
                complimentary breakfast and free Wi-Fi.You can book any hotel in
                your choiche All Rooms are Demos show in ui you can see all
                rooms and booking our hotel rooms.. You can booking hotel rooms
                and if you cancel booking please don't forget Reviews
              </p>
            </div>
          </div>
        </dialog>
      </div>
      <div className="mt-12 mb-20">
        <h1 className="text-[14px] font-semibold text-[#333] tracking-widest">
          Talk Town Admin panel Dashboard website
        </h1>
        <p className="mt-3 font-light tracking-wider text-gray-500">
          August 28 2024
        </p>
        {/* =============03================ */}
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
            <div>
              <a href="https://organic-foods-59169.web.app" target="blank">
                <span className="font-medium text-blue-500 ml-2 ">
                  GitHub Client-site link
                </span>
              </a>
              <div className="divider"></div>
              <p className="text-left text-sm text-gray-500 opacity-90 tracking-wider">
                Talk Time is an interactive, user-friendly forum application
                built with React. The goal of this project is to create a
                platform where users can engage in meaningful discussions, share
                their ideas, and connect with others in various topics of
                interest. The application is designed to be intuitive,
                responsive, and scalable, offering a seamless user experience
                across different devices.!
              </p>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Blogs;

import signature from "../../assets/img-removebg-preview.png";
const About = () => {
  return (
    <div className="text-center mt-28 font-one" id="about">
      <h1 className="font-semibold capitalize tracking-widest text-2xl mb-5">
        Behind The Story!
      </h1>
      <p className="font-light  text-center mx-auto tracking-wider leading-7">
        Hello, i am <span className="font-bold">Nayem Khan</span> Lorem Ipsum is
        simply dummy <span className="font-bold">web developer</span> text of
        the printing and <br />
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, <br /> when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has <br />
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining standard <br /> dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>
      <img
        className="w-[380px] mx-auto font-bold"
        src={signature}
        alt="signature"
      />
    </div>
  );
};

export default About;

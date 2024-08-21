import { Typewriter } from "react-simple-typewriter";
import BG from "../assets/bg.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <section className="flex flex-col lg:flex-row w-full h-[90vh] bg-opacity-30">
        <div className="flex flex-col w-full lg:w-[60%] items-center lg:items-start px-4 lg:px-8 py-8">
          <h3 className=" mt-9 text-[24px] lg:text-[50px] text-black font-[500] text-center lg:text-left font-serif mb-4 lg:mb-8">
            Stay Ahead with the Latest News
          </h3>
          <h2 className="text-[#00317F] text-[40px] lg:text-[80px] text-center lg:text-left mb-4 lg:mb-8">
            <span>
              <Typewriter
                words={[" Government", " Business", " Education", " Sports"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                cursorColor=""
              />
              News
            </span>
          </h2>
          <p className="text-black text-center lg:text-left text-[14px] lg:text-[16px] mb-6 lg:mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>
          <div className="w-full lg:w-[20%] bg-[#00317F] h-10 flex items-center justify-center rounded mt-6">
            <Link to="/register">
              <button className="text-white hover:text-gray-200 hover:font-bold">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[40%] h-full flex items-center justify-center lg:justify-end">
          <img
            src={BG}
            alt="bg"
            className="object-cover w-full lg:w-auto lg:h-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

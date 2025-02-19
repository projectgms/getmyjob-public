import React, { useEffect, useRef, useState } from "react";
import JobSeekerNavbar from "../../../components/navbar/JobSeekerNavbar";
import { FiSearch } from "react-icons/fi";
import line9 from "./../../../assets/images/Line 9.svg";
import line6 from "./../../../assets/images/Line 6.svg";
import line3 from "./../../../assets/images/Line 3.svg";
import { ImSpotify } from "react-icons/im";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import avatar1 from "./../../../assets/images/avtar1.png";
import avtar2 from "./../../../assets/images/avtar2.jpg";
import adobeLogo from "./../../../assets/images/Adobe_Creative_Cloud_rainbow_icon.png";
import { motion } from "framer-motion";
import InfoBoxThree from "../../../components/JobSeekerComponents/InfoBoxThree";
import InfoTitle from "../../../components/JobSeekerComponents/InfoTitle";
import JobSearchInput from "../../../components/JobSeekerComponents/JobSearchInput";
import SelectionChips from "../../../components/JobSeekerComponents/SelectionChips";
import JobInfoCard from "../../../components/JobSeekerComponents/JobInfoCard";
import ShowMoreBtnDark from "../../../components/buttons/ShowMoreBtnDark";
import CompanyCard from "../../../components/JobSeekerComponents/CompanyCard";
import InterViewProcess from "../../../components/JobSeekerComponents/InterViewProcess";
import UserReviewCard from "../../../components/JobSeekerComponents/UserReviewCard";
import ArticleComponent from "../../../components/JobSeekerComponents/ArticleComponent";
import SubscribeMail from "../../../components/JobSeekerComponents/SubscribeMail";
import JobSeekerFooter from "../../../components/JobSeekerComponents/JobSeekerFooter";

const typingVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const headingText = "Modernizing the Job Search Experience".split("");
const subText =
  "Search and find your dream job now easier than ever. Simply browse and find a job if you need it.".split(
    ""
  );

function JobSeekerHomePage() {
  const jobRef = useRef(null);
  const companiesRef = useRef(null);
  const ProcessRef = useRef(null);
  const newsRef = useRef(null);
  const pricingRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (section) => {
    const refs = {
      job: jobRef,
      companies: companiesRef,
      process: ProcessRef,
      news: newsRef,
      pricing: pricingRef,
    };

    // setActiveSection(section);

    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "job", ref: jobRef },
        { id: "companies", ref: companiesRef },
        { id: "process", ref: ProcessRef },
        { id: "news", ref: newsRef },
        { id: "pricing", ref: pricingRef },
      ];

      let currentSection = "";

      sections.forEach(({ id, ref }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 3) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative ">
      <JobSeekerNavbar
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      <div
        className="flex flex-col lg:flex-row justify-center mx-6 md:mx-4 my-4 min-h-[500px] md:min-h-[650px] rounded-2xl relative items-center"
        style={{
          backgroundImage: "linear-gradient(180deg, #C6E7FF 10%, #007FFF 110%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <p>Modernizing the Job Search Experience</p> */}

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img
            src={line3}
            className="opacity-25 rotate-180 w-full h-auto object-cover"
          />
        </div>

        {/* left content */}
        <div className="flex-1 w-full lg:w-60 md:w-full h-full  justify-center items-center z-10 md:flex ">
          <div className="flex h-full w-full justify-evenly items-center pt-8 flex-col gap-8 px-12">
            <div className="flex justify-center md:justify-end w-full">
              <motion.div
                className="bg-white rounded-xl p-3 sm:p-4 shadow-xl w-auto max-w-[250px] sm:max-w-[300px]"
                animate={{ x: [0, -25, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 10,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <img
                      src={avtar2 || "/placeholder.svg"}
                      alt="svg"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Customer Success
                    </p>
                    <p className="text-sm sm:text-base font-bold">7.89%</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="bg-white rounded-xl p-3 sm:p-4 shadow-xl w-full max-w-[250px] sm:max-w-[300px]"
              animate={{ x: [0, -25, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 10,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <ImSpotify
                    color="#00C950"
                    className="w-5 h-5 sm:w-7 sm:h-7"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    Product Designer
                  </p>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-xs sm:text-sm text-gray-600">
                      Spotify
                    </span>
                    <FaCheckCircle
                      color="#1447E6"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2 sm:mt-3 flex items-center text-xs sm:text-sm text-gray-500 gap-2 sm:gap-4">
                <span>Full Time</span>
                <span>•</span>
                <span>Remote</span>
              </div>
              <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-500">
                New York, Amerika Serikat
              </div>
              <div className="mt-1.5 sm:mt-2 font-semibold text-sm sm:text-base">
                $152K
                <span className="text-xs sm:text-sm text-gray-500">/month</span>
              </div>
            </motion.div>

            <div className="flex  lg:justify-end md:justify-end w-full">
              <motion.div
                className="bg-white rounded-xl p-3 sm:p-4 shadow-xl w-auto max-w-[250px] sm:max-w-[300px] hidden md:block"
                animate={{ x: [0, -25, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <AiFillFacebook size={30} color="#1877F2" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-600">
                      Project Design Manager
                    </p>
                    <div className="mt-3 flex items-center text-xs text-gray-500 gap-4">
                      <span className="hidden md:block">Facebook</span>
                      <span>•</span>
                      <span>Pune, Maharashtra</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Middle content  */}

        <div className="flex-1 flex justify-center items-center z-1">
          <div className="flex justify-center items-center flex-col text-center w-full">
            <motion.p
              className="text-3xl md:text-6xl font-inter text-dark md:py-6 font-semibold"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              {headingText}
            </motion.p>
            <motion.p
              className="text-sm md:text-lg text-slate-800 font-semibold py-6 px-2 md:px-6 z-0"
              variants={typingVariants}
              initial="hidden"
              animate="visible"
            >
              {subText.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.p>

            {/* Search Input and Button */}
            <div className="flex w-full max-w-lg flex-row justify-center px-3 md:px-0">
              <div className="relative w-full">
                <input
                  className="p-3 w-full rounded-3xl font-semibold pr-10"
                  placeholder="Search for Job..."
                />
                <FiSearch
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={25}
                />
              </div>

              <button className="bg-black px-6 text-white rounded-3xl mx-2 z-0">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Right content */}

        <div className="flex-1 w-full lg:w-60 md:w-full h-full  justify-center items-center z-10 md:flex my-6">
          <div className="flex h-full w-full justify-evenly items-center pt-8 flex-col gap-8 px-12">
            <div className="flex justify-center md:justify-start w-full">
              <motion.div
                className="bg-white rounded-xl p-3 sm:p-4 shadow-xl w-auto max-w-[250px] sm:max-w-[300px]"
                animate={{ x: [0, -25, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <img src={adobeLogo} alt="Design" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Design Engineer
                    </p>
                    <p className="text-xs text-gray-500">Adobe • Remote</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="bg-white rounded-xl p-4 shadow-xl max-w-[300px] hidden md:block"
              animate={{ x: [0, 50, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            >
              <h3 className="font-semibold mb-3">Top Job Categories</h3>

              {/* Bar Graph with Ascending Heights */}
              <div className="flex gap-2 items-end">
                <div className="h-14 w-12 bg-blue-50 rounded-md flex items-end justify-center pb-2">
                  <span className="text-xs">48%</span>
                </div>
                <div className="h-16 w-12 bg-blue-100 rounded-md flex items-end justify-center pb-2">
                  <span className="text-xs">65%</span>
                </div>
                <div className="h-20 w-12 bg-blue-200 rounded-md flex items-end justify-center pb-2">
                  <span className="text-xs">79%</span>
                </div>
                <div className="h-24 w-12 bg-blue-300 rounded-md flex items-end justify-center pb-2">
                  <span className="text-xs">93%</span>
                </div>
              </div>

              {/* Labels */}
              <div className="flex mt-2 text-xs text-gray-500 px-4 justify-between">
                <span>Product</span>
                <span>Gaming</span>
                <span>Finance</span>
                <span>Design</span>
              </div>
            </motion.div>

            <div className="flex justify-center md:justify-start w-full">
              <motion.div
                className="bg-white rounded-xl p-3 sm:p-4 shadow-xl w-auto max-w-[250px] sm:max-w-[300px]"
                animate={{ x: [0, 30, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <MdOutlineElectricBolt color="#ffff" size={25} />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-bold">80%</p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      More Efficient
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* More content here */}

      {/* Three Info Cards Here */}

      <InfoBoxThree />


        {/* ------------- PROCESS SECTION HERE --------------------- */}

        <section ref={ProcessRef} className="py-12">
        <InfoTitle
          subheading="Simple Process"
          heading="Effortless Process,"
          nextLine="Optimal Results"
        />

        {/* Interview Process Component Here  */}

        <InterViewProcess />

        {/* Small Heading and Big SubHeading */}

        <InfoTitle
          subheading="Success Experience"
          heading="Insights from Connect"
          nextLine="Users"
        />

        {/* Users Reviews Here */}

        <div className="my-3 px-2">
          <UserReviewCard />
        </div>

      
      </section>


      {/* ------------- JOB SECTION HERE --------------------- */}

      <section ref={jobRef} className="py-6">
        {/* Small Heading and Big SubHeading */}

        <InfoTitle
          subheading="Realize your Career Dreams"
          heading="Search and Discover"
          nextLine="your Jobs Here"
        />

        {/*Job Search Input here with Job Title and Location  */}

        <JobSearchInput />

        {/* Job Type Selection Chips here */}

        <div className="flex w-full justify-center">
          <SelectionChips />
        </div>

        {/* All Job Cards Here */}

        <JobInfoCard />

        {/* Showmore Btn here */}

        <div className="flex w-full items-center justify-center">
          <ShowMoreBtnDark />
        </div>
      </section>

      {/* ------------- COMPANIES SECTION HERE --------------------- */}

      <section ref={companiesRef} className="py-6">
        {/* Small Heading and Big SubHeading */}

        <InfoTitle
          subheading="Top Companies"
          heading="Best Companies for"
          nextLine="Employees 2025"
        />

        {/* Campany Cards Here */}

        <div className="my-3 px-2">
          <CompanyCard />
        </div>

        {/* Showmore Btn here */}

        <div className="flex w-full items-center justify-center">
          <ShowMoreBtnDark />
        </div>
        
      </section>

     

    
      {/* ------------- ARTICLE SECTION HERE --------------------- */}

      <section ref={newsRef} className="py-6">
        {/* Small Heading and Big SubHeading */}

        <InfoTitle
          subheading="Insight and Tips"
          heading="Find Expert Tips and Growth"
          nextLine="Insights on Our Blog"
        />

        {/* Article component */}

        <ArticleComponent />
      </section>

      {/*Subscibe Mail Here   */}

      <SubscribeMail />

      {/* Footer */}

      <JobSeekerFooter />
    </div>
  );
}

export default JobSeekerHomePage;

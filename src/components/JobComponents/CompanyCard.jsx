import React from 'react'
import { motion } from "framer-motion"
import { useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const companies = [
    {
        logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650152/GMS-LOGO_q74kbo.png",
        name: "Get My Solutions Pvt.Ltd",
        description:
            "GetMy Solutions provides cutting-edge solutions in Powertrain , Vehicle Electronics, Digital Cockpit, and Software Defined Vehicles to accelerate your automotive business.",
        categories: [
            { name: "UX and Design", color: "#FFB84C" },
            { name: "Technology Solutions", color: "#4ADE80" },
            { name: "EV Parts", color: "#FF8FAB" },
            { name: "Powertrain", color: "#60A5FA" },
            { name: "Vehicle Infotainment", color: "#A78BFA" },
        ],
    },
    {
        logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650153/TCS_Logo_np68wj.png",
        name: "Tata Consultancy Services",
        description:
            "TCS, a global leader in IT services, consulting, and business solutions, leverages technology for business transformation and helps catalyze change.",
        categories: [
          { name: "BPO", color: "#FFB84C" },
            { name: "Technology Solutions", color: "#4ADE80" },
            { name: "IT Operations", color: "#FF8FAB" },
            { name: "Advertising", color: "#60A5FA" },
            { name: "Business Development", color: "#A78BFA" },
        ],
    },

    {
        logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650152/MS_Logo_gkb3lk.png",
        name: "Microsoft",
        description:
            "Microsoft was founded by Bill Gates and Paul Allen to develop and sell BASIC interpreters for the Altair 8800. It rose to dominate the personal computer",
        categories: [
            { name: "BPO", color: "#FFB84C" },
            { name: "Technology Solutions", color: "#4ADE80" },
            { name: "IT Operations", color: "#FF8FAB" },
            { name: "Advertising", color: "#60A5FA" },
            { name: "Business Development", color: "#A78BFA" },
        ],
    },

    {
        logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650152/Google-Logo_owgacr.png",
        name: "Google",
        description:
            "Google was founded on September 4, 1998, by American computer scientists Larry Page and Sergey Brin while they were PhD students at Stanford University",
        categories: [
            { name: "UX and Design", color: "#FFB84C" },
            { name: "Technology Solutions", color: "#4ADE80" },
            { name: "Operations", color: "#FF8FAB" },
            { name: "Advertising", color: "#60A5FA" },
            { name: "Business Development", color: "#A78BFA" },
        ],
    },
    {
        logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650152/Meta_Logo_jvpupf.png",
        name: "Meta",
        description:
            "Meta ranks among the largest American information technology companies, alongside other Big Five corporations Alphabet (Google), Amazon",
        categories: [
            { name: "UX and Design", color: "#FFB84C" },
            { name: "Technology Solutions", color: "#4ADE80" },
            { name: "Operations", color: "#FF8FAB" },
            { name: "Advertising", color: "#60A5FA" },
            { name: "Business Development", color: "#A78BFA" },
        ],
    },
    {
        logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738651485/download_k1i0en.png",
        name: "Tesla",
        description:
            "Grab is a Southeast Asian technology company that offers a variety of services. Working at Grab has been an exhilarating journey.",
        categories: [
            { name: "UX and Design", color: "#FFB84C" },
            { name: "Technology Solutions", color: "#4ADE80" },
            { name: "Operations", color: "#FF8FAB" },
            { name: "Advertising", color: "#60A5FA" },
            { name: "Business Development", color: "#A78BFA" },
        ],
    },


    // Add more companies as needed
]



function CompanyCard() {

    const containerRef = useRef < HTMLDivElement > (null)


    return (


        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true} // Disable centeredSlides to balance cards
            slidesPerView={3} // Show 3 cards per view
            spaceBetween={30} // Add space between cards
            autoplay={{
                delay: 1000, // Auto-scroll every 3 seconds
                disableOnInteraction: true, // Stop autoplay after interaction
                pauseOnMouseEnter: true
            }}
            loop={true} //infinite Scroll
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300, // Increase depth for better perspective
                modifier: 2,
                slideShadows: false,
            }}
            
            // pagination={{ clickable: true }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper w-full flex justify-center items-center"
            breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 1 },
                480: { slidesPerView: 1, spaceBetween: 1 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 25 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
        >
            {companies.map((company, index) => (
                <SwiperSlide    key={index}>
                    {/* Motion div for animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="mySwiper w-full flex  max-w-[400px] md:max-w-full lg:max-w-full"
                    >
                        <div className="bg-gradient-to-br from-blue-200 to-blue-700 rounded-3xl p-8 shadow-xl">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-2 mb-6">
                                <img
                                    src={company.logo || "/placeholder.svg"}
                                    alt={`${company.name} logo`}
                                    className="w-11 h-11 object-contain"
                                />
                            </div>

                            <h2 className="text-2xl font-bold mb-3">{company.name}</h2>

                            <p className="text-black mb-6 text-sm leading-relaxed">
                                {company.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {company.categories.map((category, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-1.5 rounded-full text-sm bg-gray-300 font-semibold"
                                        style={{
                                            color: '#000',
                                        }}
                                    >
                                        {category.name}
                                    </span>
                                ))}
                            </div>

                            <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:text-white hover:bg-gray-800 transition-colors">
                                View Job
                            </button>
                        </div>
                    </motion.div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CompanyCard
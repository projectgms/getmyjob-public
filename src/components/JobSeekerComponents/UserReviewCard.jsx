import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import StarRating from './StarRating';

import avtar1 from './../../assets/images/userImages/avtar1.jpg'
import avtar2 from './../../assets/images/userImages/avtar2.jpg'
import avtar3 from './../../assets/images/userImages/avtar3.jpg'
import avtar4 from './../../assets/images/userImages/avtar4.jpg'
import avtar5 from './../../assets/images/userImages/avtar5.jpg'
import avtar6 from './../../assets/images/userImages/avtar6.jpg'


const userReviews = [
    {
        companyLogo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650152/GMS-LOGO_q74kbo.png",
        review: "I found my dream job within a week of signing up! The platform made it easy to browse and apply for roles that matched my skills. The recruiters were responsive, and the entire hiring process was seamless.",
        userImg: avtar1,
        userName: "Jon Deo",
        userJobTitle: "Product Manager",
        starRating: 5
    },
    {
        companyLogo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650153/TCS_Logo_np68wj.png",
        review: "This job portal helped me transition into a new career effortlessly. The personalized job recommendations and resume tips gave me the edge I needed to secure multiple interviews.",
        userImg: avtar2,
        userName: "Sarah Lee",
        userJobTitle: "Software Engineer",
        starRating: 4.5
    },
    {
        companyLogo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650152/MS_Logo_gkb3lk.png",
        review: "The application process was smooth, and I loved how I could track my progress for each job I applied to. I landed a fantastic position with a great company, all thanks to this portal!",
        userImg: avtar3,
        userName: "Michael Brown",
        userJobTitle: "Marketing Specialist",
        starRating: 5
    },
    {
        companyLogo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650152/Google-Logo_owgacr.png",
        review: "I was struggling to find a remote job, but this platform provided me with incredible opportunities tailored to my preferences. Within a month, I had a remote role that matched my expertise.",
        userImg: avtar5,
        userName: "Lisa Adams",
        userJobTitle: "UX Designer",
        starRating: 4
    },
    {
        companyLogo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650152/Meta_Logo_jvpupf.png",
        review: "What I love about this portal is the ability to connect directly with recruiters. The in-depth job descriptions and transparent hiring process helped me find the perfect role quickly!",
        userImg: avtar4,
        userName: "David Wilson",
        userJobTitle: "Data Analyst",
        starRating: 5
    },
    {
        companyLogo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738651485/download_k1i0en.png",
        review: "I used this job portal after months of searching elsewhere with no luck. Within weeks, I was getting interview calls from top companies. I highly recommend it to job seekers!",
        userImg: avtar6,
        userName: "Emily Johnson",
        userJobTitle: "HR Coordinator",
        starRating: 4.5
    }
];


function UserReviewCard() {
  return (
    <Swiper
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true} // Disable centeredSlides to balance cards
    slidesPerView={3} // Show 3 cards per view
    spaceBetween={30} // Add space between cards
    autoplay={{
        delay: 3000, // Auto-scroll every 3 seconds
        disableOnInteraction: true, // Stop autoplay after interaction
        pauseOnMouseEnter: true
    }}
    loop={true} //infinite Scroll
    coverflowEffect={{
        rotate: 62,
        stretch: 0,
        depth: 500, // Increase depth for better perspective
        modifier: 2,
        slideShadows: false,
    }}
    
    // pagination={{ clickable: true }}
    modules={[EffectCoverflow, Autoplay]}
    className="mySwiper w-full flex justify-center items-center h-[500px] py-2"
    breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 1 },
        480: { slidesPerView: 1, spaceBetween: 1 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
    }}
>
    {userReviews.map((userReview, index) => (
        <SwiperSlide    key={index}>
            {/* Motion div for animation */}
            <div
                className="mySwiper w-full flex justify-center max-w-[400px] md:max-w-full lg:max-w-full h-[450px]"
            >
                {/* bg-gradient-to-br from-blue-500 to-pink-100 */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                    <div className="w-16 h-16 bg-white  flex items-center justify-center mb-6">
                        <img
                            src={userReview.companyLogo || "/placeholder.svg"}
                            alt="logo"
                            className="w-16 h-16 object-contain"
                        />
                    </div>

                    <div className="h-1/3">
                        <p className='font-medium text-gray-800 md:text-sm lg:text-lg'>"{userReview.review}"</p>
                    </div>

                    <div className="h-1/4 flex flex-col absolute bottom-10 gap-4">

                        {/* Reusable Star Rating Component Here */}
                        <StarRating size={18} color='#FBA518' starRating={userReview.starRating}/>
                        <div className="flex items-center">
                            <div className='bg-white w-14 h-14 rounded-full flex justify-center items-center '>
                            <img
                            src={userReview.userImg || "/placeholder.svg"}
                            alt="logo"
                            className="w-14 h-14 object-contain rounded-full"
                        />
                            </div>
                            <div className='mx-2'>
                                <p className='text-lg font-bold text-black'>{userReview.userName}</p>
                                <p className='font-medium text-gray-700 text-sm'>{userReview.userJobTitle}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </SwiperSlide>
    ))}
</Swiper>
  )
}

export default UserReviewCard
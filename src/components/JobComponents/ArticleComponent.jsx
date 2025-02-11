import React from 'react'
import { Link } from 'react-router-dom'
import ArticleAvtar from './../../assets/images/ArticleAvtar.jpg'
import LaptopAvtar from './../../assets/images/AvtartWithLaptop.jpg'
import Avatr2Laptop from './../../assets/images/laptopArticle.jpg'
import LinkedInLaptop from './../../assets/images/LinkedINLaptop.jpg'
import { LuClock4 } from "react-icons/lu";

function ArticleComponent() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <div className="flex gap-4">
                        <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full px-4 py-2 flex items-center">
                            <p className='text-md font-normal'>All News</p>
                        </button>
                        <button className="border border-gray-300 text-gray-500 rounded-full px-4 py-2 flex items-center">
                            <p className='text-md font-normal'>News</p>
                        </button>
                        <button className="border border-gray-300 text-gray-500 rounded-full px-4 py-2 flex items-center600">
                            <p className='text-md font-normal'>Interview</p>
                        </button>
                    </div>
                    {/* <Link href="#" className="flex items-center gap-2 text-sm">
                        All News
                    </Link> */}
                </div>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Main Featured Post */}
                <div className="bg-white p-4 rounded-lg">
                    <div className="bg-gray-200  rounded-lg mb-4">
                        <img src={ArticleAvtar} className='w-full h-full rounded-lg object-cover' />

                    </div>
                    <div className="space-y-2">
                        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">How to Spot Recruitment Fraud.</h2>
                        <p className="text-gray-600 text-md font-semibold">
                            Recruitment fraud is a crime that involves the creation of fictitious job opportunities using trusted
                            brands to extract money or personal data...
                        </p>
                        <button className="px-6 py-2 my-2 rounded-full border bg-black text-white border-black hover:bg-white hover:text-black flex justify-center items-center mx-2">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Column Posts */}
                <div className="space-y-6">
                    {/* Post 1 */}
                    <div className="flex gap-4">
                        <div className="bg-gray-200 w-56 h-48 rounded-lg shrink-0">
                            <img src={LaptopAvtar} className='w-full h-full rounded-lg object-cover' />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-normal text-sm md:text-sm  lg:text-2xl">Video Interview Tips: Before, During, and After</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                                <LuClock4 size={18} className='text-gray-500'/>
                                <span>2 min read</span>
                                <span>8 June 2024</span>
                            </div>
                        </div>
                    </div>

                    {/* Post 2 */}
                    <div className="flex gap-4">
                        <div className="bg-gray-200 w-56 h-48 rounded-lg shrink-0">
                            <img src={Avatr2Laptop} className='w-full h-full rounded-lg object-cover' />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-normal text-sm md:text-sm  lg:text-2xl">Maximizing Your Job Search Potential with AI Tools</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                                <LuClock4 size={18} className='text-gray-500'/>
                                <span>5 min read</span>
                                <span>8 June 2024</span>
                            </div>
                        </div>
                    </div>

                    {/* Post 3 */}
                    <div className="flex gap-4">
                        <div className="bg-gray-200 w-56 h-48 rounded-lg shrink-0">
                            <img src={LinkedInLaptop} className='w-full h-full rounded-lg object-cover' />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-normal text-sm md:text-sm  lg:text-2xl">Top 5 LinkedIn Tips for Job Seekers</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                                <LuClock4 size={18} className='text-gray-500'/>
                                <span>6 min read</span>
                                <span>5 June 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleComponent
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Briefcase, Award } from 'lucide-react';

const Experience = () => {

    const experiences = [
        {
            id: 1,
            title: "Research Intern",
            organization: "Space Applications Center (SAC), ISRO",
            duration: "90 Days",
            description: "Conducted advanced research on the trajectory motion of a satellite in a Halo orbit. Utilized deep learning models to accurately predict the satellite's path, enhancing trajectory modeling and contributing to advancements in satellite navigation and control systems."
        }
    ];

    return (
        <div id='experience' className='py-10 bg-gray-100 relative'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>My Professional Experience</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {experiences.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                <div className='flex items-center gap-2'>
                                    <Briefcase className='text-red-500' />
                                    <h3 className='font-semibold text-red-500 text-xl'>{item.title}</h3>
                                </div>
                                <p className='text-gray-700 mt-2'><strong>Organization:</strong> {item.organization}</p>
                                <p className='text-gray-700'><strong>Duration:</strong> {item.duration}</p>
                                <p className='py-3'>{item.description}</p>
                                <div className='flex justify-end items-center gap-2'>
                                    <Award className='text-red-400'/>
                                    <span className='text-sm text-gray-600'>Achievement in Space Research</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>
                </Swiper>
            </div>
        </div>
    )
}

export default Experience;

import React from 'react'
import Ecommerce from '../assets/Ecommerce.png'
import Netflix from '../assets/Netflix.png'
import Booking from '../assets/Booking.png'
import Chart_App from '../assets/Chart_App.png'
import Twitter from '../assets/Twitter.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
      {
        title: 'Ecommerce',
        desc: 'A robust and user-friendly online store built with the MERN stack, delivering seamless shopping experiences.',
        image: Ecommerce,
        live: "https://ecommerce-8t0j.onrender.com",
        github: "https://github.com/srimant0203/mern-ecommerce"
      },
      {
        title: 'Twitter Clone',
        desc: 'A sleek, responsive Twitter clone created using MERN stack, enabling real-time interactions and social engagement.',
        image: Twitter,
        live: "https://twitter-5kxb.onrender.com",
        github: "https://github.com/srimant0203/twitter-clone-master"
      },
      {
        title: 'Netflix Clone',
        desc: 'A captivating Netflix clone built with MERN stack, offering a modern UI and seamless streaming experience.',
        image: Netflix,
        live: "https://netflix-web-tk8e.onrender.com",
        github: "https://github.com/srimant0203/netflix"
      },      
      {
        title: 'E-Hotel Booking',
        desc: 'An intuitive hotel booking platform designed with MERN stack, ensuring efficient reservation and management.',
        image: Booking,
        live: "https://booking-he3w.onrender.com",
        github: "https://github.com/srimant0203/mern-booking-website"
      },
      {
        title: 'Chart App',
        desc: 'A dynamic charting application developed with the MERN stack, perfect for visualizing data insights in real-time.',
        image: Chart_App,
        live: "https://chat-app-u01g.onrender.com",
        github: "https://github.com/srimant0203/mern-chat-app"
      }
      ,
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects

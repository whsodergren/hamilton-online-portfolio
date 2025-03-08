import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20 '>I am a graduate from the University of Alabama with a bachelor’s degree in Management Information Systems and a minor in Business Cybersecurity. My expertise spans full-stack development, automation, and data-driven decision-making, with proficiency in C#, Python, JavaScript, SQL, HTML, CSS, and React. As an Ignition Developer at Phifer Inc., I enhanced manufacturing operations by developing dynamic web applications that improved data visualization, audit scheduling, and real-time monitoring. Additionally, as a software engineer on my senior capstone project for Walmart, I helped design and implement an automated certificate renewel system using Python scripts within Walmart's concord flow environment, reducing manual effort for Walmart’s cryptology team and eliminating human error in the renewel process of over 1 million certificates each year. Checkout my resume to see more!</p>

            <br />

            <p className='text-xl'>In addition to my work experience, I have developed full-stack applications using C#, MySQL, HTML, CSS, JavaScript, and React, which you can explore in the portfolio section below. My experience also extends to Microsoft Azure, Linux, GitHub, .NET, Ignition, and more. I’m passionate about building efficient, scalable, and user-friendly applications that drive business success. Feel free to connect with me on LinkedIn or reach out via email at hamsod18@icloud.com!</p>
        </div>
    </div>
  )
}

export default About
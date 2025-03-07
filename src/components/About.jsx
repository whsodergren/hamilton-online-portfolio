import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20 '>I am a graduate of the University of Alabama with a bachelor’s degree in Management Information Systems and a minor in Business Cybersecurity. My experience spans full-stack development, automation, and data-driven decision-making, with technical expertise in C#, Python, JavaScript, SQL, HTML, CSS, and REACT. As an Ignition Developer Intern at Phifer Inc., I streamlined manufacturing operations by building dynamic web applications that improved data visualization, audit scheduling, and real-time monitoring. Additionally, through my capstone project with Walmart, I developed an automated certificate management system using Python scripts within the Concord environment, reducing manual effort for Walmart’s cryptology team and enhancing security compliance.</p>

            <br />

            <p className='text-xl'>Beyond internships, I have built full-stack applications, including a sports scheduling platform using C#, MySQL, HTML, CSS, and JavaScript. My experience also includes working with Microsoft Azure, Linux, GitHub, .NET, Ignition, and others. I am passionate about creating efficient, scalable, and user-friendly solutions that drive business success. Feel free to connect with me on LinkedIn, send me an email at hamsod18@icloud.com, or explore my portfolio to see more of my work!            </p>
        </div>
    </div>
  )
}

export default About
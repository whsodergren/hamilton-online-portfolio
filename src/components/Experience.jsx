import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import sqlImage from '../assets/sql.png'
import pythonImage from '../assets/PythonLogo.png'
import cSharpImage from '../assets/csharp.png'
import dotNetImage from '../assets/dotnet.png'



const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'

        },
        {
            id: 4,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 5,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            src: sqlImage,
            title: 'SQL',
            style: 'shadow-orange-400'
        },
        {
            id: 8,
            src: pythonImage,
            title: 'Python',
            style: 'shadow-yellow-300'
        },
        {
            id: 9,
            src: cSharpImage,
            title: 'C#',
            style: 'shadow-purple-500'
        },
        {
            id: 10,
            src: dotNetImage,
            title: '.Net Core',
            style: 'shadow-purple-300'
        },
    ]

  return (
    <div name='technologies' className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Technologies</p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {techs.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
                
            </div>

        </div>
    </div>
  )
}

export default Experience
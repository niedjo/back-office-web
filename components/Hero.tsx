import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-between items-center w-full h-[80vh]'>
        <h1 className='text-3xl pt-5 text-center'>Welcome back <b className='text-purple'>Niedjo Kuitche</b></h1>
        <h2 className='text-xl text-center'>Now, impress your audience by adding something special to your portfolio</h2>
        <p className='text-center'>What do you want to add today ?</p>
        <ul className='flex flex-wrap w-[70%] h-[30vh] justify-between items-center gap-2'>
            <li><Link className='link' href={'/projets'}>New Project</Link></li>
            <li><Link className='link' href={'/comment'}>New Comment</Link></li>
            <li><Link className='link' href={'/experiance'}>New Experiance</Link></li>
        </ul>
    </div>
  )
}

export default Hero

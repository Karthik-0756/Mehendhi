import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Play, List } from 'lucide-react';
import { useEffect } from 'react';
import homeBG from './assets/mehndi-bg.jpg';
import hopingBGmeBG from './assets/pinkBG.jpg';
import homePageImage from './assets/homePageImage.jpg';
import handimg from './assets/handbgimg.png';
import location from "./assets/location.png"
import msg from "./assets/message.png"
import call from "./assets/telephone.png"
import time from "./assets/clock.png"
import eco from "./assets/eco-friendly.png"
import money from "./assets/piggy-bank.png"
import pattern from "./assets/pattern.png"
import pattern1 from "./assets/fabric-pattern.png"
import facebook from "./assets/facebook.png"
import facebook1 from "./assets/facebook (1).png"
import insta from "./assets/instagram.png"
import insta1 from "./assets/instagram (1).png"
import twitter from "./assets/twitter.png"
import twitter1 from "./assets/twitter (1).png"
import linkdln from "./assets/linkedin.png"
import { useNavigate } from 'react-router-dom'
import {img1,img2,img3,img4,img5,img6,img7,img8,img9,img10} from './flowerDesignStores'

const FlowerDesignLandingPage =()=>{
    useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
        const images=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]
    return(
         <div className="bg-white text-gray-800 font-serif ">
            {/* 1. TOP NAVBAR */}
            <header className="border-b border-gray-100">
                <div className="bg-pink-50 py-2 text-xs flex justify-between md:px-6 px-2 lg:px-20 text-gray-600">
                    <div className="flex flex-col md:flex-row md:gap-4 gap-1">
                        <span className="flex items-center gap-1 whitespace-nowrap"><Phone size={12} /> +91 82488 97608</span>
                        <span className="flex items-center gap-1"><Mail size={12} /> henna_by_komz@mehndidesign.com</span>
                    </div>
                    <div className="flex w-25  gap-3 flex-row">
                        <a className='transition-transform duration-200 hover:-translate-y-1' href="https://www.instagram.com/henna_by_komz/"><img src={insta1} alt="" /></a>
                        <a className='transition-transform duration-200 hover:-translate-y-1' href=""><img src={facebook1} alt="" /></a>
                        <a className='transition-transform duration-200 hover:-translate-y-1' href=""><img src={twitter1} alt="" /></a>
                    </div>
                </div>
                <nav className="flex justify-between items-center md:py-4 py-2 px-6 lg:px-20 bg-white ">
                    <div className="md:text-2xl  font-bold text-pink-600 tracking-widest">HENNA_BY_KOMZ</div>
                    {/* <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider font-medium ">
                        <a href=""><li className="group relative text-pink-600 cursor-pointer ">Home <span className='absolute bottom-0 left-0 h-0.5 w-full bg-pink-600 scale-x-0 transition-transform transform duration-300 origin-left group-hover:scale-x-100'></span></li></a>
                        <a className='scroll-smooth' href="#categories"><li className="group relative hover:text-pink-600 cursor-pointer ">Categories<span className='absolute bottom-0 left-0 h-0.5 w-full bg-pink-600 scale-x-0 transition-transform transform duration-300 origin-left group-hover:scale-x-100'></span></li></a>
                        <a href="#aboutus"><li className="group relative cursor-pointer hover:text-pink-600 transition-colors">About<span className='absolute bottom-0 left-0 h-0.5 w-full bg-pink-600 origin-left transform scale-x-0 transition-transform   duration-300 group-hover:scale-x-100'></span></li></a>
                        <a href="#galary"><li className="group relative hover:text-pink-600 cursor-pointer ">Gallery<span className='absolute bottom-0 left-0 h-0.5 w-full bg-pink-600 scale-x-0 transition-transform transform duration-300 origin-left group-hover:scale-x-100'></span></li></a>
                        <a href="#whyus"><li className="group relative hover:text-pink-600 cursor-pointer ">Why us<span className='absolute bottom-0 left-0 h-0.5 w-full bg-pink-600 scale-x-0 transition-transform transform duration-300 origin-left group-hover:scale-x-100'></span></li></a>
                        <a href="#contact"><li className="group relative hover:text-pink-600 cursor-pointer ">Contact<span className='absolute bottom-0 left-0 h-0.5 w-full bg-pink-600 scale-x-0 transition-transform transform duration-300 origin-left group-hover:scale-x-100'></span> </li></a>
                    </ul> */}
                </nav>
            </header>
            {/* 2. HERO SECTION */}
            <section className="relative md:h-175 h-[60vh]  w-full">
                {/* Background Image with Pink Overlay */}
                <div className="absolute inset-0">
                    <img
                        src={handimg}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Pink overlay */}
                    <div className="absolute inset-0 bg-pink-300 md:opacity-40 opacity-50"></div>
                </div>

                {/* Content Wrapper */}
                <div className="relative z-10 flex h-full">

                    {/* Left empty space */}
                    <div className="w-1/2 hidden md:block"></div>

                    {/* Right Content (slightly more right) */}
                    <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end px-4 md:pr-16">
                        <div className="text-center md:text-left space-y-5 max-w-lg">

                            <h2 className="text-pink-700 text-3xl italic">
                                Mehndi Designs
                            </h2>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
                                To Make You Fall In Love
                            </h1>

                            <a href="#contact">
                                <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition">
                                    Enquiry Now
                                </button>
                            </a>

                        </div>
                    </div>

                </div>
            </section>
            {/* flower design */}
            <section className='md:ml-30 md:mr-30 ml-4 mr-4'>
                <h1 className='mt-10 font-black text-center text-4xl my-20 underline'> Flower Designs!!!</h1>
                <div className='mt-10 grid grid-cols-2  md:grid-cols-3  gap-4'>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}

                            className='md:w-100 mb-10 md:h-80 w-full h-54 md:mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl object-cover'
                        />

                    ))}

                </div>

            </section>
            {/* form control    */}
            <section className="bg-gray-100 py-10  ">
                <div className="md:mx-40 mx-2 flex flex-col md:flex-row justify-between gap-6 md:gap-0">
                    <div className='md:w-80 w-40 text-start items-center '>
                        <h2 className='font-bold mb-2 '>CONTACT</h2>
                        <p className='mb-2'>NO:27/44 THIRUVALLUVAR STREET NEHRU NAGAR VELACHERY CHENNAI-600042</p>
                        <p className='mb-2'>+91 82488 97608</p>
                        <p>henna_by_komz@mehndidesign.com</p>
                    </div>
                    <div className=' flex flex-col '>
                        <h2 className='font-bold mb-2'>USEFUL LINKS</h2>
                        <a className='font-medium mb-1 hover:text-pink-400' href="">PRIVACY POLICY</a>
                        <a className='font-medium mb-1 hover:text-pink-400' href="#categories">SERVICES</a>
                        <a className='font-medium mb-1 hover:text-pink-400' href="#aboutus">ABOUT US</a>
                        <a className='font-medium mb-1 hover:text-pink-400' href="#whyus">WHY US</a>
                        <a className='font-medium mb-1 hover:text-pink-400' href="#contact">CONTACT US</a>


                    </div>
                    <div>
                        <h2 className='font-bold mb-2'>CONNECT</h2>
                        <div className='md:w-30 md:h-30 w-40 h-10 flex flex-row gap-3  '>
                            <a className='transition-transform duration-200 hover:-translate-y-1  ' href=""><img src={facebook} alt="" /></a>
                            <a className='transition-transform duration-200 hover:-translate-y-1  ' href="https://www.instagram.com/henna_by_komz/"><img src={insta} alt="" /></a>
                            {/* <a className='transition-transform duration-200 hover:-translate-y-1  ' href=""><img src={linkdln} alt="" /></a> */}
                            <a className='transition-transform duration-200 hover:-translate-y-1  ' href=""><img src={twitter} alt="" /></a>
                        </div>
                    </div>
                </div>


            </section>
            {/* FOOTER */}
            <footer className="bg-gray-200 md:py-10 py-2 text-center text-sm text-gray-500">

                <p>© 2026 Henna_By_Komz. All Rights Reserved.</p>
            </footer>

        </div>
    )
}
export default FlowerDesignLandingPage




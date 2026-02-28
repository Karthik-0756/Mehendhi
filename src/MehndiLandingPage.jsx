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
import { img1, img2, img3, img4, img5, img6 } from './CategoryImages'




const MehndiLandingPage = () => {

    
    const [form, setForm] = useState(
        {
            Name: '',
            Number: '',
            Mail: '',
            Msg: ''

        }
    );

    // 

    const handlechange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setForm({ ...form, [name]: value })
        console.log(value)
    }
    const WhatsApp = () => {
        const {Name,Number,Mail,Msg}=form;
        if(Name && Number && Mail && Msg){
            const phoneNumber = "916374276273";
             const text = `
            Name:${form.Name},
            Number:${form.Number},
            Mail:${form.Mail},
            Msg:${form.Msg}
    `
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
            alert("Thanks for consulting us!!!");
            window.open(url, "_blank")
             
        }
       
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const navigate = useNavigate();
    return (


        <div className="bg-white text-gray-800 font-serif ">
            {/* 1. TOP NAVBAR */}
            <header className="border-b border-gray-100">
                <div className="bg-pink-50 py-2 text-xs flex justify-between md:px-6 px-2 lg:px-20 text-gray-600">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1"><Phone size={12} /> +91 82488 97608</span>
                        <span className="flex items-center gap-1"><Mail size={12} /> henna_by_komz@mehndidesign.com</span>
                    </div>
                    <div className="flex w-25  gap-3 flex-row">
                        <a className='transition-transform duration-200 hover:-translate-y-1' href="https://www.instagram.com/henna_by_komz/"><img src={insta1} alt="" /></a>
                        <a className='transition-transform duration-200 hover:-translate-y-1'href=""><img src={facebook1} alt="" /></a>
                        <a className='transition-transform duration-200 hover:-translate-y-1'href=""><img src={twitter1} alt="" /></a>
                    </div>
                </div>
                <nav className="flex justify-between items-center md:py-4 py-2 px-6 lg:px-20 bg-white ">
                    <div className="md:text-2xl  font-bold text-pink-600 tracking-widest">HENNA_BY_KOMZ</div>
                    <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider font-medium ">
                        <a href=""><li className="group relative text-pink-600 cursor-pointer ">Home <span className='absolute bottom-0 left-0 h-0.5 w-full bg-pink-600 scale-x-0 transition-transform transform duration-300 origin-left group-hover:scale-x-100'></span></li></a>
                        <a className='scroll-smooth' href="#categories"><li  className="group relative hover:text-pink-600 cursor-pointer ">Categories<span className='absolute bottom-0 left-0 h-0.5 w-full bg-pink-600 scale-x-0 transition-transform transform duration-300 origin-left group-hover:scale-x-100'></span></li></a>
                        <a href="#aboutus"><li className="group relative cursor-pointer hover:text-pink-600 transition-colors">About<span className='absolute bottom-0 left-0 h-0.5 w-full bg-pink-600 origin-left transform scale-x-0 transition-transform   duration-300 group-hover:scale-x-100'></span></li></a>
                        <a href="#galary"><li className="group relative hover:text-pink-600 cursor-pointer ">Gallery<span className='absolute bottom-0 left-0 h-0.5 w-full bg-pink-600 scale-x-0 transition-transform transform duration-300 origin-left group-hover:scale-x-100'></span></li></a>
                        <a href="#whyus"><li className="group relative hover:text-pink-600 cursor-pointer ">Why us<span className='absolute bottom-0 left-0 h-0.5 w-full bg-pink-600 scale-x-0 transition-transform transform duration-300 origin-left group-hover:scale-x-100'></span></li></a>
                        <a href="#contact"><li className="group relative hover:text-pink-600 cursor-pointer ">Contact<span className='absolute bottom-0 left-0 h-0.5 w-full bg-pink-600 scale-x-0 transition-transform transform duration-300 origin-left group-hover:scale-x-100'></span> </li></a>
                    </ul>
                </nav>
            </header>

            {/* 2. HERO SECTION */}
            <section className="relative md:h-175 h-100 md:w-full w-120">
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
                    <div className="w-full md:w-1/2 flex items-center justify-end pr-16">
                        <div className="text-center md:text-left space-y-5 max-w-lg">

                            <h2 className="text-pink-700 text-3xl italic">
                                Mehndi Designs
                            </h2>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
                                To Make You Fall In Love
                            </h1>

                            <a href="#contact">
                                <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition">
                                    Contact Now
                                </button>
                            </a>

                        </div>
                    </div>

                </div>
            </section>

            {/* 3. CATEGORIES */}
            <section id='categories' className="py-20 px-6 lg:px-20 text-center">
                <h2 className="text-3xl font-bold mb-12">Popular categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

                    {/* Card 1 */}
                    <div className="space-y-4 group">
                        <div className="md:h-64 h-50 overflow-hidden rounded-full shadow-lg">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCw4ylLIFHPv3EOSRhFpuoth2IRZq2zAVcw&s"
                                alt="Henna Body Art"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg hover:underline">Mehandhi palm</h3>

                        {/* <button className="bg-pink-400 text-white px-4 py-1.5 rounded text-xs hover:bg-pink-500">
                            Read More
                        </button> */}
                    </div>

                    {/* Card 2 */}
                    <div className=" space-y-4 group ">
                        <div className="md:h-64 h-50 overflow-hidden rounded-full shadow-lg">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXNLT4TScR6L_4hFF3nMUyLGU0y0LtWpVrw&s"
                                alt="Dhamal Mehndi"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg hover:underline">Mehandhi arabic</h3>

                        {/* <button className="bg-pink-400 text-white px-4 py-1.5 rounded text-xs hover:bg-pink-500">
                            Read More
                        </button> */}
                    </div>

                    {/* Card 3 */}
                    <div className="space-y-4 group">
                        <div className="md:h-64 h-50 overflow-hidden rounded-full shadow-lg">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvSVUuLUO_y-cW2EYMDMkrL9kATlImzKCIQ&s"
                                alt="Bridal Mehndi"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg hover:underline"> Flower Designs</h3>

                        {/* <button className="bg-pink-400 text-white px-4 py-1.5 rounded text-xs hover:bg-pink-500">
                            Read More
                        </button> */}
                    </div>

                    {/* Card 4 */}
                    <div className="space-y-4 group">
                        <div className="md:h-64 h-50 overflow-hidden rounded-full shadow-lg">
                            <img
                                src="https://i.ytimg.com/vi/KR-Obe_YcHI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCTcX7GYzk-UICD8apV2zRqhzzKIA"
                                alt="Tattoo Mehndi"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg hover:underline">Mahendhi Tattos</h3>

                        {/* <button className="bg-pink-400 text-white px-4 py-1.5 rounded text-xs hover:bg-pink-500">
                            Read More
                        </button> */}
                    </div>
                    <div className="space-y-4 group">
                        <div className="md:h-64 h-50 overflow-hidden rounded-full shadow-lg">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolHeTBsUcnzmspD4GOBsei4LMka2KdO9JgA&s"
                                alt="Tattoo Mehndi"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg hover:underline">Mandala designs</h3>

                        {/* <button className="bg-pink-400 text-white px-4 py-1.5 rounded text-xs hover:bg-pink-500">
                            Read More
                        </button> */}
                    </div>

                </div>

            </section>

            {/* 4. ABOUT US */}
            <section id='aboutus' className="py-10 bg-pink-50 px-6 text-center lg:px-20 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold">About Us</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Henna_by_komz is a professional henna artist service dedicated to providing unique and elegant designs.
                        We specialize in bridal, festive, and contemporary henna styles that last long and look stunning.
                        Our focus is on precision, hygiene, and customer satisfaction.
                    </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                    <img className='w-200 h-120 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5E5ly7ILwDPLX5UCxS4dd6n6-090JXqOc1w&s    " alt="Artist working" />
                </div>
            </section>




            {/* Galary */}
            <section id='galary' className="pt-20 px-6 lg:px-20 text-center">
                <h2 className="text-3xl font-bold mb-10">Gallery</h2>
                <div className="grid grid-cols-1  md:grid-cols-3  gap-4">

                    <img className='w-100 mb-10 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl' src={img1} alt="" />
                    <img className='w-100 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl ' src={img2} alt="" />
                    <img className='w-100 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl ' src={img3} alt="" />
                    <img className='w-100 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl ' src={img4} alt="" />
                    <img className='w-100 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl ' src={img5} alt="" />
                    <img className='w-100 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl ' src={img6} alt="" />
                </div>

                <button onClick={() => navigate("/gallery")} className='w-50 mt-5 h-15 rounded-2xl border  border-pink-300 bg-white text-red-400  items-center hover:text-white transition-colors duration-500  hover:bg-red-400'>Load more...</button>
            </section>

            {/* why us */}
            <section id='whyus' className="bg-[#fdecee] my-20 py-30">
                <div className="max-w-4xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-center text-3xl font-medium text-gray-800 mb-16">
                        Why Us
                    </h2>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Left Column */}
                        <div className="space-y-12">

                            {/* Item 1 */}
                            <div className="flex items-start gap-6">
                                <div className="w-45  flex items-center justify-center rounded-full">
                                    {/* <span className="text-pink-500 text-xl">🌿</span> */}
                                    <img src={eco} alt="" />
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    <span className="font-medium text-gray-800">
                                        Skin friendly and dark color mehendi
                                    </span>{" "}
                                    – We make the henna paste with 100% natural henna powder,
                                    lemon juice and essential oils but still deliver great
                                    color and shade.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-start gap-6">
                                <div className="w-40 flex items-center justify-center rounded-full">
                                    {/* <span className="text-pink-500 text-xl">💳</span> */}
                                    <img src={money} alt="" />
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Customized price range for all. Easy, affordable and reliable,
                                    we offer tremendous value to customers at reasonable prices.
                                </p>
                            </div>

                        </div>

                        {/* Right Column */}
                        <div className="space-y-12">

                            {/* Item 3 */}
                            <div className="flex items-start gap-6">
                                <div className="w-35 flex items-center justify-center rounded-full">
                                    <img src={pattern} alt="" />
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    We have artists with expertise in many types of mehendi
                                    patterns, most popular ones being the Arabic and palm
                                    designs.
                                </p>
                            </div>

                            {/* Item 4 */}
                            <div className="flex items-start gap-6">
                                <div className="w-30 flex items-center justify-center rounded-full">
                                    <img src={pattern1} alt="" />
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    We have evolved the traditional patterns of mehendi into
                                    intricate and decorative designs.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 6. VIDEOS */}
            {/* <section className="py-20 bg-gray-50 px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((v) => (
            <div key={v} className="bg-black aspect-video rounded-xl relative flex items-center justify-center group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1591544075191-766b44705572?auto=format&fit=crop&q=40&w=800"
                className="absolute w-full h-full object-cover opacity-60" alt="Video thumbnail" />
              <div className="z-10 bg-white/30 p-4 rounded-full group-hover:scale-110 transition cursor-pointer">
                <Play fill="white" stroke="white" size={32} />
              </div>
            </div>
          ))}
        </div>
      </section> */}

            {/* 7. CONTACT US */}
            <section id='contact' className="py-20 bg-white items-center">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-center text-3xl font-medium text-gray-800 mb-16">
                        Contact Us
                    </h2>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center relative">

                        {/* Address */}
                        <div className="px-6 border-r-2 border-r-amber-100">
                            <div className="flex justify-center mb-6">
                                {/* <LocationIcon /> */}
                                <img className='w-10 h-10' src={location} alt="" />
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                NO:27/44 THIRUVALLUVAR STREET NEHRU NAGAR VELACHERY CHENNAI-600042
                            </p>
                        </div>


                        {/* Divider */}
                        {/* <VerticalDivider /> */}

                        {/* Email */}
                        <div className="px-6 border-r-2 border-r-amber-100">
                            <div className="flex justify-center mb-6">
                                {/* <MailIcon /> */}
                                <img className='w-10 h-10' src={msg} alt="" />
                            </div>
                            <p className="text-gray-600 text-sm">
                                henna_by_komz@mehndidesign.com
                            </p>
                        </div>

                        {/* <VerticalDivider /> */}

                        {/* Phone */}
                        <div className="px-6 border-r-2 border-r-amber-100">
                            <div className="flex justify-center mb-6">
                                {/* <PhoneIcon /> */}
                                <img className='w-10 h-10' src={call} alt="" />
                            </div>
                            <p className="text-gray-600 text-sm">
                                +91 82488 97608
                            </p>
                        </div>

                        {/* <VerticalDivider /> */}

                        {/* Time */}
                        <div className="px-6 ">
                            <div className="flex justify-center mb-6">
                                {/* <ClockIcon /> */}
                                <img className='w-10 h-10' src={time} alt="" />
                            </div>
                            <p className="text-gray-600 text-sm">
                                Mon – Sun : 10:00 AM – 07:00 PM
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* form control    */}
            <section className="py-20 px-6 lg:px-20">


                <div className="grid md:grid-cols-2 gap-20">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-pink-100 p-3 rounded-full text-pink-600"><MapPin size={24} /></div>
                            <div><h4 className="font-bold  text-pink-600 uppercase text-xs">Address</h4><p className='w-100'>NO:27/44 THIRUVALLUVAR STREET, NEHRU NAGAR, VELACHERY, CHENNAI-600042</p></div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-pink-100 p-3 rounded-full text-pink-600"><Phone size={24} /></div>
                            <div><h4 className="font-bold text-pink-600 uppercase text-xs">Call Us</h4><p>+91 82488 97608</p></div>
                        </div>
                    </div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input name='Name' required onChange={handlechange} placeholder="Full Name" className="md:w-full w-50 p-3 border border-gray-200 rounded-lg focus:outline-pink-400" />
                            <input name='Number' required onChange={handlechange} placeholder="Phone number" className="md:w-full w-50 p-3 border border-gray-200 rounded-lg focus:outline-pink-400" />
                            <input name='Mail' required onChange={handlechange} placeholder="Email Address" className="md:w-160 w-110 p-3 border border-gray-200 rounded-lg focus:outline-pink-400" />
                        </div>
                        <textarea required placeholder="Your Message" name='Msg' onChange={handlechange} rows="4" className="md:w-full w-110 p-3 border border-gray-200 rounded-lg focus:outline-pink-400"></textarea>
                        <button onClick={WhatsApp} className="md:w-full w-40 bg-pink-500 text-white py-3 rounded-lg font-bold transition-colors duration-500 hover:bg-pink-600">Send Message</button>
                    </form>
                </div>
            </section>
               {/* footer info */}
            <section className="bg-gray-100 py-10  ">
                <div className='md:mx-40 mx-2  flex justify-between '>
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
                        <div className='w-40 h-40 flex flex-row gap-3  '>
                            <a className='transition-transform duration-200 hover:-translate-y-1  ' href=""><img src={facebook} alt="" /></a>
                            <a className='transition-transform duration-200 hover:-translate-y-1  ' href="https://www.instagram.com/henna_by_komz/"><img src={insta} alt="" /></a>
                            <a className='transition-transform duration-200 hover:-translate-y-1  ' href=""><img src={linkdln} alt="" /></a>
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
    );
};

export default MehndiLandingPage;
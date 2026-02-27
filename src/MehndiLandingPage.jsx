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
        const phoneNumber = "916374276273";
        const text = `
    Name:${form.Name},
    Number:${form.Number},
    Mail:${form.Mail},
    Msg:${form.Msg}
    `
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank")
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const navigate = useNavigate();
    return (


        <div className="bg-white text-gray-800 font-serif ">
            {/* 1. TOP NAVBAR */}
            <header className="border-b border-gray-100">
                <div className="bg-pink-50 py-2 text-xs flex justify-between px-6 lg:px-20 text-gray-600">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1"><Phone size={12} /> +91 82488 97608</span>
                        <span className="flex items-center gap-1"><Mail size={12} /> henna_by_komz@mehndidesign.com</span>
                    </div>
                    <div className="flex w-25  gap-3 flex-row">
                        <a href="https://www.instagram.com/henna_by_komz/"><img src={insta1} alt="" /></a>
                        <a href=""><img src={facebook1} alt="" /></a>
                        <a href=""><img src={twitter1} alt="" /></a>
                    </div>
                </div>
                <nav className="flex justify-between items-center py-4 px-6 lg:px-20 bg-white ">
                    <div className="text-2xl font-bold text-pink-600 tracking-widest">HENNA_BY_KOMZ</div>
                    <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider font-medium ">
                        <a href=""><li className="text-pink-600 cursor-pointer ">Home</li></a>
                        <a className='scroll-smooth' href="#categories"><li className="hover:text-pink-600 cursor-pointer">Categories</li></a>
                        <a href="#aboutus"><li className="hover:text-pink-600 cursor-pointer">About</li></a>
                        <a href="#galary"><li className="hover:text-pink-600 cursor-pointer">Gallery</li></a>
                        <a href="#whyus"><li className="hover:text-pink-600 cursor-pointer">Why us</li></a>
                        <a href="#contact"><li className="hover:text-pink-600 cursor-pointer">Contact </li></a>
                    </ul>
                </nav>
            </header>

            {/* 2. HERO SECTION */}
            <section className="relative h-175 w-full">
                {/* Background Image with Pink Overlay */}
                <div className="absolute inset-0">
                    <img
                        src={handimg}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Pink overlay */}
                    <div className="absolute inset-0 bg-pink-300 opacity-40"></div>
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
                        <div className="h-64 overflow-hidden rounded-full shadow-lg">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyp2gKiPjF9XxzxW_ih5fOZyMbh58-P8TGA&s"
                                alt="Henna Body Art"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg hover:underline">Engagement</h3>

                        <button className="bg-pink-400 text-white px-4 py-1.5 rounded text-xs hover:bg-pink-500">
                            Read More
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="space-y-4 group">
                        <div className="h-64 overflow-hidden rounded-full shadow-lg">
                            <img
                                src="https://ajayhenna.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-23-at-13.54.34.jpeg"
                                alt="Dhamal Mehndi"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg hover:underline">Bridal Mehndi</h3>

                        <button className="bg-pink-400 text-white px-4 py-1.5 rounded text-xs hover:bg-pink-500">
                            Read More
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="space-y-4 group">
                        <div className="h-64 overflow-hidden rounded-full shadow-lg">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxzdSQmnD0_bQscs_2x-FboOqi0_EPBfzXQ&s"
                                alt="Bridal Mehndi"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg hover:underline">Baby Shower</h3>

                        <button className="bg-pink-400 text-white px-4 py-1.5 rounded text-xs hover:bg-pink-500">
                            Read More
                        </button>
                    </div>

                    {/* Card 4 */}
                    <div className="space-y-4 group">
                        <div className="h-64 overflow-hidden rounded-full shadow-lg">
                            <img
                                src="https://cdn0.weddingwire.in/vendor/8269/3_2/960/png/mehendi-artist-pooja-gada-designs-6-copy_15_268269-158392716442640.jpeg"
                                alt="Tattoo Mehndi"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg hover:underline">Puja Functions</h3>

                        <button className="bg-pink-400 text-white px-4 py-1.5 rounded text-xs hover:bg-pink-500">
                            Read More
                        </button>
                    </div>
                    <div className="space-y-4 group">
                        <div className="h-64 overflow-hidden rounded-full shadow-lg">
                            <img
                                src="https://cdn0.weddingwire.in/vendor/1933/3_2/960/png/mehndi-design-pooja-mehndi-art-mehndi-design-2_15_311933-159099302341210.jpeg"
                                alt="Tattoo Mehndi"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg hover:underline">Festivel Mehndi</h3>

                        <button className="bg-pink-400 text-white px-4 py-1.5 rounded text-xs hover:bg-pink-500">
                            Read More
                        </button>
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
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img className='w-200 h-120' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5E5ly7ILwDPLX5UCxS4dd6n6-090JXqOc1w&s    " alt="Artist working" />
                </div>
            </section>




            {/* Galary */}
            <section id='galary' className="pt-20 px-6 lg:px-20 text-center">
                <h2 className="text-3xl font-bold mb-10">Gallery</h2>
                <div className="grid grid-cols-1  md:grid-cols-3  gap-4">

                    <img className='w-100 mb-10 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl' src="https://instagram.fmaa2-1.fna.fbcdn.net/v/t51.82787-15/640411573_17927532804229082_3167508696653882969_n.webp?_nc_cat=101&ig_cache_key=MzgzOTY0Njk3MzE1OTUxOTUxOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=48dz5R2TRTQQ7kNvwFLk1wn&_nc_oc=AdmYhzmGxChUe6EfgaSHy7GIz08vPlsLg_S9S-SfsfW9qaZ2MITSmaO2d_hC5Oe4Brr3AOCKq_0ituqoV-vnJMxb&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmaa2-1.fna&_nc_gid=iCObt-9NH6hHKqiRm68Igg&oh=00_AftX1k7OuczkiWdUOnsN_lBgwgI3mcqQic4nRjHnCCOc_Q&oe=69A6EDC2" alt="" />
                    <img className='w-100 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl ' src="https://instagram.fmaa2-1.fna.fbcdn.net/v/t51.82787-15/639691878_17927223114229082_2602922408999399786_n.webp?_nc_cat=102&ig_cache_key=MzgzNzgzMzMyNDcxMTMxMzczOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=zFCcWgwHonoQ7kNvwHr008M&_nc_oc=AdkVbQoJ_Ecs3-RnOaYbpwUSxvalEwyjbRDiiDEsCrTPsKvjR2-hZMp_dDL_MI8moe5B4uGS7k6XDNsTadEEIVZ1&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmaa2-1.fna&_nc_gid=iCObt-9NH6hHKqiRm68Igg&oh=00_Afs6cEKAhh-hR9C9FECYuly-NafaGl_HqivRqVYbMuoFpQ&oe=69A6C2DB" alt="" />
                    <img className='w-100 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl' src="https://instagram.fmaa2-3.fna.fbcdn.net/v/t51.82787-15/573256501_17914410144229082_3403051223649122289_n.webp?_nc_cat=100&ig_cache_key=Mzc1NjIzNDIxMDY0MzUyNjc5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=VXRjyGYfpgwQ7kNvwFqSXS0&_nc_oc=AdkYAxdcUCoB5p6sAbzxRSWydA3RxBI-Ph_KmFB9u7Xa1XKOmFmw9tKTL4uZmJS4-qnKkg7HynyHOekjs4JRr4S6&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmaa2-3.fna&_nc_gid=iCObt-9NH6hHKqiRm68Igg&oh=00_Afttemfnc3jPgVLNsDaoIq46l6wGG000gLSzhI6OuNhhIg&oe=69A6E09F" alt="" />

                    <img className='w-100 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl' src="https://instagram.fmaa2-1.fna.fbcdn.net/v/t51.75761-15/482091628_17885387814229082_1167938445191371447_n.webp?_nc_cat=101&ig_cache_key=MzU3NzIzODkwOTk4MzkzMzg0Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=MZ23Z-kC6bQQ7kNvwEUZIMt&_nc_oc=Adnz11dnb6o7COoF_VFvBCE55KOKIu8wUlg7uczTUS816J35PlhA2rHfV6aLB_klqN-4ixdZtvVVSmtakUZBFvm1&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmaa2-1.fna&_nc_gid=iCObt-9NH6hHKqiRm68Igg&oh=00_AfsgnF5woigerUGAgSqYP2hcmPjjINqcgO1vhi97ZEQZuw&oe=69A6DE26" alt="" />
                    <img className='w-100 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl' src="https://instagram.fmaa2-4.fna.fbcdn.net/v/t51.75761-15/475445695_17881535757229082_7125963978320695579_n.webp?_nc_cat=110&ig_cache_key=MzU1NDgwODgyNjYxNDc5MDI5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ooSUgaNE1tkQ7kNvwFjTQ34&_nc_oc=Adm9uXM5mdkUfWgO4Z7LRWnvkbJ1f8yzsg6tDiPJdS79iCcoSCTEIuFgtU4eHHIOZVuQc8TwTn09Zi48xyyr30FO&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmaa2-4.fna&_nc_gid=yw1Ih3a2rmxYjBQ_ZpeExg&oh=00_Afu3ENMW3YNQ3qyAfxTbkqIZEqDGkmKgqfj3ndbnJPHoFw&oe=69A6E113" alt="" />
                    <img className='w-100 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl' src="https://instagram.fmaa2-2.fna.fbcdn.net/v/t51.82787-15/639988360_18565425637010647_3259227713264922150_n.webp?_nc_cat=108&ig_cache_key=MzQ1MDU0OTA4NDA5OTI3MDgwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjg2NHgxMDgwLnNkci5DMyJ9&_nc_ohc=WpJ2JPQYT_cQ7kNvwEK7sCv&_nc_oc=Adn6HKjXVRPB1d6sH6JGldINfRBw1ujdK9JEciURzzmkBe8TvGbJKeJYdD4C8IZ6A6m86BJTRnGJjLZqSW63uM_a&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmaa2-2.fna&_nc_gid=cZxKdCli07eC1xjG7YSV1A&oh=00_AfuZDsBk9h4hiMz5A0VfakXRkY1z3GtF2da4SH2ZwTFa6Q&oe=69A6C679" alt="" />

                </div>

                <button onClick={() => navigate("/gallery")} className='w-50 mt-5 h-15 rounded-2xl border border-pink-300 bg-white text-red-400  items-center hover:text-white hover:bg-red-400'>Load more...</button>
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
                                    patterns, most popular ones being the Arabic and Rajasthani
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
                                Palm Court Bldg M, 501/B, 5th Floor,
                                New Link Road, Beside Goregaon
                                Sports Complex, Malad West,
                                Mumbai, Maharashtra 400064
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
            <section className="py-20 px-6 lg:px-20">


                <div className="grid md:grid-cols-2 gap-20">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-pink-100 p-3 rounded-full text-pink-600"><MapPin size={24} /></div>
                            <div><h4 className="font-bold text-pink-600 uppercase text-xs">Address</h4><p>123 Mehndi Lane, Art District, Mumbai</p></div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-pink-100 p-3 rounded-full text-pink-600"><Phone size={24} /></div>
                            <div><h4 className="font-bold text-pink-600 uppercase text-xs">Call Us</h4><p>+91 82488 97608</p></div>
                        </div>
                    </div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input name='Name' onChange={handlechange} placeholder="Full Name" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-pink-400" />
                            <input name='Number' onChange={handlechange} placeholder="Phone number" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-pink-400" />
                            <input name='Mail' onChange={handlechange} placeholder="Email Address" className="w-160 p-3 border border-gray-200 rounded-lg focus:outline-pink-400" />
                        </div>
                        <textarea placeholder="Your Message" name='Msg' onChange={handlechange} rows="4" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-pink-400"></textarea>
                        <button onClick={WhatsApp} className="w-full bg-pink-500 text-white py-3 rounded-lg font-bold hover:bg-pink-600">Send Message</button>
                    </form>
                </div>
            </section>

            <section className="bg-gray-100 py-10  ">
                <div className='mx-40 flex justify-between'>
                    <div className='w-80 text-start items-center '>
                        <h2 className='font-bold mb-2 '>CONTACT</h2>
                        <p className='mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, magni similique. Dignissimos nesciunt quasi, assumenda libero obcaecati eos saepe animi.</p>
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
                        <div className='w-40 h-40 flex flex-row gap-3'>
                            <a href=""><img src={facebook} alt="" /></a>
                            <a href="https://www.instagram.com/henna_by_komz/"><img src={insta} alt="" /></a>
                            <a href=""><img src={linkdln} alt="" /></a>
                            <a href=""><img src={twitter} alt="" /></a>
                        </div>
                    </div>
                </div>


            </section>
            {/* FOOTER */}
            <footer className="bg-gray-200 py-10 text-center text-sm text-gray-500">

                <p>© 2026 Henna_By_Komz. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default MehndiLandingPage;
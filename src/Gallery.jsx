import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Play, List } from 'lucide-react';
import { useEffect } from 'react';
import homeBG from './assets/mehndi-bg.jpg';
import hopingBGmeBG from './assets/pinkBG.jpg';
import homePageImage from './assets/homePageImage.jpg';
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
import {useNavigate} from 'react-router-dom'
import handimg from './assets/handbgimg.png';

const Gallery = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const images = [
        "https://instagram.fmaa2-1.fna.fbcdn.net/v/t51.82787-15/640411573_17927532804229082_3167508696653882969_n.webp?_nc_cat=101&ig_cache_key=MzgzOTY0Njk3MzE1OTUxOTUxOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=48dz5R2TRTQQ7kNvwGUv25u&_nc_oc=AdkFQ-L7M6c73po7mLKEMw1y4LCUGn2eeHGPLTdyMHB290Qn8u_oYiiVc7c3XnTllqkAbRDIR261nGO9s4igtJ9-&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-1.fna&_nc_gid=TlyHK3dV5BNc3SC9til4kg&oh=00_Afsk6HtCr0ucI0ViiSvBNRzK8a4o3IzBLSc8OUiVjX-7xA&oe=69A72602",
        "https://instagram.fmaa2-1.fna.fbcdn.net/v/t51.82787-15/639691878_17927223114229082_2602922408999399786_n.webp?_nc_cat=102&ig_cache_key=MzgzNzgzMzMyNDcxMTMxMzczOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=zFCcWgwHonoQ7kNvwHNPYUa&_nc_oc=AdnEhqIpl6LRqoIdKyuHQD0VyKajYkTQ0YIEQzgKrSC7nZQ7Y426_uWRQfcqJiOu3MUcASbJBWnwsBMwPbRiJTdL&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-1.fna&_nc_gid=TlyHK3dV5BNc3SC9til4kg&oh=00_AfsPfutjwOfdEPF_TFgS3cTmXsfgeo9_whvIfFa0qwypNw&oe=69A6FB1B",
        "https://instagram.fmaa2-1.fna.fbcdn.net/v/t51.82787-15/639897046_17927018412229082_3173214449024260910_n.webp?_nc_cat=102&ig_cache_key=MzgzNjY5NDY2ODc2MDAxMDQ5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ySexqY9MbvkQ7kNvwF0OFvH&_nc_oc=AdlliCwx5vTTOnyzqGXH89LdPYFFui6585GiaAokswfIxvvCVPtf4QgBG-9b0n2uI60ibYmmqkKaCf8B-GaIfryr&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-1.fna&_nc_gid=TlyHK3dV5BNc3SC9til4kg&oh=00_AfuR27peBdhwWvg58n_4bs8QLf1xOirxsVZcezXtsHhg9w&oe=69A7266F",
        "https://instagram.fmaa2-3.fna.fbcdn.net/v/t51.82787-15/573256501_17914410144229082_3403051223649122289_n.webp?_nc_cat=100&ig_cache_key=Mzc1NjIzNDIxMDY0MzUyNjc5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=VXRjyGYfpgwQ7kNvwG3V9Yp&_nc_oc=Adk2Mq97rBZNgPfz4j16e7a4H8SnLm7dlbIxIHmU2IlBgPuC01vjw2PA1otmHOk-V6tLPNfSBgCIdEMavEL11v6-&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-3.fna&_nc_gid=TlyHK3dV5BNc3SC9til4kg&oh=00_AftSw17SLnLZy-yyytIxl-IYF0-9jPyIZVSjFQox1xYdVQ&oe=69A718DF",
        "https://instagram.fmaa2-1.fna.fbcdn.net/v/t51.75761-15/496469633_17893744668229082_6222021515359373282_n.webp?_nc_cat=106&ig_cache_key=MzYyNzk4OTY2MTA1MjE5NTc5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=QHjCmn-s8hkQ7kNvwF9UloC&_nc_oc=AdkGa483lmAgtqCL63LO-D9Y5kWEGgMC4WhdsAPJcKtHjVBwTKi-AiLX6oEXoLybuXJKJRVNNXO3Io4WI0O2T0MX&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-1.fna&_nc_gid=TlyHK3dV5BNc3SC9til4kg&oh=00_Afsud1X3kxGcvg2xu0EaIRjP4J16ZqPEY8LrnV12VNjTig&oe=69A70E87",
        "https://instagram.fmaa2-4.fna.fbcdn.net/v/t51.75761-15/489845255_17890037007229082_1701426187157289350_n.webp?_nc_cat=104&ig_cache_key=MzYwNDg1Njk0MTgyODg1NjY2OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=3WXl1vfCIMQQ7kNvwHqRgMx&_nc_oc=AdmWI3TmlmTVkgpsiVj7VM48PFvmlQeFKD34xSqVbgVaV7o68NsHFDbcUiP5VUcEz41xIDkz3OGhbUXCxr_XkoID&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-4.fna&_nc_gid=TlyHK3dV5BNc3SC9til4kg&oh=00_AfvuNDd3aHRZmvCZxUcVgKv-AA-WNWsXqIthDmCWEhioDQ&oe=69A721B2",
        "https://instagram.fmaa2-1.fna.fbcdn.net/v/t51.75761-15/482091628_17885387814229082_1167938445191371447_n.webp?_nc_cat=101&ig_cache_key=MzU3NzIzODkwOTk4MzkzMzg0Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=MZ23Z-kC6bQQ7kNvwHSCpeW&_nc_oc=AdkNDU8YbSjK9UisZfIzJy0E2pc3CylEoxceNNOJV35W_GonUOjO83RmlbPuC9zHAjATkj_E7P_jrEIjOvDygveS&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-1.fna&_nc_gid=TlyHK3dV5BNc3SC9til4kg&oh=00_AfunDCcL3mwmxR7ZUjJtTauzj3f8Ay50hqBcEfpWtup6eQ&oe=69A71666",
        "https://instagram.fmaa2-3.fna.fbcdn.net/v/t51.75761-15/481003126_17884635744229082_8435262848076490857_n.webp?_nc_cat=109&ig_cache_key=MzU3MzAxMzY5MzI5MjU4NTkxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=PkGAycdXdWoQ7kNvwElIm5O&_nc_oc=AdlBf-Zwg0Ctw4X12GVAXembtAp20Ur9x3VqLo78FJbtunLT1Hdjh2EMNXGcnk_RzuUpFR0YR39pxPQJAROLTcft&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-3.fna&_nc_gid=TlyHK3dV5BNc3SC9til4kg&oh=00_AfuFHoOBJ5Naf3yAS4VJPmmx-gqKld-KHrlFtjItXBkG5Q&oe=69A7066A",
        "https://instagram.fmaa2-3.fna.fbcdn.net/v/t51.75761-15/479494078_17883984048229082_6382674263798627679_n.webp?_nc_cat=103&ig_cache_key=MzU2OTI2MTc5Mzg1ODQ4OTY5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5OS5zZHIuQzMifQ%3D%3D&_nc_ohc=NSg2nNfdBtAQ7kNvwEzUhdA&_nc_oc=AdlkrrpBe_11Xnr01Vm5BWa56gAJVaYuQBv6Oa6XDyk3FfisqQeej8DNAMRwL7l3etTvWKeG-9CFaxYQTtOtLiYn&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-3.fna&_nc_gid=TlyHK3dV5BNc3SC9til4kg&oh=00_Afvzc58hB8y3lR5V7UD36B8gs5RbvF_8HZwlmg1NpeZVPQ&oe=69A714CF",
        "https://instagram.fmaa2-2.fna.fbcdn.net/v/t51.75761-15/476160725_17882337588229082_1871870576120231323_n.webp?_nc_cat=111&ig_cache_key=MzU1OTg1NjcyNjg3NzM2MzE4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=Npqjtuaf58oQ7kNvwGXEoFL&_nc_oc=AdmW-mcGWeHfdmzMM6IxRuvb43YBN1RKBfJDbLVSSHOiETNKduTOLHqwvixRmT_5uRZXN6qQzP2XMLYO1z10dvZe&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-2.fna&_nc_gid=vI5Q-7IzX_yI4-7ZTqfmAQ&oh=00_AftKAek10-5PTGG7Fxw9R2KA-fWb_Fa9AdpTcYNbX4ZBZg&oe=69A7389A",
        "https://instagram.fmaa2-4.fna.fbcdn.net/v/t51.75761-15/475445695_17881535757229082_7125963978320695579_n.webp?_nc_cat=110&ig_cache_key=MzU1NDgwODgyNjYxNDc5MDI5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ooSUgaNE1tkQ7kNvwF3-7_B&_nc_oc=AdlxpVf2FzxeLOZNrTddYl5DAyvCUdSuRkmct5FjJf6XRKPzt_8nUh6ObYCw7htKpN_0Xyj39NajNikG2apNGq1k&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-4.fna&_nc_gid=vI5Q-7IzX_yI4-7ZTqfmAQ&oh=00_AftZ6Ny2GMmjfzk_NOIzT3MUcVa0HxJQFIlTwx6ItOf6Mg&oe=69A75193",
        "https://instagram.fmaa2-3.fna.fbcdn.net/v/t51.29350-15/471598209_600004819453488_29234836705859861_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fmaa2-3.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QHJYs6SVMwaeVp8w9JNSaXmq7kwy8Vtf2_UiyfNQ2X9Su5vaKvp26aZcyXwm-rVhGMWm-hiM8WE4d_-5F693ohR&_nc_ohc=8xQrnxGgoqoQ7kNvwGSe3j0&_nc_gid=vI5Q-7IzX_yI4-7ZTqfmAQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzUzMDQ4ODY5NzA2ODY1MzA3Ng%3D%3D.3-ccb7-5&oh=00_Aft4cQCPtAqsXUi0U0amZ9W7-lytC_gZ9qxxmtpOKFRcow&oe=69A73C0C&_nc_sid=22de04",
        "https://instagram.fmaa2-1.fna.fbcdn.net/v/t51.29350-15/467768607_2580611728794314_2283398037001244353_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fmaa2-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QHJYs6SVMwaeVp8w9JNSaXmq7kwy8Vtf2_UiyfNQ2X9Su5vaKvp26aZcyXwm-rVhGMWm-hiM8WE4d_-5F693ohR&_nc_ohc=7BcmEVbfvh4Q7kNvwHVV6yx&_nc_gid=vI5Q-7IzX_yI4-7ZTqfmAQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzUwNTkxNTAxODE0NTg0OTU5MQ%3D%3D.3-ccb7-5&oh=00_AfuKYEXM-9cyrnhU9YuZaRIGaHqkUOSgVLcYrVThAUWKNw&oe=69A736CF&_nc_sid=22de04",
        "https://instagram.fmaa2-3.fna.fbcdn.net/v/t51.82787-15/628792782_18331773610175237_3600140531656401176_n.webp?_nc_cat=109&ig_cache_key=MzUwNTUyNTExNzM1NzE3NzY3Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjg2NHgxMDgwLnNkci5DMyJ9&_nc_ohc=NAuNRiLDAKcQ7kNvwH2DQ2O&_nc_oc=AdnUTq-ulbi2-5_vmYOcfYPWRVEJFDbkpzs2iT10OgjNTYuphch3GUxAuAGZCgqy6iHBSRnjwmYyX18i39IoOY3_&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-3.fna&_nc_gid=vI5Q-7IzX_yI4-7ZTqfmAQ&oh=00_AfsCJPPsYONvs2-18VLp3X8WcWypLLV43eGpZ3P4y2L_Iw&oe=69A75E94",
        "https://instagram.fmaa2-4.fna.fbcdn.net/v/t51.29350-15/467530459_1075177003916873_7585381638594379953_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwNzl4MTM1MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fmaa2-4.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QHJYs6SVMwaeVp8w9JNSaXmq7kwy8Vtf2_UiyfNQ2X9Su5vaKvp26aZcyXwm-rVhGMWm-hiM8WE4d_-5F693ohR&_nc_ohc=wsABxDjBwXYQ7kNvwFOHbOl&_nc_gid=vI5Q-7IzX_yI4-7ZTqfmAQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzUwNDAzMjYzMjc5NzY3NzI1MA%3D%3D.3-ccb7-5&oh=00_AfssgwejrNmfXjL3AMP4oCjRENGuL_Z97EI_AD6F-eM72w&oe=69A7342D&_nc_sid=22de04",
        "https://instagram.fmaa2-1.fna.fbcdn.net/v/t51.29350-15/461886338_565019172614761_4106669198992258350_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fmaa2-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QHJYs6SVMwaeVp8w9JNSaXmq7kwy8Vtf2_UiyfNQ2X9Su5vaKvp26aZcyXwm-rVhGMWm-hiM8WE4d_-5F693ohR&_nc_ohc=nKdAUYLT5EIQ7kNvwGVsiy6&_nc_gid=vI5Q-7IzX_yI4-7ZTqfmAQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQ3MTEzNzk2OTEyMDI1NjAxNw%3D%3D.3-ccb7-5&oh=00_AftFocx5m9yZ4f5elVbTJ6XA8nHmRr-dS77KD8yKjcnoqg&oe=69A72A5C&_nc_sid=22de04",
        "https://instagram.fmaa2-3.fna.fbcdn.net/v/t51.29350-15/461742656_1043976220748899_5401528457924424778_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzQ2ODk4NzgwMzU1ODg3NDUzOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=5J6PQOuLeysQ7kNvwFaHK3F&_nc_oc=Adms5KegrWAmCt4kyS8LxDEX3b6edeyW5amPR6THQ1pwi0Z-fdfA9MR8gn9-bR_aQfqrknsA41TvmAlfdikWcehH&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-3.fna&_nc_gid=vI5Q-7IzX_yI4-7ZTqfmAQ&oh=00_AfsTzi1ootyBHxFQEyTTIDH2mSQXIWQUR9hco84JwKxItQ&oe=69A758D5",
        "https://instagram.fmaa2-2.fna.fbcdn.net/v/t51.82787-15/639988360_18565425637010647_3259227713264922150_n.webp?_nc_cat=108&ig_cache_key=MzQ1MDU0OTA4NDA5OTI3MDgwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjg2NHgxMDgwLnNkci5DMyJ9&_nc_ohc=WpJ2JPQYT_cQ7kNvwGn49jS&_nc_oc=AdnUd9yK8Ii7ZWwtVDcgyuM77IgHzZ3dXLPWZGId7aNBe5HT7uMErC7U1dAY18u83TurnHc9MZqksvLyuXQYdblq&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-2.fna&_nc_gid=FqdSfxkTbbvMzIeV7-hOOQ&oh=00_AfvF1qcRhTIwwhSwjraGCr5mDN7UBwnB8ry6VdkVZZ5Q3w&oe=69A736F9",
        "https://instagram.fmaa2-4.fna.fbcdn.net/v/t51.29350-15/454681830_930667475765962_8782867884217293013_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTMxOC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fmaa2-4.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QEPuyuI6WwOFsL56-HT3WZe1NWShruhrVq_wkn83JSrcjwdG-STXlMesVzl0WlCAIyp_1-JtY-oQzbAm6-gRJcs&_nc_ohc=DKIY3lnQ_OAQ7kNvwFEuG2v&_nc_gid=FqdSfxkTbbvMzIeV7-hOOQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQzMTY4OTIwMTU3MjY5NTc2NA%3D%3D.3-ccb7-5&oh=00_Afu-Wop4FbCOANahFNjSsNq6_IeMvORX9V_g3tXD24WwoA&oe=69A72E42&_nc_sid=22de04",
        "https://instagram.fmaa2-4.fna.fbcdn.net/v/t51.82787-15/632628450_18330375793173297_8584943544551967892_n.webp?_nc_cat=104&ig_cache_key=MzQxNTQ5MDk1OTY1NTAyNjYwNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=EY9dXHnRF3kQ7kNvwGYaLER&_nc_oc=AdmcqhwrX2pSvLgJf72Mb2PSXJtQAUq2Ils0Zh8dxSL8n5y7bygrk-Laj03bEbJqfy4IulDxk6HuDPTPcEc_60kk&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-4.fna&_nc_gid=FqdSfxkTbbvMzIeV7-hOOQ&oh=00_Aftn0f9GFr8_WOUluIOhGrWYKC-1U46BcCDANdmB67-tng&oe=69A75DBE",
        "https://instagram.fmaa2-3.fna.fbcdn.net/v/t51.29350-15/445798755_7505035022944443_7609678053708707619_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjcyMHg3MjAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fmaa2-3.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QElTNCmN7LLUE99ZYvQ16GZWR9upznI3N8fNHnyPC4r5hEKyjwcbHcLrJwZ12daDn_yNUqjAMeMaxfcfGZfVbaS&_nc_ohc=rvj75S_lIT0Q7kNvwE09iBY&_nc_gid=26OWjBNU1MyrOoiI0YsuLQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzM3MjE2NzkxODY1MzA4Mjc0NQ%3D%3D.3-ccb7-5&oh=00_AfvGNbtITVvpu4qCdm_0I-AtaME5zqBpPtF5XAlWX29apg&oe=69A75D18&_nc_sid=22de04",
        "https://instagram.fmaa2-1.fna.fbcdn.net/v/t51.29350-15/445123556_1945112492614302_324957000478254289_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fmaa2-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QElTNCmN7LLUE99ZYvQ16GZWR9upznI3N8fNHnyPC4r5hEKyjwcbHcLrJwZ12daDn_yNUqjAMeMaxfcfGZfVbaS&_nc_ohc=26YyN0lyk9sQ7kNvwEM0tic&_nc_gid=26OWjBNU1MyrOoiI0YsuLQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzM3MTM4ODkzNDUzNzQ5NzM3Mg%3D%3D.3-ccb7-5&oh=00_AfsKO5pKgvyujGEIn3757ezp5w78WiuOXGn2PcKiAjkEXA&oe=69A75155&_nc_sid=22de04",
        "https://instagram.fmaa2-4.fna.fbcdn.net/v/t51.29350-15/436266068_430430902955572_1270095901717144588_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjcwMHg4NzYuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fmaa2-4.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QElTNCmN7LLUE99ZYvQ16GZWR9upznI3N8fNHnyPC4r5hEKyjwcbHcLrJwZ12daDn_yNUqjAMeMaxfcfGZfVbaS&_nc_ohc=ZGvTeQpx5BkQ7kNvwEk-N2a&_nc_gid=26OWjBNU1MyrOoiI0YsuLQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzM2NzA4NDA4MTkwNDQ1NzI3Mg%3D%3D.3-ccb7-5&oh=00_Afv-E5GcwCrt3kWaJ-etw63aJ0h5XwSZemtPgkP0gxOmDQ&oe=69A75602&_nc_sid=22de04",
        "https://instagram.fmaa2-4.fna.fbcdn.net/v/t51.82787-15/643097623_18559431466061825_8342077785182198017_n.webp?_nc_cat=104&ig_cache_key=MzM2NDg0NDk3NTk4MjI5MzEzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTMzOS5zZHIuQzMifQ%3D%3D&_nc_ohc=9aQPCANmmyUQ7kNvwFsqbe5&_nc_oc=AdlOfdD6k11DedW07XLd_uGiPWhQ3z1_B3ziE8B0r65a1ZNfJhurZfw-vE1ZdBwU-i1FZMqfe5KjC67lkfVIHvBE&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fmaa2-4.fna&_nc_gid=eTpAUX5SnItOGhk7hx2jpw&oh=00_AfuZ0OfQtZmgTa5Ihar5HNlJdRs_BrvHqJWvGFqH1GuNfg&oe=69A760AE"

    ]

    return (
        <div>
            <div className="bg-white text-gray-800 font-serif ">
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
                {/* Gallery */}
                <section className='ml-30 mr-30'>
                    <h1 className='mt-10 font-black text-center text-4xl my-20 underline'>Galleries</h1>
                    <div className='mt-10 grid grid-cols-1  md:grid-cols-3  gap-4'>
                        {images.map((img, index)=>(
                            <img 
                            key={index}
                            src={img}
                            
                            className='w-100 mb-10 h-80 mr-9 rounded-4xl border-4 border-pink-400 hover:shadow-2xl'
                            />

                        ))}

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
                        <div className=' flex flex-col'>
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
        </div>
    )
}
export default Gallery;
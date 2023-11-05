import Navbar from "../header/Navbar";
import logo from '../../assets/Kawser4.png'
import '../../css/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import { useEffect } from "react";

const Banner = () => {
    useEffect(()=>{
        AOS.init({duration:2500});
    },[])

    const [developer] = useTypewriter({
        words:['Mern Stack Developer','Mobile App Developer','Competetive Programmer'],
        loop:{},
        typeSpeed:200,
        deleteSpeed:100,
        delaySpeed:50,
    })
    return (
        <div>
            <div className="bg-gray-800 w-screen">
                <Navbar></Navbar>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 lg:gap-20 lg:ms-10 lg:me-10">
                    <div data-aos ="fade-right">
                        <h1 className="text-3xl lg:text-7xl text-white mt-20">Hi, I am</h1>
                        <h1 className="text-3xl lg:text-7xl name">Kawser Ahamed</h1>
                        {
                            (developer.length==0) ? <span className="lg:text-3xl">{'K'}</span> :<span className="text-white lg:text-3xl">{developer}</span>
                        }
                        <Cursor cursorStyle="|" cursorColor="#40B5F0"/>
                        <br />
                        <br />
                        <p className="text-stone-400 text-justify">I am a passionate <span className="font-bold">MERN</span> stack developer, skilled in creating robust and scalable web applications. With a strong foundation in mobile app development, I specialize in building elegant and efficient applications using <span className="font-bold">flutter</span>, a versatile framework for cross-platform mobile development.I am also an enthusiastic <span className="font-bold">competitive programmer</span>, where I thrive on solving complex algorithmic challenges and honing my problem-solving skills. My diverse skill set allows me to take projects from concept to completion, delivering high quality software solutions that meet and exceed expectations.</p>
                        <br />
                        <button className="btn text-white px-3 py-2 border rounded-lg">Contact Me</button>
                        <button className="btn-about ms-3 text-white px-3 py-2 border rounded-lg mb-5">About Me</button>
                    </div>
                    <div className="" data-aos="fade-left">
                        <img className="h-96 lg:ms-20" src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import { useEffect } from 'react';
import computer from '../../assets/computer.png';
import react from '../../assets/react.png';
import flutter from '../../assets/flutter.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Expertise = () => {
    useEffect(()=>{
        AOS.init({duration:2500});
    },[])
    return (
        <div className="expertise-bg w-screen">
            <h1 className="text-center text-3xl lg:text-5xl text-white font-serif py-10">My Expertise</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:ms-20 ms-4">
                <div className="h-80 w-80 lg:h-96 lg:w-80 flex flex-col gap-5 expertise-container" data-aos="fade-right">
                    <div className='flex gap-10 mt-3'>
                        <div>
                            <img className='h-20 w-24 lg:h-24 lg:w-32 ms-3' src={computer} alt="" />
                        </div>
                        <div>
                            <h1 className='text-white text-2xl lg:text-3xl me-3'>Software Development</h1>
                        </div>
                    </div>
                    <p className='text-white text-xl lg:text-2xl text-justify ms-4 me-4 font-serif'>Experienced in both functional and OOP: Dart, C++, Java & JavaScript.</p>
                </div>
                <div className="h-80 w-80 lg:h-96 lg:w-80 flex flex-col gap-5 expertise-container" data-aos="fade-up">
                    <div className='flex gap-10 mt-3'>
                        <div>
                            <img className='h-20 w-24 lg:h-20 lg:w-32 ms-3' src={react} alt="" />
                        </div>
                        <div>
                            <h1 className='text-white text-2xl lg:text-3xl me-3'>Web Development</h1>
                        </div>
                    </div>
                    <p className='text-white text-xl lg:text-2xl text-justify ms-4 me-4 font-serif'>Passionate about of development experience in HTML,HTML5, CSS, CSS3, JS, React frameworks and NodeJS and MongoDB.</p>
                </div>
                <div className="h-80 w-80 lg:h-96 lg:w-80 flex flex-col gap-5 expertise-container" data-aos="fade-left">
                    <div className='flex gap-10 mt-3'>
                        <div>
                            <img className='h-20 w-24 lg:h-20 lg:w-32 ms-3' src={flutter} alt="" />
                        </div>
                        <div>
                            <h1 className='text-white text-2xl lg:text-3xl me-3'>Mobile App Development</h1>
                        </div>
                    </div>
                    <p className='text-white text-xl lg:text-2xl text-justify ms-4 me-4 font-serif'>Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</p>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
};

export default Expertise;
import '../../css/style.css';
import { image} from '../fakedata/Fakedata';
import '../../css/style.css'
import AOS from 'aos';
import { useEffect } from 'react';

const ProgrammingSkills = () => {
    useEffect(()=>{
        AOS.init({duration:2500});
    },[])
    return (
        <div>
            <div className="h-full w-full bg-gray-800">
                <div className="flex flex-col justify-center items-center py-10">
                    <div className="h-32 w-1 stick"></div>
                    <h1 className="text-white text-3xl font-serif">Programming Skill</h1>
                </div>
                <div className='grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-5 ms-3 lg:ms-5'>
                    {
                        image.map((m,i)=>
                        <div key={m.url} data-aos={(i%2==0)?"fade-up":"fade-down"} className='container-img h-24 w-24 bg-gray-800 flex justify-center items-center'>
                           <img className='h-16 w-16' src={m.url} alt="" />
                        </div>)
                    }
                </div>
                {/* <div className="flex flex-col justify-center items-center py-10">
                    <h1 className="text-white text-3xl font-serif">Tools & Technology</h1>
                    <div className="h-1 w-80 stick-2 mt-2"></div>
                </div> 
                 <div className='grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-5 ms-3 lg:ms-5'>
                    {
                        image2.map((m,i)=>
                        <div key={m.url} data-aos={(i%2==0)?"fade-up":"fade-down"} className='container-img h-24 w-24 bg-gray-800 flex justify-center items-center'>
                           <img className='h-16 w-16' src={m.url} alt="" />
                        </div>)
                    }
                </div> */}
                <br />
                <br />
                <br />
            </div>
        </div>
    );
};

export default ProgrammingSkills;
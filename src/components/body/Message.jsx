import programmer from '../../assets/programmer.gif';
const Message = () => {
    return (
        <div className='w-full'>
            <h1 className="text-center name text-3xl lg:text-4xl mt-5">Send me a message!</h1>
            <div className='flex mx-auto my-auto w-72 lg:w-80'>
                 <h3 className="text-center text-stone-600 mb-10">Got a question or proposal, or just want to say hello? Go ahead.</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 justify-center items-center ms-5 me-5">
                <div className='w-96'>
                    <form  action="">
                        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                            <div className='flex flex-col'>
                                <label htmlFor="">Your Name</label>
                                <input className='w-72 lg:w-44' type="text" required placeholder="Enter your name"/>
                            </div>
                            <div className='flex flex-col lg-2 lg:mt-0'>
                                <label htmlFor="">Your Email</label>
                                <input  className='w-72 lg:w-80' type="email" required placeholder='Enter your email address'/>
                            </div>
                        </div>
                        <div className='flex flex-col mt-2'>
                            <label htmlFor="">Your message</label>
                            <input  className='w-72' type="text" required placeholder='What are you thinking about me'/>
                        </div>
                        <button className='mx-auto my-auto shoot px-5 py-1 mt-3'>Shoot {"  -->"}</button>
                    </form>
                </div>
                <div>
                    <img src={programmer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Message;
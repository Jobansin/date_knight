import React from 'react'

const Home = () => {
return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
            Where{" "}
            <span className='bg-gradient-to-r from-pink-300 to-blue-400 text-transparent bg-clip-text'> campus crushes </span>
            turn into {" "}
            <span className='bg-gradient-to-r from-pink-300 to-blue-400 text-transparent bg-clip-text'> real connections </span>
        </h2>
        <div className='relative flex flex-wrap justify-center md:justify-start mt-10 p-6 md:p-16'>
                <img                         
                    src="/src/assets/David.png" 
                    alt="Login Screen"
                    className="w-64 sm:w-72 lg:w-80 h-auto rounded-lg shadow-lg animate-slower-bounce m-12"/>
                <img                         
                    src="/src/assets/Joban.png" 
                    alt="Login Screen"
                    className="w-64 sm:w-72 lg:w-80 h-auto rounded-lg shadow-lg z-20 opacity-95 animate-slow-bounce m-12 md:absolute md:top-12 md:left-80 lg:right-96"/>
        </div>
    </div>
);
};

export default Home

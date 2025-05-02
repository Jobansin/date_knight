import David from '../assets/David.png';
import Joban from '../assets/Joban.png';
import FadeInWhenVisible from "./FadeInWhenVisible";
const Home = () => {
return (
    <div className='mt-20'>
        <FadeInWhenVisible delay={0.2}>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
            Where{" "}
            <span className='bg-gradient-to-r from-pink-300 to-blue-400 text-transparent bg-clip-text'> campus crushes </span>
            turn into {" "}
            <span className='bg-gradient-to-r from-pink-300 to-blue-400 text-transparent bg-clip-text'> real connections </span>
        </h2>
        </FadeInWhenVisible>
        <div className='relative flex flex-col lg:flex-row justify-center lg:justify-start mt-10 p-6 md:p-16'>
                <div className='relative w-full lg:w-1/2'>
                    <img
                        src={David}
                        alt="David's Profile"
                        className="w-64 sm:w-72 lg:w-80 h-auto rounded-lg shadow-lg animate-slower-bounce m-6"
                    />
                    <img
                        src={Joban}
                        alt="Joban's Profile"
                        className="w-64 sm:w-72 lg:w-80 h-auto rounded-lg shadow-lg z-20 opacity-95 animate-slow-bounce m-6 md:absolute md:top-12 md:left-80 lg:right-96"
                    />
                </div>
                <div className='w-full lg:w-1/2 text-left lg:pl-56 lg:pr-36 mt-6 lg:mt-0'>
                <FadeInWhenVisible delay={0.4}>
                <h3 className="pt-8 text-3xl font-bold text-white text-center">Why {" "}
                <span className='bg-gradient-to-r from-pink-300 to-blue-400 text-transparent bg-clip-text'> Date Knight</span>
                ?</h3>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.6}>
                <p className='pt-16 text-lg text-neutral-400 tracking-widest text-center'>
                        At Kinsubii, we believe that while college students are constantly navigating the pressures of internships, jobs, and coursework, meaningful connections often take a back seat.
                        That’s why we created Date Knight — a dating app designed exclusively for students who want something real.
                        We’ve experienced firsthand how isolating post-college life can be, and we wanted to build something that helps people form genuine relationships before that phase even begins.
                        Our goal is to craft a space where campus crushes can turn into lasting bonds — without the noise, pressure, or performative swiping. Just real people, making real connections.
                    </p>
                </FadeInWhenVisible>
                </div>
            </div>
        </div>
    );
};

export default Home

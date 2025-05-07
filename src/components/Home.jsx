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
                        src="/David.png"
                        alt="David's Profile"
                        className="w-64 sm:w-72 lg:w-80 h-auto rounded-lg shadow-lg animate-slower-bounce m-6"
                    />
                    <img
                        src="/Joban.png"
                        alt="Joban's Profile"
                        className="w-64 sm:w-72 lg:w-80 h-auto rounded-lg shadow-lg z-20 opacity-95 animate-slow-bounce m-6 md:absolute md:top-12 md:left-80 lg:right-96"
                    />
                </div>
                <div className='w-full lg:w-1/2 text-left lg:pl-56 lg:pr-36 mt-6 lg:mt-0'>
                <FadeInWhenVisible delay={0.4}>
                <h3 className="pt-8 text-4xl font-bold text-white text-center">Why {" "}
                <span className='bg-gradient-to-r from-pink-300 to-blue-400 text-transparent bg-clip-text'> Date Knight</span>
                ?</h3>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.6}>
                <p className='pt-16 text-xl text-neutral-400 tracking-widest text-center'>
                At Kinsubii, we believe that while college students juggle internships, part‑time jobs, extracurriculars, and demanding coursework, genuine connections often get sidelined—so we built Date Knight, an exclusive .edu‑only app that goes beyond surface‑level swiping. By verifying student emails and matching you based on shared interests, class schedules, and campus involvement, Date Knight creates a safe space for real conversation. Our intuitive icebreaker prompts and curated event suggestions spark genuine interactions, while built‑in privacy controls and real‑time matchmaking let you focus on building lasting bonds. We know how isolating late‑night study sessions can be, so we’ve designed a platform where campus crushes evolve into meaningful relationships—no noise, no pressure, just authentic connections on your own terms.
                </p>
                </FadeInWhenVisible>
                </div>
            </div>
        </div>
    );
};

export default Home

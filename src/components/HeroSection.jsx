import FadeInWhenVisible from "./FadeInWhenVisible";
const HeroSection = () => {
    return(
        <section id="hero" className="w-full sm:h-screen bg-black text-white flex items-center justify-center relative px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl pt-16 sm:pt-36 md:pt-0 lg:pt-0">
                <div className="text-center lg:text-left max-w-xl">
                    <FadeInWhenVisible delay={0.4}>
                    <h1 className="text-5xl xs:text-4xl sm:text-6xl md:text-8xl lg:text-8xl text-center track-wide">
                        <span className="bg-gradient-to-r from-pink-300 to-blue-400 text-transparent bg-clip-text">Date Knight</span>
                    </h1>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.9}>
                    <p className="mt-10 sm:text-sm md:text-lg lg:text-lg text-center text-neutral-400 max-w-4xl">
                        You look lonely, we can fix that.
                    </p>
                    </FadeInWhenVisible>
                </div>
                <div className="mt-10 lg:mt-0">
                    <img
                        src="/home.png"
                        alt="Login Screen"
                        className="w-72 xs:w-52 sm:w-60 md:w-80 lg:w-[400px] max-w-[400px] h-auto rounded-lg shadow-lg animate-slower-bounce"
                    />
                </div>
            </div>
            <div className="absolute bottom-12 text-pink-300 animate-bounce text-4xl w-full text-center hidden md:block">
                ↓
            </div>
    </section>
    );
};

export default HeroSection;

import FadeInWhenVisible from "./FadeInWhenVisible";
const HeroSection = () => {
    return(
        <section id="hero" className="w-full h-screen bg-black text-white flex items-center justify-center relative overflow-hidden px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
                <div className="text-center lg:text-left max-w-xl">
                    <FadeInWhenVisible delay={0.4}>
                    <h1 className="text-8xl sm:text-8xl lg:text-8xl text-center track-wide">
                        <span className="bg-gradient-to-r from-pink-300 to-blue-400 text-transparent bg-clip-text">Date Knight</span>
                    </h1>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.9}>
                    <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
                        You look lonely, we can fix that.
                    </p>
                    </FadeInWhenVisible>
                </div>
                <div className="mt-10 lg:mt-0">
                    <img
                        src="/src/assets/home.png" 
                        alt="Login Screen"
                        className="w-72 sm:w-80 lg:w-[400px] max-w-[400px] h-auto rounded-lg shadow-lg animate-slower-bounce"
                    />
                </div>
            </div>
            <div className="absolute bottom-12 text-pink-300 animate-bounce text-4xl">
            ↓
            </div>
    </section>
    );
};

export default HeroSection;;

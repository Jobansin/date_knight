const HeroSection = () => {
    return(
        <section className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white">
            <h1 className="text-8xl sm:text-8xl lg:text-8xl text-center track-wide">
                <span className="bg-gradient-to-r from-pink-300 to-blue-400 text-transparent bg-clip-text">Date Knight</span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                You look lonely, I can fix that.
            </p>
            <div className="absolute bottom-6 text-pink-300 animate-bounce text-4xl">
            ↓
            </div>
    </section>
    )
};

export default HeroSection;

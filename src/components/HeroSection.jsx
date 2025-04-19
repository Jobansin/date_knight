function HeroSection() {
    const title= "Date\u00A0\u00A0Knight"
    return(
        <section className="min-h-screen 
                    bg-gradient-to-br 
                    from-[#0e0e1a]
                    via-[#161627]
                    via-[#1a1a2e]
                    via-[#202040]
                    via-[#242448]
                    to-[#2c2c54] 
                    bg-[length:600%_600%] 
                    bg-[position:0%_0%] 
                    animate-gradient-flow 
                    flex flex-col items-center justify-center 
                    text-white font-poppins text-center">
            <h1 className="relative z-10 text-9xl tracking-wide font-extrabold uppercase tracking-wide">
                {title}
            </h1>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
        </section>
    );
}
export default HeroSection;
import FadeInWhenVisible from "./FadeInWhenVisible";
    const features = [
    {
        title: "💘 Smart Matching",
        description: "We help you find someone who gets you"
    },
    {
        title: "🛡️ Verified Users",
        description: "Every profile is real NO catfishing here"
    },
    {
        title: "✨ Magic Vibes",
        description: "Clean design + chill UI to keep things simple"
    },
    {
        title: "💬 Read Receipts",
        description: "See when your messages are seen (or ignored 😢)"
    },
    {
        title: "📍 Nearby Knights",
        description: "See who's nearby ready to quest (or grab coffee)"
    },
    {
        title: "🎀 Profile Themes",
        description: "Customize your profile with fun colors and styles"
    }
    ];

const FeaturesSection = () => {
return (
    <div className="relative mt-20 min-h-[800px]">
        <div className="text-center">
            <FadeInWhenVisible delay={0.2}>
            <span className="bg-neutral-900 text-pink-300 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                feature
            </span>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                Find your perfect
                <span className="bg-gradient-to-r from-pink-300 to-blue-400 text-transparent bg-clip-text">
                {" "}date (to)knight
                </span>
            </h2>
            </FadeInWhenVisible>
        </div>
        <div className="flex flex-wrap mt-28 lg:mt-40">
            {features.map((feature, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 text-center">
                <div className="flex justify-center items-center gap-3">
                    <FadeInWhenVisible delay={0.6}>
                    <h3 className="mt-1 mb-6 text-2xl font-semibold">{feature.title}</h3>
                    </FadeInWhenVisible>
                </div>
                    <FadeInWhenVisible delay={0.9}>
                    <p className="text-lg p-2 mt-5 mb-20 text-neutral-400">{feature.description}</p>
                    </FadeInWhenVisible>
                </div>
            ))}
        </div>
    </div>
)
};

export default FeaturesSection;

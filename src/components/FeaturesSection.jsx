    const features = [
    {
        title: "💘 Smart Matching",
        description: "We help you find someone who gets you."
    },
    {
        title: "🛡️ Verified Users",
        description: "Every profile is real — no catfishing here."
    },
    {
        title: "✨Magic Vibes",
        description: "Clean design + chill UI to keep things simple."
    }
    ];

const FeaturesSection = () => {
return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-pink-300 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                feature
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                Find your perfect
                <span className="bg-gradient-to-r from-pink-300 to-blue-400 text-transparent bg-clip-text">
                {" "}date (to)knight
                </span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 text-center">
                <div className="flex justify-center items-center gap-3">
                    <h3 className="mt-1 mb-6 text-xl font-semibold">{feature.title}</h3>
                </div>

                    <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                </div>
            ))}
        </div>
    </div>
)
};

export default FeaturesSection;

import { useState, useEffect } from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";
const HowItWorks = () => {
    const [status, setStatus] = useState("idle");
    useEffect(() => {
        if (status === "success" || status === "error") {
            const timeout = setTimeout(() => {
                setStatus("idle");
                }, 5000); // clear after 5 seconds

                return () => clearTimeout(timeout); // cleanup if component unmounts
            }
        }, [status]);      
        return (
        <section id="how-it-works" className="my-24 flex flex-col items-center px-6">
            <FadeInWhenVisible delay={0.6}>
            <h3 className="text-3xl md:text-4xl font-semibold text-center mb-20">
            How  
            <span className='bg-gradient-to-r from-pink-300 to-blue-400 text-transparent bg-clip-text'> Date Knight </span> 
            Works
            </h3>
            </FadeInWhenVisible>
    
            {/* 3-step grid */}
            <div className="grid gap-10 md:grid-cols-3 w-full max-w-5xl">
            {[
                {
                num: "1",
                title: "Join with your .edu",
                copy: "We keep the community 100% student-only. Sign up using any verified campus email."
                },
                {
                num: "2",
                title: "Set your vibe",
                copy: "Add photos, prompts, and interests—no endless questionnaires, just be you."
                },
                {
                num: "3",
                title: "Match & meet IRL",
                copy: "Swipe, chat, and make plans around campus. Real connections, zero pressure."
                }
            ].map(({ num, title, copy }) => (
                <div key={num} className="flex flex-col items-center text-center">
                <FadeInWhenVisible delay={0.7}>
                <span className="text-pink-300 font-black text-5xl mb-4">{num}</span>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.8}>
                <h4 className="font-semibold text-xl mb-2">{title}</h4>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.9}>
                <p className="text-neutral-400 leading-relaxed">{copy}</p>
                </FadeInWhenVisible>
                </div>
            ))}
            </div>
    
            {/* early-access form */}
            <form
            onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.elements.email.value.trim();
            
                if (!email.endsWith(".edu")) {
                alert("Please use a .edu email address 😾");
                return;
                }
            
                setStatus("loading");
            
                fetch("https://kzuc6r3vv2.execute-api.us-east-1.amazonaws.com/prod/join", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
                })
                .then(async (res) => {
                    const text = await res.text();
                    if (res.ok) {
                    console.log("✅ Success:", text);
                    setStatus("success");
                    e.target.reset();
                    } else {
                    console.error("❌ Backend error:", text);
                    setStatus("error");
                    }
                })
                .catch((err) => {
                    console.error("❌ Network error:", err);
                    setStatus("error");
                });
            }}
            className="mt-16 w-full max-w-xl flex flex-col sm:flex-row gap-4"
            >
            <input
                type="email"
                name="email"
                required
                placeholder="Enter your .edu email"
                className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-lg bg-pink-300 hover:bg-gradient-to-r from-pink-300 to-blue-400 transition text-white font-semibold shrink-0 disabled:opacity-50"
            >
                Get Early Access
            </button>
            </form>
            
            {status === "success" && (
            <p className="text-green-400 mt-2 text-sm">🎉You’re on the list!</p>
            )}
            {status === "error" && (
            <p className="text-red-400 mt-2 text-sm">❌Something went wrong. Try again!</p>
            )}
            <p className="text-sm text-neutral-500 mt-3">
            Join numerous students already on the wait-list!
            </p>
        </section>
        );
    };
    
    export default HowItWorks;
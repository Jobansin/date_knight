import { FaLinkedin, FaTiktok } from "react-icons/fa";

    const Footer = () => {
        return(
            <footer className="mt-20 border-t py-10 border-neutral-700">
                <div className="text-md mb-4 text-center text-neutral-400">
                    Copyright © 2025 • contact us at hello@Kinsubii.com
                </div>
        <div className="flex justify-center items-center space-x-6 text-neutral-400">
            <a
            href="https://www.linkedin.com/company/kinsubii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition"
            >
            <FaLinkedin className="w-5 h-5 inline-block mr-1" />
            LinkedIn
            </a>
            <a
            href="https://www.tiktok.com/@kinsubii.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            >
            <FaTiktok className="w-5 h-5 inline-block mr-1" />
            TikTok
            </a>
        </div>
        </footer>
        );
    };

export default Footer;

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800">
            <div className="container px-4 mx-auto flex justify-between items-center text-sm">
                
                    <div className="flex items-center flex-shrink-0">
                        <span className="text-xl tracking-tight font-poppins">
                            KINSUB
                            <span className="text-pink-300">I</span>
                            <span className="text-blue-400">I</span>
                        </span>
                    </div>
                    <ul className="flex items-center space-x-6">
                        <a href="#how-it-works" className="py-2 px-4 rounded-md bg-gradient-to-r from-pink-300 to-blue-400 text-white font-semibold hover:brightness-110 transition">
                            SIGN UP 💌 
                        </a>
                    </ul>

            </div>
        </nav>
    );
};
export default Navbar

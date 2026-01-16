

export default function NavBar() {

    return (
        <nav className="hidden md:flex fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-8 w-full">
                <div className="font-fraunces text-2xl font-bold text-[28px]"><span style={{ color: "#EC4C4E" }}>Seang</span> Darong</div>
                <div className="flex gap-8 text-black text-base font-medium">
                    <a href="#/hero" className="hover:text-[#ec4c4e] transition-colors font-inter text-[18px]">Home</a>
                    <a href="#/about" className="hover:text-[#ec4c4e] transition-colors font-inter text-[18px]">About</a>
                    <a href="#/projects" className="hover:text-[#ec4c4e] transition-colors font-inter text-[18px]">Projects</a>
                    <a href="#/contact" className="hover:text-[#ec4c4e] transition-colors font-inter text-[18px]">Contact</a>
                </div>

                
            </div>
        </nav>
    )
}
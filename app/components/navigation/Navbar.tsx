'use client';

import Logo from "./Logo";

const Navbar = () => {
    return ( 
        <div className="border-b-[1px] p-3 md:p-5 flex flex-row items-center justify-between">
            <Logo />
            <div className="hidden flex-row md:flex gap-4 relative font-semibold text-neutral-700 right-[10vw] lg:gap-6">
                <h6>Home</h6>
                <h6>Home</h6>
                <h6>Home</h6>
            </div>
            <div className="flex flex-row items-center gap-2">
                <div className="flex outline-1 cursor-pointer border-[1px] border-purple-700 px-4 py-[4px] rounded-lg font-semibold text-[14px] hover:bg-purple-700 hover:text-white transition delay-100">Login</div>
                <div className="flex outline-1 cursor-pointer bg-purple-600 text-white border-[1px] px-4 py-[4px] rounded-lg font-semibold text-[14px] hover:border-purple-700 hover:text-black hover:bg-white transition delay-100">Sign up</div>
            </div>
        </div>
     );
}
 
export default Navbar;
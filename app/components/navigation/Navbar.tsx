'use client';

import Logo from "./Logo";

const Navbar = () => {
    return ( 
        <div className="border-b-[1px] p-3 md:p-5 flex flex-row items-center justify-between">
            <Logo />
        </div>
     );
}
 
export default Navbar;
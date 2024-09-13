import React from "react";
import { Link } from "react-router-dom";
import { RiPhoneFindFill } from "react-icons/ri";


const Logo = () => {
    return (
                <Link to="/" className="text-2xl font-bold text-[#5956e9] flex items-center gap-2">
                <RiPhoneFindFill className="inline-block"/>TalentConnect
                </Link>

    );
};



export default Logo;

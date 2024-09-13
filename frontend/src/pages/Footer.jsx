import React from "react";
import { Link } from "react-router-dom";
import { RiPhoneFindFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>

      

<footer class="bg-white rounded-lg shadow dark:bg-[#5956e9] m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Link to="/" className="text-2xl font-bold text-[#fff] flex items-center gap-2">
                <RiPhoneFindFill className="inline-block"/>TalentConnect
                </Link>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-white-700 lg:my-8" />
        <span class="block text-sm text-white sm:text-center dark:text-white">© 2024 <a href="#" class="hover:underline">TalentConnect™</a>. All Rights Reserved.</span>
      
    </div>

</footer>


    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};

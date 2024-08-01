import React from "react";
import { useThemeContext } from "../../hooks/themeContext/Context";

const Navbar = () => {

const {appBG,fontPrimary,switchToDark, switchToLight} = useThemeContext();

  return (
    <nav className={`p-4 border-b-[1px] border-black/20`} style={{backgroundColor:appBG}}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl" style={{color:fontPrimary}}>
          <a to="/">My App</a>
        </div>

        <div className="flex gap-3">

          <div onClick={()=>switchToDark()} className="h-[2rem] w-[2rem] flex flex-col rounded-full overflow-hidden">
            <div className="h-[50%] w-full bg-gray-500"></div>
            <div className="h-[50%] w-full bg-black"></div>
          </div>

          <div onClick={()=>switchToLight()} className="h-[2rem] w-[2rem] flex flex-col rounded-full overflow-hidden">
            <div className="h-[50%] w-full bg-gray-300"></div>
            <div className="h-[50%] w-full bg-white"></div>
          </div>

          <div className="h-[2rem] w-[2rem] flex flex-col rounded-full overflow-hidden">
            <div className="h-[50%] w-full bg-blue-500"></div>
            <div className="h-[50%] w-full bg-green-500"></div>
          </div>
          <div className="h-[2rem] w-[2rem] flex flex-col rounded-full overflow-hidden">
            <div className="h-[50%] w-full bg-blue-500"></div>
            <div className="h-[50%] w-full bg-green-500"></div>
          </div>
        </div>

        <ul className="flex space-x-4 max-[600px]:hidden">
          <li>
            <a to="/" style={{color:fontPrimary}}>
              Home
            </a>
          </li>
          <li>
            <a to="/about" style={{color:fontPrimary}}>
              About
            </a>
          </li>
          <li>
            <a to="/services" style={{color:fontPrimary}}>
              Services
            </a>
          </li>
          <li>
            <a to="/contact" style={{color:fontPrimary}}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

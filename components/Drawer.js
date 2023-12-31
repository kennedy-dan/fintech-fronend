import { motion } from "framer-motion";
import React, { useEffect } from "react";

import { AiOutlineClose } from "react-icons/ai";
export default function Drawer({ children, isOpen, setIsOpen }) {
  console.log(isOpen);
  return (
    <div>
      <motion.div
        initial={{ display: "none" }}
        transition={{
          duration: 0.2,
          type: "tween",
        }}
        // initial={{ display:'hidden' }}
        animate={{
          translateX: isOpen ? "-0%" : "-100%",
          display: "",
          // overflow: 'hidden'
        }}
        className="bg-blue-900 z-10 h-screen cursor-pointer w-60 text-white overflow-x-hidden text-[12px] px-4 py-5 left-[0] fixed lg:hidden   addcart items-center"
      >
        <div className="">
          {children}
        </div>
      </motion.div>
      <section
        className=" w-screen bg-red-800 h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </div>
  );
}
{
  /* <div
className={
  " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
  (isOpen
    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
    : " transition-all delay-500 opacity-0 translate-x-full ")
}
>
<div
  className={
    " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
    (isOpen ? " translate-x-32 " : " translate-x-full ")
  }
>
  <div className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
    <header className="p-4 font-bold text-lg">Nerrido</header>
    {children}
  </div>
</div>
<section
  className=" w-screen h-full cursor-pointer "
  onClick={() => {
    setIsOpen(false);
  }}
></section>
</div> */
}

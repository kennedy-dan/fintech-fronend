import Link from "next/link";
import React from "react";
import { BiHomeAlt, BiTransfer } from "react-icons/bi";
import { BsCurrencyDollar, BsPerson, BsWifi } from "react-icons/bs";

import {
  AiOutlineThunderbolt,
  AiOutlineTransaction,
  AiOutlineMenu,
} from "react-icons/ai";

const Footer = ({isOpen, setIsOpen}) => {
  

  return (
    <div className="text-white sidebar block md:hidden">
      <div className="flex px-3 justify-between bg-gray-950 py-3">
        <Link href="">
          <button>
            <BiHomeAlt className="w-6 h-6" />
          </button>
        </Link>
        <Link href="">
          <button>
            <BiTransfer className="w-6 h-6" />
          </button>
        </Link>

        <Link href="">
          <button>
            <BsPerson className="w-6 h-6" />
          </button>
        </Link>

        <Link href="">
          <button>
            <AiOutlineTransaction className="w-6 h-6" />
          </button>
        </Link>
        <Link href="">
          <button>
            <BsCurrencyDollar className="w-6 h-6" />
          </button>
        </Link>
          <button onClick={() => setIsOpen(true)}>
            <AiOutlineMenu className="w-6 h-6" />
          </button>
        
      </div>
    </div>
  );
};

export default Footer;

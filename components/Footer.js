import Link from "next/link";
import React from "react";
import { BiHomeAlt, BiTransfer } from "react-icons/bi";
import { BsCurrencyDollar, BsPerson, BsWifi } from "react-icons/bs";

import {
  AiOutlineThunderbolt,
  AiOutlineTransaction,
  AiOutlineMenu,
} from "react-icons/ai";

const Footer = ({ isOpen, setIsOpen }) => {
  return (
    <div className="text-white top-[60px] w-full sidebar block md:hidde">
      <div className="flex h-full items-center px-3 justify-between bg-gray-950 py-3">
        <Link href="">
          <button>
            <BiHomeAlt className="w-6 h-6" />
          </button>
        </Link>
        <Link href="/transfer">
          <button>
            <BiTransfer className="w-6 h-6" />
          </button>
        </Link>

        <Link href="/profile">
          <button>
            <BsPerson className="w-6 h-6" />
          </button>
        </Link>

        <Link href="/transactions">
          <button>
            <AiOutlineTransaction className="w-6 h-6" />
          </button>
        </Link>
        <Link href="/deposit">
          <button>
            <BsCurrencyDollar className="w-6 h-6" />
          </button>
        </Link>
        {/* <Link href=''> */}
        <div>
          <button onClick={() => setIsOpen(true)}>
            <AiOutlineMenu className="w-6 h-6" />
          </button>
        {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

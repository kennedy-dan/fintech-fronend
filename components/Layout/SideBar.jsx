import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsCurrencyDollar, BsPhone, BsWifi } from "react-icons/bs";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { AiOutlineThunderbolt, AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineSecurity, MdOutlineDeveloperMode, MdSignalCellularConnectedNoInternet4Bar } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="border-r-[0.1px] pt-10 border-[#07152D] h-s px-14">
      <Link href="/dashboard">
        <div className="flex text-[#4287f5] font-extralight text-sm">
          <button className="pr-2">
            <BiHomeAlt />
          </button>
          <p>Dashboard</p>
        </div>
      </Link>
      <Link href="/deposit">
        <div className="flex text-[#4287f5] font-extralight text-sm pt-10">
          <button className="pr-2">
            <BsCurrencyDollar />
          </button>
          <p>Wallet Deposit</p>
        </div>
      </Link>
      <Link href="/buy-airtime">
        <div className="flex text-[#4287f5] font-extralight text-sm pt-10">
          <button className="pr-2">
            <BsPhone />
          </button>
          <p>Buy Airtime</p>
        </div>
      </Link>
      <Link href="/buy-data">
        <div className="flex text-[#4287f5] font-extralight text-sm pt-10">
          <button className="pr-2">
            <BsWifi />
          </button>
          <p>Buy Data</p>
        </div>
      </Link>
      <Link href="/buy-cable">
        <div className="flex text-[#4287f5] font-extralight text-sm pt-10">
          <button className="pr-2">
            <PiTelevisionSimpleBold />
          </button>
          <p>Cable Tv</p>
        </div>
      </Link>
      <Link href="/buy-electricity">
        <div className="flex text-[#4287f5] font-extralight text-sm pt-10">
          <button className="pr-2">
            <AiOutlineThunderbolt />
          </button>
          <p>Electricity</p>
        </div>
      </Link>
      <Link href="/buy-internet">
        <div className="flex text-[#4287f5] font-extralight text-sm pt-10">
          <button className="pr-2">
            <MdSignalCellularConnectedNoInternet4Bar />
          </button>
          <p>Electricity</p>
        </div>
      </Link>
      <div className="flex text-[#4287f5] text-sm font-extralight pt-10">
        <button className="pr-2">
          <AiOutlineTransaction />
        </button>
        <p>Transactions</p>
      </div>
      <div className="flex text-[#4287f5] font-extralight text-sm pt-10">
        <button className="pr-2">
          <MdOutlineSecurity />
        </button>
        <p>Security</p>
      </div>
      <div className="flex text-[#4287f5] font-extralight text-sm pt-10">
        <button className="pr-2">
          <MdOutlineDeveloperMode />
        </button>
        <p>Developer</p>
      </div>
      <div className="flex text-[#4287f5] font-extralight text-sm pt-10">
        <button className="pr-2">
          <FiLogOut />
        </button>
        <p>Log Out</p>
      </div>
      <div className="flex text-[#4287f5] font-extralight text-sm pt-10">
        <button className="pr-2">
          <MdOutlineDeveloperMode />
        </button>
        <p>Developer</p>
      </div>
    </div>
  );
};

export default SideBar;

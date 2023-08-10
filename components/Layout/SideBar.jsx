import React,{useEffect} from "react";
import { BiHomeAlt, BiTransfer } from "react-icons/bi";
import { BsCurrencyDollar, BsPhone, BsWifi, BsPerson } from "react-icons/bs";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import {
  AiOutlineThunderbolt,
  AiOutlineTransaction,
  AiOutlineMenu,
} from "react-icons/ai";
import {
  MdOutlineSecurity,
  MdOutlineDeveloperMode,
  MdSignalCellularConnectedNoInternet4Bar,
} from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

import Link from "next/link";
import { logOutCustomer } from "@/store/slice/authSlice";
import { useDispatch } from "react-redux";
import Drawer from "../Drawer";

const SideBar = ({isOpen, setIsOpen}) => {
  const dispatch = useDispatch();
  // const [isOpen, setIsOpen] = React.useState(false);

  const logOut = () => {
    dispatch(logOutCustomer());
  };

  const NavContent = (
    <>
       <Link href="/dashboard">
          <div className="flex text-[#4287f5] font-extralight text-sm cursor-pointer">
            <button className="pr-2">
              <BiHomeAlt />
            </button>
            <p>Dashboard</p>
          </div>
        </Link>
        <Link href="/transfer">
          <div className="flex text-[#4287f5] font-extralight text-sm pt-10 cursor-pointer">
            <button className="pr-2">
              <BiTransfer />
            </button>
            <p>Transfer</p>
          </div>
        </Link>
        <Link href="/deposit">
          <div className="flex text-[#4287f5] font-extralight text-sm pt-10 cursor-pointer">
            <button className="pr-2">
              <BsCurrencyDollar />
            </button>
            <p>Wallet Deposit</p>
          </div>
        </Link>
        <Link href="/buy-airtime">
          <div className="flex text-[#4287f5] font-extralight text-sm pt-10 cursor-pointer">
            <button className="pr-2">
              <BsPhone />
            </button>
            <p>Buy Airtime</p>
          </div>
        </Link>
        <Link href="/buy-data">
          <div className="flex text-[#4287f5] font-extralight text-sm pt-10 cursor-pointer">
            <button className="pr-2">
              <BsWifi />
            </button>
            <p>Buy Data</p>
          </div>
        </Link>
        <Link href="/buy-cable">
          <div className="flex text-[#4287f5] font-extralight text-sm pt-10 cursor-pointer">
            <button className="pr-2">
              <PiTelevisionSimpleBold />
            </button>
            <p>Cable Tv</p>
          </div>
        </Link>
        <Link href="/buy-electricity">
          <div className="flex text-[#4287f5] font-extralight text-sm pt-10 cursor-pointer">
            <button className="pr-2">
              <AiOutlineThunderbolt />
            </button>
            <p>Electricity</p>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex text-[#4287f5] font-extralight text-sm pt-10 cursor-pointer">
            <button className="pr-2">
              <BsPerson />
            </button>
            <p>Profile</p>
          </div>
        </Link>
        <Link href="/transactions">

        <div className="flex text-[#4287f5] text-sm font-extralight pt-10 cursor-pointer">
          <button className="pr-2">
            <AiOutlineTransaction />
          </button>
          <p>Transactions</p>
        </div>
        </Link>

        <div className="flex text-[#4287f5] font-extralight text-sm pt-10 cursor-pointer">
          <button className="pr-2">
            <MdOutlineDeveloperMode />
          </button>
          <p>Developer</p>
        </div>
        <div
          className="flex text-[#4287f5] font-extralight text-sm pt-10"
          onClick={logOut}
        >
          <button className="pr-2">
            <FiLogOut />
          </button>
          <p className="cursor-pointer">Log Out</p>
        </div>
    </>
  ) 

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the click occurred outside the sidebar
      if (isOpen && e.target.closest('.sidebar') === null) {
        setIsOpen(false);
      }
    };

    // Add event listener for outside clicks when the sidebar is visible
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative sidebar overflow-y-hidden lg:w-[15%] md:w-[10%] w-[10%] border-blue-950  border-r-[1px]">
       <div className={`mt-10 md:px-2 px-1 lg:px-14 md:block hidden lg:hidden`}>
          <AiOutlineMenu
            onClick={() => setIsOpen(true)}
            className={`text-[#4287f5]  md:h-8 md:w-6 cursor-pointer`}
          />{" "}
        </div>
      <div className="border-r-[0.1px] pt-10 border-[#07152D] hidden lg:block  h-s px-2">
       
     {NavContent}
      </div>
      <div className="absolute top-0 left-0">
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="ml-5">
            {NavContent}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default SideBar;

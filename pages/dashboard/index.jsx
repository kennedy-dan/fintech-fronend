import React, { useEffect, useState } from "react";
import LandingPageLayout from "@/components/Layout";
import { RxAvatar } from "react-icons/rx";
import { BsFillCreditCardFill, BsFillPhoneFill, BsWifi } from "react-icons/bs";
import { FcElectricity } from "react-icons/fc";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiFootball } from "react-icons/bi";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchWalletAmount, fetchupdatedWallet } from "@/store/slice/walletSice";
import { fetchbillTransactions } from "@/store/slice/transactionSlice";


const Dashboard = () => {
  const dispatch = useDispatch()
  const {wallet} = useSelector(state => state.wallet)
  const {billtrans} = useSelector(state => state.transaction)


//  console.log(lastElement)

  useEffect(() => {
    dispatch(fetchWalletAmount())
    dispatch(fetchbillTransactions())
  }, [])

  // useEffect(() => {
  //   dispatch(fetchupdatedWallet())
  // }, [])
  

// const [price, setprice] = useState(lastElement.amount)
  
  
  return (
    <LandingPageLayout>
      <div className="mt-10 px-10">
        <div className="bg-gradient-to-r from-[#163A7D] to-blue-300 px-4 rounded-lg w-[370px] h-[220px] ">
          <div className="pt-10">
            <div className="flex px-3 rounded-full py-2 bg-black w-fit items-center bg-blac bg-transpar">
              <RxAvatar className="text-white" />
              <p className="text-sm text-white pl-2">Kennedy Daniel</p>
            </div>
          </div>

          <div className="flex items-center justify-between h-full">
            <p className="text-base font-semibold">Wallet Balance</p>
            <p className="text-base font-semibold">₦{wallet}</p>
          </div>
        </div>

        <div className="grid grid-cols-6 font-bold gap-7 text-white mt-8">
          <div className="py-7 px-7 bg-[#02060E] rounded-md">
            <div className="flex justify-center ">
              <div className="bg-wallet-rgba rounded-full px-3 py-3">
                {/* <button className="text-center"> */}
                <BsFillCreditCardFill className="text-center text-[#4287f5]" />
                {/* </button> */}
              </div>
            </div>
            <p className="text-white text-center text-sm pt-3">Deposit</p>
          </div>
          <div className="py-7 px-7 bg-[#02060E] rounded-md">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-phone-rgba rounded-full px-3 py-3">
                <BsFillPhoneFill className="text-center text-[#808080]" />
              </div>
              {/* </button> */}
            </div>
            <p className="text-white text-center text-sm pt-3">Airtime</p>
          </div>
          <div className="py-7 px-7 bg-[#02060E] text-center rounded-md">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-data-rgba rounded-full px-3 py-3">
                <BsWifi className="text-center text-green-400" />
              </div>
              {/* </button> */}
            </div>
            <p className="pt-3 text-sm">Data</p>
          </div>
          <div className="py-7 px-7 bg-[#02060E] rounded-md text-center">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-elect-rgba rounded-full px-3 py-3">
                <AiOutlineThunderbolt className="text-center text-red-400" />
              </div>
              {/* </button> */}
            </div>
            <p className="pt-3 text-sm">Electricity</p>
          </div>
          <div className="py-7 px-7 bg-[#02060E] rounded-md text-center">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-tv-rgba rounded-full px-3 py-3">
                <PiTelevisionSimpleBold className="text-center text-blue-900" />
              </div>
              {/* </button> */}
            </div>
           <p className="pt-3 text-sm">CableTv</p> 
          </div>

          <div className="py-7 px-7 bg-[#02060E] rounded-md text-center">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-bet-rgba rounded-full px-3 py-3 ">
                <BiFootball className="text-center text-pink-900 " />
              </div>

              {/* </button> */}
            </div>
            <p className="pt-3 text-sm">Betting</p>
          </div>
        </div>
      </div>
    </LandingPageLayout>
  );
};

export default Dashboard;

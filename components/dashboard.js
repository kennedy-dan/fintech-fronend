import React, { useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
import { BsFillCreditCardFill, BsFillPhoneFill, BsWifi } from "react-icons/bs";
import { FcElectricity } from "react-icons/fc";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiFootball, BiTransfer } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchbillTransactions,
  fetchTransactions,
} from "@/store/slice/transactionSlice";
import { useRouter } from "next/router";
import Link from "next/link";
const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { walletAmount } = useSelector((state) => state.wallet);
  const { billtrans, gettrans } = useSelector((state) => state.transaction);
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    // router.reload()
    dispatch(fetchbillTransactions());
    dispatch(fetchTransactions());
  }, [token, dispatch]);

  const recentdeposit = gettrans?.bill?.bills?.slice(0, 4);
  const recentTransaction = billtrans?.bill?.bills?.slice(0, 4);
  return (
    <div className="mt-10 lg:px-10 md:px-4 px-3">
      <div className="bg-gradient-to-r from-[#163A7D] to-blue-300 px-4 rounded-lg md:w-[370px] w-[290px] h-[220px] ">
        <div className="pt-10">
          <div className="flex px-3 rounded-full py-2 bg-black w-fit items-center bg-blac bg-transpar">
            <RxAvatar className="text-white" />
            <p className="text-sm text-white pl-2">
              {user?.first_name + "  " + user?.last_name}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between h-full">
          <p className="text-base font-semibold">Wallet Balance</p>
          <p className="text-base font-semibold">
            ₦{walletAmount?.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 font-bold md:gap-7 gap-3 text-white mt-8">
        <div className="py-7 px-7 bg-[#02060E] rounded-md text-center">
          <Link href="/transfer">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-bet-rgba rounded-full px-3 py-3 ">
                <BiTransfer className="text-center text-pink-900 " />
              </div>

              {/* </button> */}
            </div>
            <p className="pt-3 text-sm">Transfer</p>
          </Link>
        </div>
        <div className="py-7 px-7 bg-[#02060E] rounded-md">
          <Link href="/deposit">
            <div className="flex justify-center ">
              <div className="bg-wallet-rgba rounded-full px-3 py-3">
                {/* <button className="text-center"> */}
                <BsFillCreditCardFill className="text-center text-[#4287f5]" />
                {/* </button> */}
              </div>
            </div>
            <p className="text-white text-center text-sm pt-3">Deposit</p>
          </Link>
        </div>
        <div className="py-7 px-7 bg-[#02060E] rounded-md">
          <Link href="/buy-airtime">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-phone-rgba rounded-full px-3 py-3">
                <BsFillPhoneFill className="text-center text-[#808080]" />
              </div>
              {/* </button> */}
            </div>
            <p className="text-white text-center text-sm pt-3">Airtime</p>
          </Link>
        </div>
        <div className="py-7 px-7 bg-[#02060E] text-center rounded-md">
          <Link href="/buy-data">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-data-rgba rounded-full px-3 py-3">
                <BsWifi className="text-center text-green-400" />
              </div>
              {/* </button> */}
            </div>
            <p className="pt-3 text-sm">Data</p>
          </Link>
        </div>
        <div className="py-7 px-7 bg-[#02060E] rounded-md text-center">
          <Link href="/buy-electricity">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-elect-rgba rounded-full px-3 py-3">
                <AiOutlineThunderbolt className="text-center text-red-400" />
              </div>
              {/* </button> */}
            </div>
            <p className="pt-3 text-sm">Electricity</p>
          </Link>
        </div>
        <div className="py-7 px-7 bg-[#02060E] rounded-md text-center">
          <Link href="/buy-airtime">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-tv-rgba rounded-full px-3 py-3">
                <PiTelevisionSimpleBold className="text-center text-blue-900" />
              </div>
              {/* </button> */}
            </div>
            <p className="pt-3 text-sm">CableTv</p>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-7 md:gap-4 mt-10">
        <div className="bg-gray-950 rounded-md px-2 py-8 h-fit">
          <p className="text-white text-xl  pb-5">Recent Transactions</p>
          <div className="grid grid-cols-4 py-1 px-1 text-gray-300 text-sm bg-[#040c1c]">
            <p>Title</p>
            <p>gateway</p>
            <p>Amount</p>
            <p>Status</p>
          </div>
          <div className="">
            {recentdeposit?.map((data) => (
              <div
                key={data.transactionId}
                className="grid grid-cols-4 text-white px-1 text-[11px] mt-3 py-2"
              >
                <p>deposit</p> <p>flutterwave</p> <p>{data.amount}</p>{" "}
                <p>{data.paymentStatus}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-950 rounded-md px-2 py-8">
          <p className="text-white text-xl  pb-5">Recent Wallets</p>
          <div className="grid grid-cols-5 py-1 px-1 text-gray-300 text-sm bg-[#040c1c]">
            <p>Type</p>
            <p className="col-span-2">Number</p>
            <p>Amount</p>
            <p>Status</p>
          </div>
          <div className="">
            {recentTransaction?.map((data) => (
              <div
                key={data._id}
                className="grid grid-cols-5 text-white px-1 text-[11px] mt-3 py-2"
              >
                <p>{data.network}</p> <p className="col-span-2">{data.phone}</p>{" "}
                <p>{data.amount}</p> <p>successful</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

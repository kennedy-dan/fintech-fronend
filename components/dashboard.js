import React, { useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
import { BsFillCreditCardFill, BsFillPhoneFill, BsWifi } from "react-icons/bs";
import { FcElectricity } from "react-icons/fc";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiFootball, BiTransfer } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";

import {
  fetchbillTransactions,
  fetchTransactions,
} from "@/store/slice/transactionSlice";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
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

  const cars = [
    { brand: "Toyota", year: 2022, color: "Blue" },
    { brand: "Honda", year: 2021, color: "Red" },
    { brand: "Ford", year: 2020, color: "Green" },
    // Add more data
  ];

  const recentdeposit = gettrans?.bill?.bills?.slice(0, 4);

  // const date = recentdeposit.map(date => )
  console.log(recentdeposit);
  const recentTransaction = billtrans?.bill?.bills?.slice(0, 4);

  function formatDate(inputDate) {
    const parsedDate = new Date(inputDate);

    const day = parsedDate.getDate().toString().padStart(2, "0");
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0"); // Note: Month is zero-indexed
    const year = parsedDate.getFullYear().toString().slice(-2);

    return `${day}/${month}/${year}`;
  }

  const formattedDates = recentdeposit?.map((obj) => ({
    id: obj._id,
    paymentGateway: obj.paymentGateway,
    amount: obj.amount,
    status: obj.paymentStatus,
    formattedDate: formatDate(obj.createdAt),
  }));

  const newformattedDates = recentTransaction?.map((obj) => ({
    network: obj.network,
    phone: obj.phone,
    amount: obj.amount,
    formattedDate: formatDate(obj.createdAt),
  }));

  console.log(formattedDates);
  return (
    <div className="my-10 lg:px-4 h-full md:h-screen lg:h-full md:px-4 px-3">
      <div className="flex">
        <buton className="text-[#4287f5] md:hidden">
          <IoIosArrowRoundBack className="w-6 h-6" />
        </buton>
        <p className=" text-gray-600 font-bold w-full ml-3">Dashboard</p>
      </div>
      <hr className="border-[#4287f5] pb-4" />
      <div className="bg-gradient-to-r from-[#163A7D] to-blue-300 px-4 rounded-lg md:w-[370px] w-full h-[220px] ">
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
        <div className="md:py-7 md:px-7 px-5 py-5  bg-[#02060E] rounded-md text-center">
          <Link href="/transfer">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-bet-rgba rounded-full px-3 py-3 ">
                <BiTransfer className="text-center text-pink-900 " />
              </div>

              {/* </button> */}
            </div>
            <p className="pt-3 md:text-sm text-[13px]">Transfer</p>
          </Link>
        </div>
        <div className="md:py-7 md:px-7 px-5 py-5 bg-[#02060E] rounded-md">
          <Link href="/deposit">
            <div className="flex justify-center ">
              <div className="bg-wallet-rgba rounded-full px-3 py-3">
                {/* <button className="text-center"> */}
                <BsFillCreditCardFill className="text-center text-[#4287f5]" />
                {/* </button> */}
              </div>
            </div>
            <p className="text-white text-center md:text-sm text-[13px] pt-3">
              Deposit
            </p>
          </Link>
        </div>
        <div className="md:py-7 md:px-7 px-5 py-5 bg-[#02060E] rounded-md">
          <Link href="/buy-airtime">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-phone-rgba rounded-full px-3 py-3">
                <BsFillPhoneFill className="text-center text-[#808080]" />
              </div>
              {/* </button> */}
            </div>
            <p className="text-white text-center md:text-sm text-[13px]  pt-3">
              Airtime
            </p>
          </Link>
        </div>
        <div className="md:py-7 md:px-7 px-5 py-5 bg-[#02060E] text-center rounded-md">
          <Link href="/buy-data">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-data-rgba rounded-full px-3 py-3">
                <BsWifi className="text-center text-green-400" />
              </div>
              {/* </button> */}
            </div>
            <p className="pt-3 md:text-sm text-[13px] ">Data</p>
          </Link>
        </div>
        <div className="md:py-7 md:px-7 px-5 py-5 bg-[#02060E] rounded-md text-center">
          <Link href="/buy-electricity">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-elect-rgba rounded-full px-3 py-3">
                <AiOutlineThunderbolt className="text-center text-red-400" />
              </div>
              {/* </button> */}
            </div>
            <p className="pt-3 md:text-sm text-[13px] ">Electricity</p>
          </Link>
        </div>
        <div className="md:py-7 md:px-7 px-5 py-5 bg-[#02060E] rounded-md text-center">
          <Link href="/buy-airtime">
            <div className="flex justify-center">
              {/* <button className="text-center"> */}
              <div className="bg-tv-rgba rounded-full px-3 py-3">
                <PiTelevisionSimpleBold className="text-center text-blue-900" />
              </div>
              {/* </button> */}
            </div>
            <p className="pt-3 md:text-sm text-[13px] ">CableTv</p>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-4 md:gap-4 mt-10">
        <div className="bg-gray-950 rounded-md  py-8 ">
          <p className="text-white text-xl px-1 md:px-4   pb-5">
            Recent Deposit
          </p>

          <DataTable
            value={formattedDates}
            className=" text-gray-300  w-full px-1 md:px-4  lg:text-sm text-[13px] datatable-responsive"
          >
            <Column
              field="paymentGateway"
              header="gateway"
              headerClassName="bg-[#040c1c]  rounded-l-md "
              className="text-start w-[120px]"
            ></Column>
            <Column
              field="amount"
              header="amount"
              headerClassName="bg-[#040c1c]"
              className="text-start w-[180px] pl-2  py-2"
            ></Column>
            <Column
              field="status"
              header="status"
              headerClassName="bg-[#040c1c]"
              className="text-start w-[180px]  py-2"
            ></Column>
            <Column
              field="formattedDate"
              header="Date"
              headerClassName="bg-[#040c1c] rounded-r-md "
              className="text-start flex   py-2"
            ></Column>
          </DataTable>
        </div>
        <div className="bg-gray-950 py-8  rounded-md ">
          <p className="text-white text-xl px-1 md:px-4   pb-5">
            Recent Transactions
          </p>

          <DataTable
            value={newformattedDates}
            className=" text-gray-300  w-full px-1 md:px-4 lg:text-sm text-[13px] datatable-responsive"
          >
            <Column
              field="network"
              header="Type"
              headerClassName="bg-[#040c1c] rounded-l-md "
              className="text-start w-[180px]"
            ></Column>
            <Column
              field="phone"
              header="number"
              headerClassName="bg-[#040c1c]"
              className="text-start w-[180px]  py-2"
            ></Column>
            <Column
              field="amount"
              header="amount"
              headerClassName="bg-[#040c1c]"
              className="text-start w-[180px]  py-2"
            ></Column>
            <Column
              field="formattedDate"
              header="Date"
              headerClassName="bg-[#040c1c] rounded-r-md "
              className="text-start   py-2"
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

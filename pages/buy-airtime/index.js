import PayBill from "@/components/PayBill";
import React,{useEffect} from "react";
import LandingPageLayout from "@/components/Layout";
import { fetchAirtimeCategories } from "@/store/slice/getDataSlice";
import { useSelector, useDispatch } from "react-redux";
import { payAirtime } from "@/store/slice/payBillsSlice";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";


const BuyAirtime = () => {
  const dispatch = useDispatch();

  const { airtimetype, status } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchAirtimeCategories());
  }, [dispatch]);

  return (
    <LandingPageLayout>
      <div className="pt-10 md:pl-10 px-4">
      <div className="flex">
        <Link href='/dashboard' className="md:hidden">
        <button className="text-[#4287f5] ">
          <IoIosArrowRoundBack className="w-6 h-6" />
        </button>
        </Link>
        <p className=" text-gray-600 font-bold w-full ml-3">Buy Airtime</p>
      </div>
      <hr className="border-[#4287f5] mt-4" />

        <PayBill datatype={airtimetype?.getdataSuccess?.type} catId="Phone Number" statu={status} typ='airtime' payBills={payAirtime} />

      </div>
    </LandingPageLayout>
  );
};

export default BuyAirtime;

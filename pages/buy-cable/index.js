import LandingPageLayout from "@/components/Layout";
import PayBill from "@/components/PayBill";
import { fetchCableCategories } from "@/store/slice/getDataSlice";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const BuyCable = () => {
  const dispatch = useDispatch();
  const { cabletype, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchCableCategories());
  }, [dispatch]);

  return (
    <LandingPageLayout>
      <div className="pt-10 md:pl-10  px-4">
      <div className="flex">
        <Link href='/dashboard' className="md:hidden">
        <button className="text-[#4287f5] md:hidden ">
          <IoIosArrowRoundBack className="w-6 h-6" />
        </button>
        </Link>
        <p className=" text-gray-600 font-bold w-full ">Cable Subscription</p>
      </div>
      <hr className="border-[#4287f5] mt-4" />

        <PayBill datatype={cabletype?.getdataSuccess?.type} catId="Smart card Number" typ="cable" />
      </div>
    </LandingPageLayout>
  );
};

export default BuyCable;

import React, { useEffect } from "react";
import LandingPageLayout from "@/components/Layout";
import PayBill from "@/components/PayBill";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataCategories } from "@/store/slice/getDataSlice";

const BuyData = () => {
  const dispatch = useDispatch();
  const {datatype, status} = useSelector(state => state.data)

  // console.log(datatype)
  useEffect(() => {
    dispatch(fetchDataCategories());
  }, [dispatch]);

  return (
    <LandingPageLayout>
      <div className="pt-10 lg:pl-10 px-4 lg:px-0">
        <p className=" text-[#4287f5] ">Buy Data </p>
        <PayBill datatype={datatype?.getdataSuccess?.type} catId="Phone Number" statu={status} typ='data' />
      </div>
    </LandingPageLayout>
  );
};

export default BuyData;

import React, { useEffect } from "react";
import LandingPageLayout from "@/components/Layout";
import PayBill from "@/components/PayBill";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchPowerCategories } from "@/store/slice/getDataSlice";

const BuyElectricity = () => {
  const dispatch = useDispatch();
  const {powertype, status} = useSelector(state => state.data)

  // console.log(datatype)
  useEffect(() => {
    dispatch(fetchPowerCategories());
  }, []);

  return (
    <LandingPageLayout>
      <div className="pt-10 pl-10">
        <p className=" text-[#4287f5] ">Buy Electricity </p>
        <PayBill datatype={powertype?.getdataSuccess?.type} catId="Meter Number" statu={status} typ='power' />
      </div>
    </LandingPageLayout>
  );
};

export default BuyElectricity;

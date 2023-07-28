import PayBill from "@/components/PayBill";
import React,{useEffect} from "react";
import LandingPageLayout from "@/components/Layout";
import { fetchAirtimeCategories } from "@/store/slice/getDataSlice";
import { useSelector, useDispatch } from "react-redux";
import { payAirtime } from "@/store/slice/payBillsSlice";


const BuyAirtime = () => {
  const dispatch = useDispatch();

  const { airtimetype, status } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchAirtimeCategories());
  }, []);

  return (
    <LandingPageLayout>
      <div className="pt-10 pl-10">
        <p className=" text-[#4287f5] ">Buy Airtime </p>
        <PayBill datatype={airtimetype?.getdataSuccess?.type} catId="Phone Number" statu={status} typ='airtime' payBills={payAirtime} />

      </div>
    </LandingPageLayout>
  );
};

export default BuyAirtime;

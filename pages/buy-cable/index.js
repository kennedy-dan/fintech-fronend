import LandingPageLayout from "@/components/Layout";
import PayBill from "@/components/PayBill";
import { fetchCableCategories } from "@/store/slice/getDataSlice";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const BuyCable = () => {
  const dispatch = useDispatch();
  const { cabletype, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchCableCategories());
  }, []);

  return (
    <LandingPageLayout>
      <div className="pt-10 pl-10">
        <PayBill datatype={cabletype?.getdataSuccess?.type} catId="Smart card Number" typ="cable" />
      </div>
    </LandingPageLayout>
  );
};

export default BuyCable;

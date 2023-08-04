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
import {
  fetchWalletAmount,
  fetchupdatedWallet,
} from "@/store/slice/walletSice";
import {
  fetchbillTransactions,
  fetchTransactions,
} from "@/store/slice/transactionSlice";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import('../../components/dashboard'), {
  ssr: false,
})

const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const { walletAmount } = useSelector((state) => state.wallet);
  const { billtrans, gettrans } = useSelector((state) => state.transaction);
  const { token, user } = useSelector((state) => state.auth);

  //  console.log(lastElement)

  useEffect(() => {
    // router.reload()
    dispatch(fetchbillTransactions());
    dispatch(fetchTransactions());
  }, [token]);



  // const [price, setprice] = useState(lastElement.amount)

  return (
    <LandingPageLayout>

   <DynamicHeader />
    </LandingPageLayout>
  );
};

export default Dashboard;

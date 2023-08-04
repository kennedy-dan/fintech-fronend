import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { fetchWalletAmount, clearWallet } from "@/store/slice/walletSice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const LandingPageLayout = ({ children }) => {
  const { token, loggedin } = useSelector((state) => state.auth);
  const direct = useRouter();
  const { walletAmount } = useSelector((state) => state.wallet);

  const dispatch = useDispatch();
  console.log(token);

  useEffect(() => {
    setTimeout(() => {
      token && dispatch(fetchWalletAmount());
    }, 1000);
    // const fetchData = async () => {
    //   try {
    //     // Dispatch the action to trigger the API call and update the Redux store
    //   console.log(token);

    //     if (token) {
    //       await dispatch(fetchWalletAmount());
    //     }
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    // fetchData();

    // return () => {
    //   // Clean up any resources if needed
    //   // This function runs before the component is unmounted or re-rendered
    // };
    // let data = localStorage.getItem("persist:fintech");
    // let toke = JSON.parse(data).token.replace(/"/g, "");

    // if (toke != null) {
    //   console.log(toke);

    //   dispatch(fetchWalletAmount());
    // }
  }, [dispatch, token]);

  // console.log(token);

  useEffect(() => {
    if (!token) {
      dispatch(clearWallet());
      direct.push("/login");
    }
  }, [token, dispatch]);

  return (
    <div className={`flex bg-[#040c1c] tracking-wider`}>
      <SideBar />
      <div
      // style={{
      //   overflowY: "auto",
      // }}
      className="w-full"
      >
        <main>{children}</main>
      </div>
    </div>
  );
};

export default LandingPageLayout;

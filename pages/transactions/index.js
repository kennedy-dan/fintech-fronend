import React, { useEffect, useState } from "react";
import {
  fetchbillTransactions,
  fetchTransactions,
} from "@/store/slice/transactionSlice";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector, useDispatch } from "react-redux";
import LandingPageLayout from "@/components/Layout";

const Transactions = () => {
  const dispatch = useDispatch();
  const { walletAmount, status } = useSelector((state) => state.wallet);
  const { billtrans, gettrans } = useSelector((state) => state.transaction);
  const { token, user } = useSelector((state) => state.auth);

  const [depositLoading, setDepositLoading] = useState(true);
  const [billstransLoading, setbillstransLoading] = useState(true);
  useEffect(() => {
    // router.reload()
    dispatch(fetchbillTransactions());
    dispatch(fetchTransactions());
  }, [token, dispatch]);

  useEffect(() => {
    if (gettrans.status === "successful") {
      setDepositLoading(false);
    }

    if (billtrans.status === "successful") {
      setbillstransLoading(false);
    }
  }, [gettrans, billstransLoading]);

  const recentdeposit = gettrans?.bill?.bills;

  // const date = recentdeposit.map(date => )
  console.log(recentdeposit);
  const recentTransaction = billtrans?.bill?.bills;

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
    <LandingPageLayout>
      <div className="">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-4 md:gap-4 mt-10">
        <div className="bg-gray-950 rounded-md  py-8 ">
          <p className="text-white text-xl px-1 md:px-4   pb-5">
            All Deposit
          </p>

          <DataTable
            value={formattedDates}
            className=" text-gray-300  w-full px-1 md:px-4  lg:text-sm text-[13px] datatable-responsive"
            loading={depositLoading}
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
            All Transactions
          </p>

          <DataTable
            value={newformattedDates}
            className=" text-gray-300  w-full px-1 md:px-4 lg:text-sm text-[13px] datatable-responsive"
            loading={billstransLoading}
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
    </LandingPageLayout>
  );
};

export default Transactions;

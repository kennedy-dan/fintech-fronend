import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { payAirtime, resetStatus } from "@/store/slice/payBillsSlice";
import { useRouter } from "next/router";
import { fetchupdatedWallet } from "@/store/slice/walletSice";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const PayBill = ({ datatype, statu, typ, catId, payBills }) => {
  const dispatch = useDispatch();
  const { wallet, status } = useSelector((state) => state.paybills);
  const { walletAmount } = useSelector((state) => state.wallet);

  const { user } = useSelector((state) => state.auth);
  const [selectedCategory, setSelectedCategory] = useState();
  const [amountInput, setamountInput] = useState("");
  const [formData, setFormData] = useState({
    country: "NG",
    customer: "",
    amount: "",
    type: "",
    reference: "",
  });
  const [country, setCountry] = useState("NG");
  const [customer, setCustomer] = useState("");
  const [state, setState] = useState(false);
  const [amount, setAmount] = useState();
  const router = useRouter();

  const transaction = wallet?.data?.airtimesuccess?.transactionId;
  console.log(transaction);

  const [type, setType] = useState();
  console.log(type);
  const data = datatype;
  console.log(amount);

  const selectCategory = (cate) => {
    console.log(amount);

    setType(cate);
    setAmount(cate.amount);
  };

  const customStyle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      padding: "1px 1px",
      backgroundColor: "#111827",
      borderRadius: "30px",
      // outlineColor: "#4287f5",
      // outline: "0.1px solid #4287f5",
      outlineOffset: "2px",
      // outlineWidth:'1px',
      borderStyle: "solid",
      boxShadow: "none",
      fontSize: "13px",
      borderColor: state.isFocused ? "#4287f5" : "#4287f5",
      marginTop: 2,
      color: "#94a3b8",
    }),
  };

  const pay = () => {
    if (amount > walletAmount) {
      console.log("firstttttt");
      toast.error("Insufficient Balance");

    } else {
      dispatch(
        payAirtime({
          country: country,
          customer: customer,
          type: type.name,
          amount: amount,
          reference: 298326378,
        })
      );
    }
  };

  const mail = user?.email;
  console.log(mail);



  useEffect(() => {
    if (status === "successful") {
      dispatch(fetchupdatedWallet({ transaction, mail }));
      toast.success("transaction successful");
      // router.push('/dashboard')
      dispatch(resetStatus());


    }
  }, [status]);

  

  return (
    <div className="pt-10">
      <div className="rounded-lg bg-gray-900 w-[390px] h-[480px] px-5 py-5 ">
        <p className="text-slate-400 text-sm pb-1">country:</p>
        <input
          className="w-full  rounded-full outline-none bg-gray-900 mt-2  tracking-[2px] leading-loose outline-[#4287f5] py-2 text-slate-400 text-[13px] px-2 outline-1"
          placeholder="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <p className="text-slate-400 text-sm mt-8">{catId}:</p>
        <input
          className="w-full py-2 rounded-full leading-loose tracking-[2px] outline-none bg-gray-900 mt-2 outline-[#4287f5] text-slate-400 text-[13px] px-2 outline-1"
          placeholder={catId}
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />

        <p className="text-slate-400 text-sm mt-8">Type:</p>
        {typ === "data" ||
        typ === "cable" ||
        typ === "power" ||
        typ === "airtime" ? (
          <Select
            styles={customStyle}
            className=""
            id="category"
            placeholder="Select Category"
            options={data?.data?.map((cate) => ({
              data: cate.amount,
              value: cate.biller_name,
              label: (
                <>
                  {cate.amount === 0 ? (
                    <p className="text-slate-400">{cate.biller_name}</p>
                  ) : (
                    <p className="text-slate-400">
                      {cate.biller_name} - {cate.amount}{" "}
                    </p>
                  )}
                </>
                // <p>
                //   {cate.amount === 0 ? cate.biller_name : cate.biller_name - cate.amount}
                //   {/* {cate.biller_name} - {cate.amount} */}
                // </p>
              ),
            }))}
            isLoading={statu == "loading"}
            onChange={(e) => {
              selectCategory({ name: e.value, amount: e.data });
            }}
            isClearable
            classNamePrefix="react-select"
          />
        ) : null}

        <p className="text-slate-400 text-sm mt-8">Amount:</p>
        {typ === "data" || typ === "cable" ? (
          <input
            className="w-full py-2 rounded-full leading-loose tracking-[1px] outline-none bg-gray-900 mt-2 outline-[#4287f5] text-slate-400 text-[13px] px-2 outline-1"
            placeholder="amount"
            value={amount}
            // value="AIRTIME"
          />
        ) : null}
        {typ === "airtime" || typ === "power" ? (
          <input
            className="w-full py-2 rounded-full outline-none leading-loose tracking-[4px] bg-gray-900 mt-2 outline-[#4287f5] text-slate-400 text-[13px] px-2 outline-1"
            placeholder="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        ) : null}

        <button
          className="bg-[#040c1c] py-2 px-4 rounded-lg mt-6"
          onClick={pay}
        >
          <div className="flex items-center">
            <p className="font-bold text-[#4287f5]">Purhase</p>
            {status === "loading" && (
              <ClipLoader className="ml-3" color="#ffffff" size={12} />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default PayBill;

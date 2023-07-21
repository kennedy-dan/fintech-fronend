import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { payAirtime } from "@/store/slice/payBillsSlice";

const PayBill = ({ datatype, status, typ, catId, payBills }) => {
  const dispatch = useDispatch();
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
  const [amount, setAmount] = useState();
  const [type, setType] = useState();

  const data = datatype;

  const selectCategory = (cate) => {
    setType(cate);
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
    dispatch(
      payAirtime({
        country: country,
        customer: customer,
        type: type,
        amount: amount,
        reference: 298986378,
      })
    );
  };
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
        <p className="text-slate-400 text-sm mt-8">Amount:</p>
        {typ === "data" || typ === "cable" ? (
          <input
            className="w-full py-2 rounded-full leading-loose tracking-[1px] outline-none bg-gray-900 mt-2 outline-[#4287f5] text-slate-400 text-[13px] px-2 outline-1"
            placeholder="amount"
            value={type?.amount}
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
            isLoading={status == "loading"}
            onChange={(e) => {
              selectCategory(e.value);
            }}
            isClearable
            classNamePrefix="react-select"
          />
        ) : null}

        <button
          className="bg-[#040c1c] py-2 px-4 rounded-lg mt-6"
          onClick={pay}
        >
          <p className="font-bold text-[#4287f5]">Purhase</p>
        </button>
      </div>
    </div>
  );
};

export default PayBill;

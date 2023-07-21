import React, {useState} from "react";
import LandingPageLayout from "@/components/Layout";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useSelector } from "react-redux";

const Deposit = () => {
    const [amount, setamount] = useState()
    const {user} = useSelector(state => state.auth)
  const config = {
    public_key: "FLWPUBK_TEST-b2b1c951addae38b9d337399cf2074ba-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    redirect_url: "http://localhost:4001/api/response",
    customer: {
      email: user?.email,
      name: user?.firstName + "  " + user?.LastName,
    },
  };
  const handleFlutterPayment = useFlutterwave(config);

  return (
    <LandingPageLayout>
      <div className="pt-10 pl-10">
        <div className=" bg-gray-900 w-[600px] px-4 text-white h-[240px] ">
          <p className="pt-3">Fund your wallet</p>
          <p className="text-sm pt-10">Amount you want to fund:</p>
          <div className="flex mt-2">
            <div className="bg-gray-700 rounded-l-lg flex items-center mt-1 px-3">
              <p>₦</p>
            </div>
            <input value={amount} onChange={e => setamount(e.target.value)} className="w-full  rounded-r-lg outline-none outline-1 bg-slate-4 mt-1 py-2 bg-gray-700  tracking-[2px] leading-loose  text-white text-[13px] px-2 " />
          </div>
          <div className="mt-3">
            <button
               onClick={() =>
                handleFlutterPayment({
                  callback: (response) => {
                    closePaymentModal();
                  },
                  onClose: () => {},
                })
              }
              className="w-fit bg-blue-800 text-sm py-2 tracking-[1px] px-2 leading-loose rounded-lg"
              
            >
              <p>Deposit</p>
            </button>
          </div>
        </div>
      </div>
    </LandingPageLayout>
  );
};

export default Deposit;

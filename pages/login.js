import React, { useState, useEffect } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { _Login } from "@/store/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch()
  const direct = useRouter()
  const [inputType, setInputType] = useState("password");
  const { loading, token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function updateFormData(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    dispatch(_Login(formData));
  }
  
  useEffect(() => {
   if(token){
    direct.push('/dashboard')
   }
  }, [token, dispatch,  direct])
  
  
  return (
    <div className="w-full justify-center flex items-center bg-[#040c1c] h-screen">
      <motion.div
        initial={{ scale: 0, x: "-0%", y: "-0%" }}
        animate={{ scale: 1 }}
        exit={{
          scale: 0.4,
          opacity: 0,
          transition: { type: "tween", duration: 0.2 },
        }}
        className="w-[470px] text-white px-5 rounded-lg pt-8 h-[420px] bg-gray-900"
      >
        <p className="text-center text-4xl">Sign In</p>
        <p className="text-center text-sm pt-4">sign in to your account </p>
        <div>
          <p className>Email:</p>
          <input
            placeholder="email"
            name="email"
            type="email"
            onChange={updateFormData}
            value={formData.email}
            className="w-full  rounded-lg outline-non bg-slate-40 mt-1  tracking-[2px] leading-loose outline-slate-400 py-2 text-black text-[13px] px-2 "
          />
        </div>
        <div className="mt-5">
          <p className>Password:</p>
          <div className="flex">
            <input
              placeholder="Password"
              className="w-full  rounded-l-lg outline-none outline-1 bg-slate-4 mt-1 py-2  tracking-[2px] leading-loose  text-black text-[13px] px-2 "
              name="password"
              type={inputType}
              value={formData.password}
              onChange={updateFormData}
            />
            <div className="bg-white rounded-r-lg flex items-center mt-1 px-3">
              {inputType === "password" && (
                <AiOutlineEye
                  onClick={() => setInputType("text")}
                  className="text-black text-lg "
                />
              )}
              {inputType === "text" && (
                <AiOutlineEyeInvisible
                  className="text-black  text-lg"
                  onClick={() => setInputType("password")}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-9">
          <button className="w-full bg-blue-800 py-2 tracking-[2px] leading-loose rounded-lg" onClick={handleSubmit}>
          {loading ? <ClipLoader color="#ffffff" size={12} /> : "Sign In"}

          </button>
        </div>
        <div className="flex justify-center text-sm pt-5">
          <p>New here? </p>
          <Link href="/register">
            <p className="text-center underline-offset-[5px] underline decoration-blue-600 pl-2">
              Create an account
            </p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

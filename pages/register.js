import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import { _SignUp } from "@/store/slice/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const [inputType, setInputType] = useState("password");
  const { loading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
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
    dispatch(_SignUp(formData));
  }

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
        className="w-[430px] text-white py-8 rounded-lg px-6 h-[590px] bg-gray-900"
      >
        <p className="text-center text-4xl">Sign Up</p>
        <div className="flex justify-center text-sm pt-1">
          <p>ALready have an account? </p>
          <Link href="/login">
            <p className="text-center underline-offset-[5px] underline decoration-blue-600 pl-2">
              Log in
            </p>
          </Link>
        </div>
        <div className="mt-6">
          <p className>First name:</p>
          <input
            placeholder="First name"
            name="first_name"
            value={formData.first_name}
            onChange={updateFormData}
            className="w-full  rounded-lg outline-none  outline-1 bg-slate- mt-1  tracking-[2px] leading-loose py-2 text-black text-[13px] px-2 "
          />
        </div>
        <div className="mt-6">
          <p className>Laast name:</p>
          <input
            className="w-full  rounded-lg outline-none outline-1 bg-slate-4 mt-1  tracking-[2px] leading-loose py-2 text-black text-[13px] px-2 "
            placeholder="Last name"
            name="last_name"
            value={formData.last_name}
            onChange={updateFormData}
          />
        </div>
        <div className="mt-6">
          <p className>Email:</p>
          <input
            placeholder="email"
            type="email"
            name="email"
            className="w-full  rounded-lg outline-none outline-1 bg-slate- mt-1  tracking-[2px] leading-loose py-2 text-black text-[13px] px-2 "
            value={formData.email}
            onChange={updateFormData}
          />
        </div>
        <div className="mt-6">
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
          <button
            className="w-full bg-blue-800 py-2 tracking-[2px] leading-loose rounded-lg"
            onClick={handleSubmit}
          >
                       {loading ? <ClipLoader color="#ffffff" size={12} /> : "Sign Up"}

          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;

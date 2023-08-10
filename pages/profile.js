import React from "react";
import LandingPageLayout from "@/components/Layout";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from 'next/link'
import { useSelector } from "react-redux";
const Profile = () => {
  const { token, user } = useSelector((state) => state.auth);

  function formatDate(inputDate) {
    const parsedDate = new Date(inputDate);

    const day = parsedDate.getDate().toString().padStart(2, "0");
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0"); // Note: Month is zero-indexed
    const year = parsedDate.getFullYear().toString().slice(-2);

    return `${day}/${month}/${year}`;
  }

  return (
    <LandingPageLayout>
      <div>
      <div className="my-10 lg:px-4 md:px-4 px-3  h-screen">
        <div className="flex">
        <Link href='/dashboard' className="md:hidden">
        <button className="text-[#4287f5] md:hidden ">
          <IoIosArrowRoundBack className="w-6 h-6" />
        </button>
        </Link>
        <p className=" text-gray-600 font-bold w-full ">Profile</p>
      </div>
      <hr className="border-[#4287f5] mt-4" />

        <div className="flex   ">
 
        <div className="">
          <div>
            <p className="text-slate-400 text-sm pb-1">Name:</p>
            <input
              value={user?.first_name + "  " + user?.last_name}
              className="w-full py-2 rounded-full leading-loose tracking-[2px] outline-none bg-gray-900 mt-2 outline-[#4287f5] text-slate-400 text-[13px] px-2 outline-1"
            />
          </div>
          <div className="mt-8">
            <p className="text-slate-400 text-sm pb-1">email:</p>
            <input
              value={user?.email}
              className="w-full py-2 rounded-full leading-loose tracking-[2px] outline-none bg-gray-900 mt-2 outline-[#4287f5] text-slate-400 text-[13px] px-2 outline-1"
            />
          </div>
          {/* <div className="mt-4">
            <p className="text-slate-400 text-sm pb-1">Joined:</p>
            <input
              value={user?.email}
              className="w-full py-2 rounded-full leading-loose tracking-[2px] outline-none bg-gray-900 mt-2 outline-[#4287f5] text-slate-400 text-[13px] px-2 outline-1"
            />
          </div> */}
        </div>
        <div className=""></div>
      </div>
        </div>
      </div>
    
    
    </LandingPageLayout>
  );
};

export default Profile;

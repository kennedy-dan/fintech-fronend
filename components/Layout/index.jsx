import React from "react";
import SideBar from "./SideBar";



const LandingPageLayout = ({ children }) => {
  return (
    <div
      className={`flex bg-[#040c1c] tracking-wider`}
    >
      <SideBar />
      <div
        // style={{
        //   overflowY: "auto",
        // }}
      >
        <main>{children}</main>
      </div>
    </div>
  );
};

export default LandingPageLayout;

import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { AiOutlineApple } from "react-icons/ai";

const Header = () => {
  return (
    <div className="h-30 space-y-1 flex justify-between p-4 bg-[#323438] text-[#c6c9cc]">
      <img className="" src="./images/logo.png" alt="" width={30} />
      <h1 className="">Store</h1>
      <h1 className="">Mac</h1>
      <h1 className="">iPad</h1>
      <h1 className="">iPhone</h1>
      <h1 className="">Watch</h1>
      <h1 className="">AirPods</h1>
      <h1 className="">TV & Home</h1>
      <h1 className="">Only on Apple</h1>
      <h1 className="">Accessories</h1>
      <h1 className="">Support</h1>
      <BsSearch className="w-10 h-5" />
      <BsBag className="w-10 h-5" />
    </div>
  );
};

export default Header;

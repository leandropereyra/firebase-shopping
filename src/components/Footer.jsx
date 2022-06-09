import React, { useContext } from "react";
import { SiHomeassistantcommunitystore } from "react-icons/si"
import { FaShoppingCart, FaListAlt } from "react-icons/fa"
import { AppContext } from "../App";

const Footer = () => {
  const { setRoute } = useContext(AppContext)
  return (
    <footer className="fixed h-16 w-full bg-amber-600 bottom-0 rounded-t-xl flex justify-center gap-10 items-center">
    <div className="bg-slate-100 text-2xl p-3 rounded-full text-red-700 cursor-pointer hover:scale-125 transition ">
      <SiHomeassistantcommunitystore onClick={()=> setRoute("home")} />
    </div>
    <div className="bg-slate-100 text-2xl p-3 rounded-full text-red-700 cursor-pointer hover:scale-125 transition">
      <FaShoppingCart onClick={()=> setRoute("shopping")} />
    </div>
    <div className="bg-slate-100 text-2xl p-3 rounded-full text-red-700 cursor-pointer hover:scale-125 transition">
      <FaListAlt onClick={()=> setRoute("taskList")} />
    </div>
    </footer>
  );
};

export default Footer;

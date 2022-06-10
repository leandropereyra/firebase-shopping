import React, { useContext } from "react";
import { FaPhoenixSquadron } from "react-icons/fa";
import { AppContext } from "../App";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";

const auth = getAuth();

const Header = () => {
  const { user, setUser, setRoute } = useContext(AppContext);
  const hazLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setRoute("login");
        setUser(null);
        toast("Usuario desloguado satisfactoriamente");
      })
      .catch((e) => console.log(e));
  };

  return (
    <header className="fixed top-0 h-20 w-full bg-amber-100 shadow-lg flex items-center justify-between px-8 rounded-b-xl">
      <div
        className="flex items-center justify-between gap-2 cursor-pointer"
        onClick={() => setRoute("home")}
      >
        <FaPhoenixSquadron className="text-2xl text-red-600" />
        <span className="text-xl font-semibold text-red-600">FireShopping v2</span>
      </div>
      <div className="flex gap-2">
        {user ? (
          <>
            <button
              className="bg-amber-700 text-slate-100 py-1 px-3 rounded-full hover:bg-amber-800 transition"
              onClick={hazLogOut}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-amber-700 text-slate-100 py-1 px-3 rounded-full hover:bg-amber-800 transition"
              onClick={() => setRoute("login")}
            >
              Login
            </button>
            <button
              className="bg-amber-700 text-slate-100 py-1 px-3 rounded-full hover:bg-amber-800 transition"
              onClick={() => setRoute("register")}
            >
              Regístrate
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

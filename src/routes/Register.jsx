import React, { useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { AppContext } from "../App";

const auth = getAuth();

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setRoute, setUser } = useContext(AppContext)
  const creaUsuario = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        toast(`¡Usuario ${email} registrado correctamente!`)
        // setEmail("");
        // setPassword("");
        setUser(user)
        setRoute("home")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    creaUsuario()
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-amber-800 font-semibold text-center">Regístrate</h1>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            className="border border-gray-500 rounded py-1 px-2 outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-gray-500 rounded py-1 px-2 outline-none"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-amber-700 text-slate-100 py-1 px-3 rounded-full hover:bg-amber-800 transition"
            type="submit"
          >
            Regístrate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

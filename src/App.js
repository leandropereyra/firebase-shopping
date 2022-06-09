import React, { createContext, useState } from "react";
import { app, messaging } from "./firebase";
import Header from "./components/Header";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import { Toaster, toast } from "react-hot-toast";
import { onMessage } from "firebase/messaging";
import Shopping from "./routes/Shopping";
import Footer from "./components/Footer";
import TaskList from "./routes/TaskList";

export const AppContext = createContext(null);

onMessage( messaging, payload =>{
  // console.log('Nueva notificacion en directo: ', payload);
  toast.custom(t =>(
    <div className="bg-amber-500 p-4 rounded-lg shadow-lg">
      <h1 className="text-lg font-semibold text-slate-100">{payload.notification.title}</h1>
      <p className="text-slate-100">{payload.notification.body}</p>
    </div>
  ));
} )

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ route, setRoute, user, setUser }}>
      <Toaster />
      <Header />
      <main className="px-6 pt-24 pb-20">
        {route === "home" && <Home />}
        {route === "login" && <Login />}
        {route === "register" && <Register />}
        {route === "shopping" && <Shopping />}
        {route === "taskList" && <TaskList />}
        { user && <p>Usuario loqueado: {user.email}</p> }
      </main>
      <Footer/>
    </AppContext.Provider>
  );
}

export default App;

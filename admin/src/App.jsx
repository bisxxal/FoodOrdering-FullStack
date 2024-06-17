import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import Order from "./pages/Order/Order";
import List from "./pages/List/List";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrder from "./pages/MyOrder/MyOrder";
import Home from "./components/Home/Home";
function App() {
  const url = "https://foodorderi.onrender.com";
  return (
    <div className="bg-zinc-900 w-full pxx-16 min-h-screen text-white">
      <ToastContainer/>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <Routes>

          <Route path="/" element={<Home url={url}/>} />
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/orders" element={<Order url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path='/myorders' element={<MyOrder url={url} />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

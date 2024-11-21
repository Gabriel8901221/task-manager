import React, { useEffect } from "react";
import Sidebar from "../../components/Siderbar";
import Home from "../../components/Home";



const Dashboard = () => {
  useEffect(() => {
    const verificationToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("token invalid");
      }
    };

    verificationToken()
  },[]);

  return (
    <section className="w-screen h-screen flex ">
      <Sidebar />
      <Home />
    </section>
  )
};

export default Dashboard;

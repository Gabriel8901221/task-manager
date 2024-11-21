import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data: token } = await api.post("/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      localStorage.setItem("token", token);
      console.log("user cas");

      navigate("/dashboard");

      // caixa de resposta shadcn tudo certo
    } catch (error) {
      console.log(error);
      // caixa de resposta shadcn de erro
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        className="flex flex-col w-96  border border-blue-400 rounded-3xl p-6 gap-4"
        onSubmit={handleSubmit}
      >
         <h2 className="text-3xl font-bold">Login</h2>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Email</label>
          <input
            ref={emailRef}
            type="email"
            className="text-white w-full h-12 pl-2 rounded-xl border border-blue-400 outline-none bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="text-white w-full h-12 pl-2 rounded-xl border border-blue-400 outline-none bg-transparent"
          />
        </div>
        <button className="w-full h-12 bg-blue-400 text-white font-bold mt-2 rounded-xl">Login</button>
        <Link className="text-center mt-4" to="/">Não tem uma conta? <span className="text-blue-600">Sign Up</span></Link>
      </form>
    </div>
  );
};

export default Login;

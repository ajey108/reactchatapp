import React from "react";
import { IoLogoWechat } from "react-icons/io5";

const Login = () => {
  return (
    <div
      className="min-h-screen  bg-cover bg-center flex items-center justify-evenly"
      style={{ backgroundImage: "url('/chatimage.jpeg')" }}
    >
      <IoLogoWechat className="w-[300px] h-[400px] text-white" />

      <form className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center border-4">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="username"
          required
          className="border-2"
        />
        <input type="email" placeholder="email" required className="border-2" />
        <input
          type="password"
          placeholder="password"
          required
          className="border-2"
        />
        <button type="submit">Sign Up</button>
        <div>
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div>
          <p>Already have an account click here</p> <span>Click Here</span>
        </div>
      </form>
    </div>
  );
};

export default Login;

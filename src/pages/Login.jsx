import React, { useState } from "react";
import { IoLogoWechat } from "react-icons/io5";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");
  return (
    <div
      className="min-h-screen  bg-cover bg-center flex items-center justify-evenly"
      style={{ backgroundImage: "url('/chatimage.jpeg')" }}
    >
      <IoLogoWechat className="w-[300px] h-[400px] text-white" />

      <form className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center py-4 border-4 cursor-pointer">
        <h2>{currentState}</h2>
        {currentState === "Sign up" ? (
          <input
            type="text"
            placeholder="username"
            required
            className="border-2"
          />
        ) : null}
        <input type="email" placeholder="email" required className="border-2" />
        <input
          type="password"
          placeholder="password"
          required
          className="border-2"
        />
        <button
          className="bg-blue-500 my-2 rounded-sm px-4 py-2 cursor-pointer"
          type="submit"
        >
          {currentState === "Sign up" ? "Create Account" : "Login"}
        </button>
        <div>
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div>
          {currentState === "Sign up" ? (
            <p>
              Already have an account
              <span onClick={() => setCurrentState("Login")}>Login Now</span>
            </p>
          ) : (
            <p>
              Create an account
              <span onClick={() => setCurrentState("Sign up")}>
                {" "}
                Click Here{" "}
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;

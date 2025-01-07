"use client";
import Input from "@/components/atoms/Input";
import Image from "next/image";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="relative h-screen w-full bg-[url('/images/home.jpg')] bg-no-repeat bg-fixed bg-cover bg-center">
      <div className="w-full h-full bg-black bg-opacity-60">
        <nav className="py-6 px-12">
          <Image src={"/images/logo.png"} width={100} height={100} alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-75 p-16 self-center mt-2 rounded w-2/4">
            <h3 className="mb-8 font-semibold text-5xl text-white">Sign In</h3>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-red-500 py-3 w-full mt-10 text-white rounded-md hover:bg-red-600">
                Sign In
              </button>
              <p className="mt-12 text-neutral-400">
                New to Netflix? &nbsp;{" "}
                <span className="cursor-pointer text-white ml-1 hover:underline">
                  Sign up now
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

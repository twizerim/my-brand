import React from "react";
import "../../sass/login.css";
import image from "../../assets/login.jpeg";
import Loginform from "../forms/login-form";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function Login(props) {
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="bg-[#eee] w-full md:w-1/2 h-auto md:h-[400px] flex flex-col justify-between items-start rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl p-8 md:p-20">
          <img
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-md mb-4"
            src={image}
            alt="login"
          />
          <div>
            <p className="text-3xl md:text-4xl font-bold mb-2">Brand</p>
            <p className="text-sm md:text-base">By Twizerimana Gedeon</p>
          </div>
          <p className="mt-4">&copy;2024* Brand</p>
        </div>

        <div className="flex flex-col justify-between bg-white w-full md:w-1/2 rounded-b-xl md:rounded-tr-xl md:rounded-br-xl p-6 md:p-10">
          <h1 className="text-left font-bold text-2xl md:text-3xl mb-4">Login</h1>
          <Loginform />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-center pl-4 pr-4 md:pl-20 md:pr-10 py-6 bg-white mt-10 rounded-xl">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <p className="text-2xl md:text-3xl font-bold mb-2">New Here?</p>
          <p className="text-center md:text-left">Create an account</p>
        </div>
        <Button
          className="mt-4 md:mt-0"
          onClick={props.pass}
          size="large"
        >
          Register Here <ArrowRightOutlined style={{ color: "#F0147A", marginLeft: 8 }} />
        </Button>
      </div>
    </>
  );
}
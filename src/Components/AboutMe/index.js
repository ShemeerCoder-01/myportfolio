"use client"
import React from "react";
import "./style.css";
// import image from "../../assets/myphoto.jpg";
import Avatar from "@mui/material/Avatar";
import Button from "../common/Button";

function AboutMe() {
  return (
    <div className="aboutSection flex items-center lg:flex-row gap-6 lg:gap-10 lg:justify-center pt-20 pl-4">
      <div className="w-2/5">
        <h1 className="font-medium w-full lg:font-semibold text-lg lg:text-3xl">Hi...I am Shemeer</h1>
        <h3 className="role font-normal lg:font-bold text-sm lg:text-xl mt-4">FrontEnd Developer / Web Developer</h3>
        <p className="text-justify leading-tights lg:leading-normal text-xs lg:text-base mt-3 lg:mt-6 my-3 lg:my-6">
          Hello and welcome to my portfolio! I&apos;m an enthusiastic Frontend Developer located in India, committed to designing captivating and dynamic web experiences. My focus centers around creating user-friendly interfaces that seamlessly merge
          aesthetics with functionality.</p>
        <Button />
      </div>
      <div className="rightArea">
        <div className="imgArea">
          <Avatar
            alt="MyPhoto"
            src="/myphoto.jpg"
            className="img"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

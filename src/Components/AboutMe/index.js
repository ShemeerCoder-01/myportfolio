"use client"
import React from "react";
import "./style.css";
// import image from "../../assets/myphoto.jpg";
import Avatar from "@mui/material/Avatar";
import Button from "../common/Button";

function AboutMe() {
  return (
    <div className="aboutSection flex gap-10 justify-center pt-20 m-2 mx-8">
      <div className="w-2/5">
        <h1 className="font-semibold text-3xl">Hi...I am Shemeer</h1>
        <h3 className="role font-bold text-l mt-4">FrontEnd Developer / Web Developer</h3>
        <p className="text-justify leading-normal text-base mt-6 my-6">
          Hello and welcome to my portfolio! I&apos;m an enthusiastic Frontend Developer located in India, committed to designing captivating and dynamic web experiences. My focus centers around creating user-friendly interfaces that seamlessly merge
          aesthetics with functionality.</p>
        <Button />
      </div>
      <div className="rightArea">
        <div className="imgArea">
          <Avatar
            sx={{ width: "300px", height: "300px" }}
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

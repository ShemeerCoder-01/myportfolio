"use client"
import React from "react";
import "./style.css";
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaJava,FaGit,FaGithub } from "react-icons/fa6";
import ProgressBar from "../common/ProgressBar";
import JavascriptRoundedIcon from "@mui/icons-material/JavascriptRounded";

function Skills() {
  return (
    <div className="flex flex-col items-center pt-10 mt-12">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <div className="flex flex-col items-start">
        <h2 className="heading text-xl font-medium mt-6">Languages & frameworks / Libraries :</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-8 justify-around px-4 my-2">
            <FaReact className="text-4xl m-2" />
            <ProgressBar value={88} />
            <span style={{color:'var(--black)'}}>8.8 / 10</span>
          </div>
          <div className="flex items-center gap-8 justify-around px-4 my-2">
            <JavascriptRoundedIcon className="text-4xl m-2"/>
            <ProgressBar value={88} />
            <span style={{color:'var(--black)'}}>8.8 / 10</span>
          </div>
          <div className="flex items-center gap-8 justify-around px-4 my-2">
            <FaHtml5 className="text-4xl m-2"/>
            <ProgressBar value={80} />
            <span style={{color:'var(--black)'}}>8.0 / 10</span>
          </div>
          <div className="flex items-center gap-8 justify-around px-4 my-2">
            <FaCss3 className="text-4xl m-2"/>
            <ProgressBar value={82} />
            <span style={{color:'var(--black)'}}>8.2 / 10</span>
          </div>
          <div className="flex items-center gap-8 justify-around px-4 my-2">
            <FaNodeJs className="text-4xl m-2"/>
            <ProgressBar value={78} />
            <span style={{color:'var(--black)'}}>7.8 / 10</span>
          </div>
          <div className="flex items-center gap-8 justify-around px-4 my-2">
            <FaJava className="text-4xl m-2"/>
            <ProgressBar value={70} />
            <span style={{color:'var(--black)'}}>7.0 / 10</span>
          </div>
        </div>
        <div className="flex items-center gap-12">
        <h2 className="text-xl font-medium mt-6 ml-52">Developer Tools : </h2>
        <div className="dev-tools flex flex-wrap items-center mt-6 gap-8">
          <FaGit className="text-4xl m-2"/>
          <FaGithub className="text-4xl m-2"/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Skills;
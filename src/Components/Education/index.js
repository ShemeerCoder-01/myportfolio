"use client"
import React from "react";
import './style.css'
function Education() {
  return (
    <div className="flex flex-col items-center pt-10 mt-12">
      <h1 className="text-3xl font-bold mb-4">Education</h1>
      <div className="flex flex-col flex-wrap items-center justify-center gap-10 rounded-2xl p-4 w-3/5">
        <div className="edu flex flex-col lg:flex-row gap-2 lg:gap-8 items-center justify-center p-8 rounded-2xl w-60 lg:w-11/12 motion-safe:hover:scale-105">
          <h3 className="text-xl font-medium lg:text-lg lg:font-light">Graduation</h3>
          <div className="flex flex-col items-center lg:flex-row w-4/5 justify-evenly">
            <p>B.A Economics</p>
            <p> IGNOU</p>
          </div>
        </div>
        <div className="edu flex flex-col items-center lg:flex-row gap-2 lg:gap-8 items-center justify-center p-8 rounded-2xl w-60 lg:w-11/12 motion-safe:hover:scale-105">
          <h3 className="text-xl font-medium lg:text-lg lg:font-light">12th Standard</h3>
          <div className="flex flex-col items-center lg:flex-row w-4/5 justify-evenly">
            <p>Computer Science</p>
            <p>B.E.M.H.S School</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;
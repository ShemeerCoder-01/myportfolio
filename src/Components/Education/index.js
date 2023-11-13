"use client"
import React from "react";
import './style.css'
function Education() {
  return (
    <div className="flex flex-col items-center pt-10 mt-12">
      <h1 className="text-3xl font-bold mb-4">Education</h1>
      <div className="flex flex-col flex-wrap items-center justify-center gap-10 rounded-2xl p-4 w-3/5">
        <div className="edu flex gap-8 items-center justify-center p-8 rounded-2xl w-11/12">
          <h3>Graduation</h3>
          <div className="flex w-4/5 justify-evenly">
            <p>B.A Economics</p>
            <p> IGNOU</p>
          </div>
        </div>
        <div className="edu flex gap-8 items-center justify-center p-8 rounded-2xl w-11/12">
          <h3>12th Standard</h3>
          <div className="flex w-4/5 justify-evenly">
            <p>Computer Science</p>
            <p>B.E.M.H.S School</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;
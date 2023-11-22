"use client"
import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className='footer flex justify-between items-center p-6 mt-96 mx-4 mb-1 rounded-xl'>
      <h2 className="cursor-pointer text-lg lg:text-xl font-semibold text-white" onClick={() => topFunction()}>
        MyPortfolio<span>.</span>
      </h2>
      <div className="flex justify-end items-center gap-4">
        <a href="https://facebook.com">
          <FacebookIcon className="social-link text-white text-sm lg:text-3xl" />
        </a>
        <a href="mailto:shameerbem@gmail.com" className='hidden lg:block'>
          <EmailIcon className="social-link text-white text-sm lg:text-3xl" />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon className="social-link text-white text-sm lg:text-3xl" />
        </a>
        <a href="https://github.com/ShemeerCoder-01">
          <GitHubIcon className="social-link text-white text-sm lg:text-3xl" />
        </a>
      </div>
    </div>
  )
}

export default Footer
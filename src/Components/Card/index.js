"use client"
import React from 'react'
import './style.css'
import Image from 'next/image'


function Card({image,title,projectUrl,repositoryUrl,techStacks}) {

console.log(repositoryUrl);
  const projectRedirect = ()=>{
    window.location.href = projectUrl;
  }

  const redirectToRepository = ()=>{
    window.location.href=repositoryUrl;
  }

  return (
    <div className='card-container flex flex-col rounded-2xl p-4'>
        <img onClick={projectRedirect} src={image.props.src.src} className='object-cover h-52 rounded-2xl' alt='img'/>
        <h1 onClick={redirectToRepository} className='text-2xl font-medium mt-2'>{title}</h1>
        <h2 className='text-xl font-normal mt-4 ml-2'>Tech Stacks : </h2>
        <div className='flex flex-wrap justify-evenly'>
          {
            techStacks.map((skill,idx)=>{
              return(
                <li style={{color:'var(--grey)'}} key={idx}>{skill}</li>
              )
            })
          }
        </div>
    </div>
  )
}

export default Card
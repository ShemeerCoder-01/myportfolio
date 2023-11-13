"use client"
import React from 'react'
import Card from '../Card'
import crypto from '../../../public/coinwatchr-img.png'
import trailervista from '../../../public/trailervista-img.png'
import shopping from '../../../public/easytodo.png'
import Image from 'next/image'


function Project() {
  console.log(process.env.COINWATCHR_REPO);

  return (
    <div className='pt-10 mt-12'>
        <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
        <div className='flex flex-wrap justify-center gap-8 mt-16'>
            <Card image={<Image src={crypto} alt='cryp' />} title={"Coinwatchr App"} projectUrl={process.env.NEXT_PUBLIC_COINWATCHR_URL} repositoryUrl={process.env.NEXT_PUBLIC_COINWATCHR_REPO} techStacks={['REACT.JS','HTML', 'CSS', 'JAVASCRIPT', 'MATERIAL UI', 'FRAMER MOTION']}/>
            <Card image={<Image src={trailervista} alt='net'/>} title={"Trailervista App"} projectUrl={process.env.NEXT_PUBLIC_TRAILERVISTA_URL} repositoryUrl={process.env.NEXT_PUBLIC_TRAILERVISTA_REPO} techStacks={['REACT.JS','HTML', 'CSS', 'JAVASCRIPT', 'MATERIAL UI', 'FIREBASE']}/>
            <Card image={<Image src={shopping} alt='shop' />} title={"easyTodo App"} projectUrl={process.env.NEXT_PUBLIC_EASYTODO_URL} repositoryUrl={process.env.NEXT_PUBLIC_EASYTODO_REPO} techStacks={['REACT.JS','EXPRESS.JS','NODE.JS','MONGODB','HTML', 'CSS', 'JAVASCRIPT','MATERIAL UI']}/>
        </div>
    </div>
  )
}

export default Project
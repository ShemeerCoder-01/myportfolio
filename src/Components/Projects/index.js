"use client"
import React from 'react'
import Card from '../Card'
import crypto from '../../../public/coinwatchr-img.png'
import trailervista from '../../../public/trailervista-img.png'
import shopping from '../../../public/E-Commerce.jpeg'
import Image from 'next/image'


function Project() {

  return (
    <div className='pt-10 mt-12'>
        <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
        <div className='flex flex-wrap justify-center gap-8 mt-16'>
            <Card image={<Image src={crypto} alt='cryp' />} title={"Coinwatchr App"} projectUrl={process.env.COINWATCHR_URL} repositoryUrl={process.env.REACT_APP_CRYPTO_REPO} techStacks={['React.js','HTML', 'CSS', 'JAVASCRIPT', 'MATERIAL UI', 'FRAMER MOTION']}/>
            <Card image={<Image src={trailervista} alt='net'/>} title={"Trailervista App"} projectUrl={process.env.TRAILERVISTA_URL} repositoryUrl={process.env.REACT_APP_NETFLIX_REPO} techStacks={['React.js','HTML', 'CSS', 'JAVASCRIPT', 'MATERIAL UI', 'FIREBASE']}/>
            <Card image={<Image src={shopping} alt='shop' />} title={"E-Commmerce Website"} projectUrl={process.env.ECOMMERCE_URL} repositoryUrl={process.env.REACT_APP_ECOMMERCE_REPO} techStacks={['HTML', 'CSS', 'JAVASCRIPT']}/>
        </div>
    </div>
  )
}

export default Project
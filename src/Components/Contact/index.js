"use client"
import React from 'react'
import Map from '../LocationMap';

function Contact() {
  return (
    <div className='pt-10 mt-12'>
        <h1 className="text-3xl font-bold mb-4 text-center">Contact</h1>
        <div className='w-full flex items-center justify-around gap-4 mt-10'>
            <div className='w-6/12 text-center'>
                <h2 className='text-2xl font-medium'>Address :- </h2> 
                <div>
                    <p>House No - 30/429-5</p>
                    <p>Bismi Nagar, ChadanamKurissi</p>
                    <p>Palakkad, Kerala</p>
                    <p>Pin - 678004.</p>
                    <p>Contact No - 8891640607 / 9074498176</p>
                </div>
            </div>
            <div className='w-6/12'>
             <Map/>
            </div>
        </div>
    </div>
  )
}

export default Contact;
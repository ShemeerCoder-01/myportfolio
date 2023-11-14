"use client"
import React from 'react'


function Map() {

    

  return (
    <div className='flex justify-center items-center'>
    <iframe title='myCurrentlocation' className='w-3/4 h-60 rounded-2xl'
     src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3919.735050344544!2d76.63818107330972!3d10.754891259594144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ1JzE3LjYiTiA3NsKwMzgnMjYuNyJF!5e0!3m2!1sen!2sin!4v1691481994216!5m2!1sen!2sin"
     ></iframe>
     </div>
  )
}

export default Map
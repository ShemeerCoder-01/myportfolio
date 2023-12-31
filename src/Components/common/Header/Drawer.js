"use client"
import React from 'react'

function Drawer({handleDrawer}) {
    
    const scrollFunction = (tab) => {
        switch (tab) {
          case "Education":
            document.body.scrollBy(0,590)
            document.documentElement.scrollBy(0,590);
            break;
          case "Skills":
            document.body.scrollBy(0,1090)
            document.documentElement.scrollBy(0,1090)
            break;
          case "Projects":
            document.body.scrollBy(0,1830)
            document.documentElement.scrollBy(0,1830)
            break;
          case "Contact":
            document.body.scrollBy(0,3300)
            document.documentElement.scrollBy(0,3300)
            break;
          default:
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        handleDrawer();
      }
  return (
   <div className='relative'>
        <div className='flex w-full rounded-lg px-4 py-4 h-12 absolute top-0 gap-4 lg:items-center justify-evenly text-white bg-navy'>
            <p className='cursor-pointer font-medium text-sm hover:text-black' onClick={() => scrollFunction("Education")}>Education</p>
            <p className='cursor-pointer font-medium text-sm hover:text-black' onClick={() => scrollFunction("Skills")}>Skills</p>
            <p className='cursor-pointer font-medium text-sm hover:text-black' onClick={() => scrollFunction("Projects")}>Projects</p>
            <p className='cursor-pointer font-medium text-sm hover:text-black' onClick={() => scrollFunction("Contact")}>Contact</p>
        </div>
   </div>
  )
}

export default Drawer
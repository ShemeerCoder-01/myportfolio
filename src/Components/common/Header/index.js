"use client"
import React, { useEffect, useState } from 'react'
import Drawer from './Drawer';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Header() {
    const [theme,setTheme] = useState('');
    const [isDrawerOpen,setIsDrawerOpen] = useState(false);
  
    useEffect(()=>{
      let themeColor = localStorage.getItem('themer');
      if(themeColor === "dark"){
        setDark();
      }
      else{
        setLight();
      }
    },[theme]);
  
    const setDark = ()=>{
      localStorage.setItem('themer',"dark");
      setTheme('dark');
      document.documentElement.setAttribute('data-theme',"dark");
    }
  
    const setLight = ()=>{
      localStorage.setItem('themer',"light");
      setTheme("light");
      document.documentElement.setAttribute('data-theme',"light");
    }
  
    const handleClick = ()=>{
      if(localStorage.getItem('themer')){
        let themeData = localStorage.getItem('themer');
        if(themeData === 'dark'){
          setLight();
        }
        else{
          setDark();
        }
      }
    }
    const handleDrawer = () => {
      setIsDrawerOpen(prevState => !prevState);
    }
  
    const scrollFunction = (tab) => {
      switch (tab) {
        case "Education":
          document.body.scrollBy(0,550)
          document.documentElement.scrollBy(0,550);
          break;
        case "Skills":
          document.body.scrollBy(0,930)
          document.documentElement.scrollBy(0,930)
          break;
        case "Projects":
          document.body.scrollBy(0,1480)
          document.documentElement.scrollBy(0,1480)
          break;
        case "Contact":
          document.body.scrollBy(0,2000)
          document.documentElement.scrollBy(0,2000)
          break;
        default:
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
      }
    }
  
    return (
      <>
        <div className='header w-screen flex lg:w-full lg:justify-around justify-between items-center px-2 py-8'>
          <h1 className='text-2xl font-semibold cursor-pointer text-black'>Shemeer.</h1>
          <div className='header-links hidden lg:flex gap-4 lg:items-center'>
            <p className='cursor-pointer font-medium text-grey' onClick={() => scrollFunction("Education")}>Education</p>
            <p className='cursor-pointer font-medium text-grey' onClick={() => scrollFunction("Skills")}>Skills</p>
            <p className='cursor-pointer font-medium text-grey' onClick={() => scrollFunction("Projects")}>Projects</p>
            <p className='cursor-pointer font-medium text-grey' onClick={() => scrollFunction("Contact")}>Contact</p>
          </div>
          <div className='flex gap-3 mr-1'>
          {theme === 'light' ? <WbSunnyOutlinedIcon onClick={() => handleClick()} className='text-white hover:text-black' /> : <DarkModeOutlinedIcon onClick={() => handleClick()} className="text-white hover:text-black" />}
          <div className='flex lg:hidden'>
            <MenuRoundedIcon style={{color:'var(--grey)'}} onClick={handleDrawer}/>
          </div>
          </div>
        </div>
        {isDrawerOpen && <Drawer handleDrawer={handleDrawer}/>}
      </>
    )
  }
  
  export default Header
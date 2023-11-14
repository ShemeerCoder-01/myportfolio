"use client"
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressBar({value}) {

  return (
    <div>
      <LinearProgress sx={{
        width:"250px",
        height:"6px",
        '& .MuiLinearProgress-barColorPrimary':{
          background:"#3A80E9"
         },
        '& .MuiLinearProgress-bar1Determinate':{
        background:"#1B3369",
       },
      }} variant="determinate" value={value} className='rounded-lg w-40 lg:w-60 h-1.5' />
    </div>
  );
}


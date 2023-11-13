"use client"
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressBar({value}) {

  return (
    <div>
      <LinearProgress sx={{width:"250px",height:"5px"}} variant="determinate" value={value} />
    </div>
  );
}


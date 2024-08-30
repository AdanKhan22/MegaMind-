import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Banner() {
  return (
    <>
     <Box sx={{display:`flex` , justifyContent:`center`, margin:2 , padding: 2}}>
        <Typography variant='h2' sx={{fontFamily:`poppins` ,color:`white`}}>Archives</Typography>
     </Box>
    </>
  )
}

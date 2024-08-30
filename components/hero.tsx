import * as React from 'react';
import Image from 'next/image';

import Navbar from "./navbar"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { blue } from '@mui/material/colors';

export default function BoxBasic() {
  return (
  <Container maxWidth='xl' sx={{ position:`relative` , zIndex:100000 , height:`100vh`}}>
   <Navbar></Navbar>
      <Box
                     component="section"
                     sx={{
                       display: 'flex',
                       flexDirection: { xs:`column` ,sm:`column` , md:`row`},
                       alignItems: 'center',
                       justifyContent: 'space-between',
                       margin:{sm:0 , lg:1 , xl:5},
                       padding:{sm:0 , lg:1 , xl:5}
                     }}>
       
          
       <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection:`column` ,color: 'white', margin: 2 }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Typography variant='h1' sx={{ p: 1 }}>
      Mega Mind
    </Typography>
    <Typography variant='h5' sx={{ p: 1 }}>
      The newsletter for lazy programmers
    </Typography>
  </Box>
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
     
   {/* <Typography variant='h5' sx={{ p: 1 }}>
      Follow the latest trends <br></br>
      With our daily newsletters
    </Typography>
   */}
  
    {/* <TextField id="outlined-basic" label="Email" variant="outlined"  sx={{
    p: 1,
    color:`white`,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'orange', // Change the border color of the outline
      },
    },
    '& input': {
      color: 'white', // Change the text color inside the input field
    }, 
    '& .MuiInputLabel-root': {
      color: 'white', 
    },
  }} />
    <Button variant="contained" sx={{ p: 1 }}>
      Subscribe
    </Button> */}
    <Button variant="contained" sx={{ p: 1 }}>
      Get Started
    </Button>
  </Box>
</Box>

<Box
  sx={{
    width: '100%',           
    maxWidth: '700px',      
    height: 'auto',          
    overflow: 'hidden',    
    display: 'flex',         
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:{xl:`column` , lg:`row`}
  }}
>
  <Image
    src="/man.png"
    alt="Image"
    width={700}   
    height={700} 
    style={{
      width: '100%',     
      height: 'auto',    
      objectFit: 'cover'  
    }}
  />
</Box>
    </Box>
    </Container>
  );
}
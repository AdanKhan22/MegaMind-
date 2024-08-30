import * as React from 'react';
import Image from 'next/image';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function ButtonUsage() {
  return <>
      <Box component="section" sx={{ display:'flex', 
                                     flexDirection:'row',
                                     alignItems:'center',
                                     justifyContent:'space-between',
                                     margin:`10px`,
                                     padding:`10px`,
                                     }}>
           <Image src="/logo.png" alt="Image" width={25} height={25} />
           <Stack spacing={2} direction="row">
               <Button variant="contained">SignUp</Button>
               <Button variant="contained">Subscribe</Button>
            </Stack>
       </Box>    
         </>;
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';

import Link from 'next/link';

export default function MultiActionAreaCard() {
   
     const arr1 = [1,2,3,4,5,6,7,8,9,10];
   

  return (
    <Container maxWidth='xl' sx={{ margin: 1 , padding:5 }}>
    <Grid container spacing={{xs:5 , sm:10 , md:12, lg: 15}} sx={{ justifyContent:`center`, flexDirection: {
      xs: 'row',  
      sm: 'row',   
      md: 'row',      
      lg: 'row',    
      xl: 'row'       
    }}} >
      {arr1.map((index , post) => (
          <Grid key={index}>
          <Card sx={{ maxWidth:{sm:1 , md:320 , lg:400}, bgcolor: 'black', color: 'white' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://random.imagecdn.app/500/150"
                alt="green iguana"
              />
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography gutterBottom variant="body2" sx={{ flexGrow: 1 }}>
                    23rd August 2023
                  </Typography>
                  <FavoriteIcon 
                    sx={{ 
                      color: 'white', 
                      ml: 1, 
                      width: 20, 
                      height: 20, 
                      margin: 1, 
                      '&:active': {
                        color: 'red', // Change color when active (clicked)
                      },
                    }}
                  />
                  <CommentIcon sx={{ color: 'white', ml: 1, width: 20, height: 20 }} />
                  <Typography variant='h6' sx={{ p: 1 }}>7</Typography>
                </Box>
                    <Link href={`/posts/${index}`}>
                <Typography variant="h6" sx={{ color: 'white', fontFamily: 'Poppins, Arial, sans-serif' }}>
                  The Future of Web Development?: Web Assembly (WASM)
                </Typography>
                    </Link>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt="Remy Sharp" src="https://ui-avatars.com/api/?background=random" sx={{ width: 25, height: 25, margin: 1 }} />
                <Typography variant='body2'>Adan Khan</Typography>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
}

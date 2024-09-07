// app/posts/page.tsx
import { getPostById } from '../../../db/queries/Post/select';
import Container from '@mui/material/Container';
import Navbar from "../../../../components/navbar"
import BreadCrumbs from "../../../../components/Breadcrumbs"

export default async function Page() {
  const posts = await getPostById(1); // Fetch all posts from the database
   
  if (!posts) {
    return <div>No posts available.</div>; 
  }

  return (
    <>
    <Navbar></Navbar>
    <Container
      maxWidth={false} // Disable the default max-width
      sx={{
        maxWidth: '50%', // Set a custom max-width using percentage or any valid CSS unit
        color: 'white',  // Set text color
      }}
    >

           <BreadCrumbs></BreadCrumbs>
          <div dangerouslySetInnerHTML={{ __html: posts.content }} />
    </Container>
    </>
  );
}

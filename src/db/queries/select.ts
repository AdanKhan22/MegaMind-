import { db } from '../index'; // Ensure you have imported your database connection
import { postsTable } from '../schema'; // Adjust the import path to your schema file


export async function fetchAllPosts() {
    try {
      // Fetch all rows from the postsTable
      const allPosts = await db.select().from(postsTable);
      
      // Log the results
      console.log('All posts:', allPosts);
      return allPosts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error; 
    }
  }
  
  fetchAllPosts().catch(console.error);

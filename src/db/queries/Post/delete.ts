import { db } from '../../index';;
import {postsTable , usersTable} from "../../schema"

 export async function deleteAllPostsAndUsers ()  {
    await db.delete(postsTable);
    await db.delete(usersTable);
}

deleteAllPostsAndUsers()
  .then(() => console.log("All posts and users deleted"))
  .catch((err) => console.error("Error deleting posts and users:", err));
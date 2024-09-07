import { db } from '../../index';
import { postsTable } from '../../schema';
import { eq} from 'drizzle-orm';

export async function getPostById(id: number) {
  const result = await db
    .select({
      field1: postsTable.id,
      field2: postsTable.title,
      field3: postsTable.content,
    })
    .from(postsTable)
    .where(eq(postsTable.id , id))

  if (result.length > 0) {
    const { field1, field2, field3 } = result[0];
    return {
      id: field1,
      title: field2,
      content: field3,
    };
  } else {
    return null; // Handle case where no post is found
  }
}

export default getPostById;

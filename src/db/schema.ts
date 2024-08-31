import { db } from './index'; // Ensure this imports your database connection
import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// Define your tables
export const usersTable = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').unique().notNull(),
});

export const postsTable = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: text('created_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

// Define types
export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;

async function insertDummyData() {
  try {
    // Insert dummy users
    const insertedUsers = await db.insert(usersTable).values([
      { name: 'John Doe', age: 30, email: 'john@example.com' },
      { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    ]).returning();

    const userId1 = insertedUsers[0].id;
    const userId2 = insertedUsers[1].id;

    console.log('Inserted user IDs:', userId1, userId2);

    // Insert dummy posts with user_id
    const result = await db.insert(postsTable).values([
      {
        title: 'Introduction to SQLite with Drizzle ORM',
        content: 'SQLite is a lightweight database engine. Drizzle ORM is a modern TypeScript ORM.',
        userId: userId1,
      },
      {
        title: 'Understanding SQLite Schema Design',
        content: 'Designing a good schema is crucial for efficient database operations.',
        userId: userId1,
      },
      {
        title: 'Advanced SQL Queries with Drizzle ORM',
        content: 'Learn how to write advanced SQL queries using Drizzle ORM in TypeScript.',
        userId: userId2,
      },
      {
        title: 'Migrating from MySQL to SQLite',
        content: 'A guide to migrating your database from MySQL to SQLite using Drizzle ORM.',
        userId: userId2,
      },
      {
        title: 'Optimizing SQLite Performance',
        content: 'Tips and tricks to optimize the performance of your SQLite database.',
        userId: userId1,
      },
    ]);

    console.log('Inserted posts:', result);
  } catch (error) {
    console.error('Error inserting dummy data:', error);
  }
}

insertDummyData().catch(console.error);

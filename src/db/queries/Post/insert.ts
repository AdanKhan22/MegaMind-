import { db } from '../../index'; // Ensure this imports your database connection
import { usersTable , postsTable } from "../../schema"


export async function insertDummyData() {
  try {
    
    const insertedUsers = await db.insert(usersTable).values([
      { name: 'Adan Khan', age: 22, email: 'adanjavedkhan67@gmail.com' },
    ]).returning();

    const userId1 = insertedUsers[0].id;


    console.log('Inserted user IDs:', userId1);

    // Insert dummy posts with user_id
    const result = await db.insert(postsTable).values([
      {
        title: 'OOP Pillar #1: Abstraction',
        content: `
          <div>
            <h2>OOP Pillar #1: Abstraction</h2>
            <h3>What is Abstraction?</h3>
            <p>Abstraction is the process of hiding complex implementation details and showing only the essential features of an object. It's about creating a simplified model of a complex system.</p>
            <h4>Why Abstraction Matters:</h4>
            <ul>
              <li>Reduces complexity</li>
              <li>Improves code maintainability</li>
              <li>Allows focus on high-level functionality</li>
              <li>Promotes code reusability</li>
            </ul>
            <h4>Key Concepts:</h4>
            <ol>
              <li>
                Abstract Classes:
                <ul>
                  <li>Cannot be instantiated</li>
                  <li>May contain abstract methods (methods without a body)</li>
                  <li>Serve as a blueprint for other classes</li>
                </ul>
              </li>
              <li>
                Interfaces:
                <ul>
                  <li>Define a contract for classes to implement</li>
                  <li>Contain only abstract methods</li>
                  <li>Allow for multiple inheritance in languages like Java</li>
                </ul>
              </li>
            </ol>
            <p><strong>Real-World Analogy:</strong> Think of a car. You don't need to know how the engine works to drive it. The complexity is abstracted away, leaving you with simple controls (steering wheel, pedals, etc.).</p>
          </div>
        `,
        userId: userId1,
      }
    ]);

    console.log('Inserted posts:', result);
  } catch (error) {
    console.error('Error inserting dummy data:', error);
  }
}

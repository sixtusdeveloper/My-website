// lib/actions/user.action.ts
"use server";

import { ID } from 'node-appwrite';
import { users } from '../appwrite.config';

export const createUser = async (user: CreateUserParams) => {
    try {
        // Assuming you want to store data in a database, not users collection
        const newUser = await users.create(
            ID.unique(),
            user.name,
            user.email,
            user.phone,
            user.message
        );
        console.log({ newUser });
        return newUser;
    } catch (error) {
        console.error('An error occurred while creating a new user:', error);
        throw error; // Rethrow to handle in the form component
    }
};




// import { ID, Query } from 'node-appwrite';
// import { users } from '../appwrite.config';
// import { parseStringify } from '../utils';

// export const createUser = async (user: CreateUserParams) => {  

//    try {
//     const newUser = await users.create(
//         ID.unique(),
//         user.name, 
//         user.email, 
//         user.phone, 
//         user.message
//     );   
//     console.log({newUser});

//     return parseStringify(newUser); 
//    } catch (error: any) {
//         // Check existing user
//         if (error && error?.code === 409) {
//         const existingUser = await users.list([
//             Query.equal("email", [user.email]),
//         ]);

//         return existingUser.users[0];
//         }
//         console.error("An error occurred while creating a new user:", error);
//     }

//   }




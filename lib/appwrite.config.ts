// /lib/appwrite.config.ts
import * as sdk from 'node-appwrite';

export const {
  PROJECT_ID, API_KEY, DATABASE_ID, USER_COLLECTION_ID, 
  NEXT_PUBLIC_APPWRITE_ENDPOINT: ENDPOINT  
} = process.env;

const client = new sdk.Client();
client
  .setEndpoint(ENDPOINT!)  // Ensure ENDPOINT is valid
  .setProject(PROJECT_ID!)
  .setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);



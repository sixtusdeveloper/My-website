// /types/appwrite.types.ts
import { Models } from "node-appwrite";

export interface User extends Models.Document {
  name: string;
  email: string;
  phone: string;
  message: string;
}

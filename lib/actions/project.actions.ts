"use server";

import { Query } from "node-appwrite";
import {
  DATABASE_ID,
  databases,
  PROJECT_COLLECTION_ID,
} from "../appwrite.config";

export const getProjects = async () => {
  const documents = await databases.listDocuments(
    DATABASE_ID!,
    PROJECT_COLLECTION_ID!,
    [Query.orderDesc("$createdAt")]
  );

  return documents;
};

"use server";

import {
  databases,
  DATABASE_ID,
  ABOUT_COLLECTION_ID,
} from "../appwrite.config";

export const getAbout = async () => {
  const documents = await databases.listDocuments(
    DATABASE_ID!,
    ABOUT_COLLECTION_ID!
  );

  return documents;
};

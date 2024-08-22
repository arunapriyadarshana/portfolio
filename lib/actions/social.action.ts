"use server";

import { Query } from "node-appwrite";
import {
  DATABASE_ID,
  databases,
  SOCIAL_MEDIA_COLLECTION_ID,
} from "../appwrite.config";

export const getSocialMedia = async () => {
  const documents = await databases.listDocuments(
    DATABASE_ID!,
    SOCIAL_MEDIA_COLLECTION_ID!,
    [Query.orderAsc("catagory"), Query.orderDesc("order")]
  );
  return documents;
};

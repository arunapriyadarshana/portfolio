"use server";

import { Query } from "node-appwrite";
import {
  databases,
  DATABASE_ID,
  TECHNOLOGIES_COLLECTION_ID,
} from "../appwrite.config";

export const getTechnologies = async () => {
  const documents = await databases.listDocuments(
    DATABASE_ID!,
    TECHNOLOGIES_COLLECTION_ID!,
    [Query.orderDesc("order"), Query.equal("isVisible", true)]
  );

  return documents;
};

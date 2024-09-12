import { ENDPOINT } from "./index.service";

export const TechnologyService = {
  getTechnologies: async () => {
    try {
      const response = await fetch(`${ENDPOINT}/technologies`, {
        cache: "no-cache",
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      return response;
    } catch (error) {
      console.error("Failed to fetch technologies:", error);
    }
  },
};

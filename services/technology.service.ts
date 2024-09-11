import { ENDPOINT } from "./index.service";

export const TechnologyService = {
  getTechnologies: async () => {
    try {
      const response = await fetch(`${ENDPOINT}/tech`, {
        cache: "no-cache",
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      console.log("data", response);

      return response;
    } catch (error) {
      console.error("Failed to fetch technologies:", error);
    }
  },
};

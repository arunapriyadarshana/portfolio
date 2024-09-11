import { ENDPOINT } from "./index.service";

export const ProjectService = {

    getProjects: async () => {
        try {
        const response = await fetch(`${ENDPOINT}/projects`, {
            cache: "no-cache",
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
    
        return response;
        } catch (error) {
        console.error("Failed to fetch projects:", error);
        }
    },
}
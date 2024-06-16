import { instance } from "@/api/api.interceptors";
import { ITech } from "@/services/tech/tech.interface";

export const TechProcessService = {
    async get() {
        return await instance<ITech[]>({
            url: "tech",
            method: "GET"
        });
    },
    async getById(id: string) {
        try {
            return await instance<ITech>({
                url: `tech/${id}`,
                method: "GET"
            });
        } catch (error) {
            console.error(`Error fetching tech process with id ${id}:`, error);
            throw error;
        }
    }
};

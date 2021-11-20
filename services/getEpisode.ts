import { Episode } from "../entities/episode";
import { createFailResponse, createSuccessResponse } from "./response";

export const getEpisode = async (episodeUrl: string) => {
    try {
        const response = await fetch(episodeUrl);
        const data: Episode = await response.json();
        return createSuccessResponse(data);
    } catch (err) {
        return createFailResponse("An error occurred");
    }
};

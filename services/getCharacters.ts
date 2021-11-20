import { Result } from "../entities";
import { createFailResponse, createSuccessResponse } from "./response";

export const getCharacters = async (page: number) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data: Result = await response.json();
        return createSuccessResponse(data);
    } catch (err) {
        return createFailResponse("An error occurred");
    }
};

import { Character } from "../entities/character";
import { createFailResponse, createSuccessResponse } from "./response";

export const getSimpleCharacter = async (id: number) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data: Character = await response.json();
        return createSuccessResponse(data);
    } catch (err) {
        return createFailResponse("An error occurred");
    }
};

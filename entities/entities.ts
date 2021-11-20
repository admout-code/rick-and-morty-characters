export interface Result {
    info: Info;
    results: Character[];
}
export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
}
export interface Character {
    id: number;
    name: string;
    status: "Alive" | "Dead" | "unknown";
    species: string;
    type: string;
    gender: string;
    origin: OriginOrLocation;
    location: OriginOrLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}
export interface OriginOrLocation {
    name: string;
    url: string;
}

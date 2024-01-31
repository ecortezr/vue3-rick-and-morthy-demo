export type PageInfo = {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export type Page<T> = {
    info: PageInfo;
    results: T[];
}

export type Location = {
    name: string;
    url: string;
}

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: Date;
}

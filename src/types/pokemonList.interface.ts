export interface PokemonListItem {
    id: number;
    url: string;
}

export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}

export interface PokemonCardData {
    id: number;
    name: string;
    imageUrl: string;
    types: string[];
}
import axios from 'axios';
import { type Pokemon } from '../types/pokemon.interface';
import { type PokemonCardData, type PokemonListResponse } from '../types/pokemonList.interface';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

const extractIdFromUrl = (url: string): number => {
    const parts = url.split('/').filter(Boolean);
    return parseInt(parts[parts.length - 1], 10);
};

export const getOfficialArtworkUrl = (id: number): string => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export async function getPokemonList(limit: number = 0, offset: number = 0): Promise<PokemonCardData[]> {
    const { data } = await axios.get<PokemonListResponse>(`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);

    const cards: PokemonCardData[] = await Promise.all(
        data.results.map(async (item) => {
            const id = extractIdFromUrl(item.url);
            const details = await getPokemonById(id);
            return {        
                id: details.id,
                name: details.name,
                imageUrl: getOfficialArtworkUrl(details.id),
                types: details.types.map((t) => t.type.name)
            };
        })
    );

    return cards;
};

export async function getPokemonById(id: number): Promise<Pokemon> {
    const { data } = await axios.get(`${API_BASE_URL}/pokemon/${id}`);
    return data;
}

export async function getPokemonByName(name: string): Promise<PokemonCardData> {
    const { data } = await axios.get<Pokemon>(`${API_BASE_URL}/pokemon/${name}`);
    return {
        id: data.id,
        name: data.name,
        imageUrl: getOfficialArtworkUrl(data.id),
        types: data.types.map((t) => t.type.name)
    };
}

export async function getPokemonTypes(): Promise<string[]> {
    const { data } = await axios.get(`${API_BASE_URL}/type`);
    return data.results.map((t: { name: string }) => t.name);
}

export async function getPokemonByType(type: string): Promise<PokemonCardData[]> {
    const { data } = await axios.get(`${API_BASE_URL}/type/${type}`);
    const cards: PokemonCardData[] = await Promise.all(
        data.pokemon.map(async (p: { pokemon: { name: string; url: string } }) => {
            const id = extractIdFromUrl(p.pokemon.url);
            const details = await getPokemonById(id);
            return {
                id: details.id,
                name: details.name,
                imageUrl: getOfficialArtworkUrl(details.id),
                types: details.types.map((t) => t.type.name)
            };
        })
    );
    return cards;
}
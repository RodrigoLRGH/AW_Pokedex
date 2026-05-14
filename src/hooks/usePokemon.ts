import { useEffect, useState } from 'react';
import { getPokemonList, getPokemonById } from '../services/pokemonService';
import { type PokemonCardData } from '../types/pokemonList.interface';
import type { Pokemon } from '@/types/pokemon.interface';

export function usePokemonList(limit: number = 25) {
    const [pokemon, setPokemon] = useState<PokemonCardData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        const load = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getPokemonList(limit);
                if (!cancelled) {
                    setPokemon(data);
                }
            } catch (error) {
                if (!cancelled)
                    setError('Fallo la carga de pokemones');
            }
            finally {
                if (!cancelled)
                    setLoading(false);
            }
        };

        load();
        return () => {
            cancelled = true;
        };
    }, [limit]);

    return { pokemon, loading, error };
}

export function usePokemon(id: number) {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        const load = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getPokemonById(id);
                if (!cancelled)
                    setPokemon(data);
            } catch (error) {
                if (!cancelled)
                    setError('Fallo la carga de detalles del pokemon');
            }
            finally {
                if (!cancelled)
                    setLoading(false);
            }
        };

        load();
        return () => {
            cancelled = true;
        };
    }, [id]);

    return { pokemon, loading, error };
}
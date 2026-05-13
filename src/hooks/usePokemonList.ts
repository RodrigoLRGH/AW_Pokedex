import { useEffect, useState } from 'react';
import { getPokemonList } from '../services/pokemonService';
import { type PokemonCardData } from '../types/pokemon';

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



import { useEffect, useState } from 'react';
import { getPokemonByName } from '../services/pokemonService';
import { type PokemonCardData } from '../types/pokemonList.interface';

export function useSearchPokemon(name: string) {
    const [results, setResults] = useState<PokemonCardData[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!name.trim()) {
            setResults([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        const timer = setTimeout(async () => {
            try {
                const pokemon = await getPokemonByName(name.trim().toLowerCase());
                setResults(pokemon ? [pokemon] : []);
            } catch {
                setResults([]);
            } finally {
                setLoading(false);
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [name]);

    return { results, loading };
}

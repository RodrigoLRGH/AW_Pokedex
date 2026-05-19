import { useEffect, useState } from 'react';
import { getPokemonById } from '../services/pokemonService';
import type { Pokemon } from '@/types/pokemon.interface';
import { usePokemonStore } from '@/store/pokemonStore';

export function usePokemon() {
    const { pokemon, loading, error, hasMore, loadMore, loadByType } = usePokemonStore();

    useEffect(() => {
        if (pokemon.length === 0 && !loading) {
            loadMore();
        }
    }, [pokemon.length]);

    return { pokemon, loading, error, hasMore, loadMore, loadByType };
}

export function usePokemonDetail(id: number) {
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
            } catch {
                if (!cancelled)
                    setError('Falló la carga de detalles del pokémon');
            } finally {
                if (!cancelled)
                    setLoading(false);
            }
        };

        load();
        return () => { cancelled = true; };
    }, [id]);

    return { pokemon, loading, error };
}
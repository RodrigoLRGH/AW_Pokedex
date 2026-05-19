import { create } from 'zustand';
import { getPokemonList } from '../services/pokemonService';
import { type PokemonCardData } from '../types/pokemonList.interface';
import { getPokemonByType } from '../services/pokemonService';

interface PokemonStore {
    pokemon: PokemonCardData[];
    loading: boolean;
    error: string | null;
    offset: number;
    hasMore: boolean;
    loadMore: () => Promise<void>;
    reset: () => void;
    loadByType: (type: string) => Promise<void>;
    loadedType: string | null;
}

export const usePokemonStore = create<PokemonStore>((set, get) => ({
    pokemon: [],
    loading: false,
    error: null,
    hasMore: true,
    offset: 0,
    loadedType: null,

    loadMore: async () => {
        const { loading, hasMore, offset, pokemon, loadedType } = get();
        if (loading || !hasMore || loadedType) return;
        try {
            set({ loading: true, error: null });
            const data = await getPokemonList(20, offset);
            set({
                pokemon: [...pokemon, ...data],
                offset: offset + 20,
                hasMore: data.length === 20,
                loading: false
            });
        } catch {
            set({ error: 'Fallo la carga de pokemones', loading: false });
        }
    },

    loadByType: async (type: string) => {
        const { loading, loadedType } = get();

        if (type === 'all') {
            set({ loadedType: null, hasMore: true, pokemon: [], offset: 0 });
            return;
        }

        if (loading || loadedType === type) return;
        try {
            set({ loading: true, error: null });
            const data = await getPokemonByType(type);
            set({ pokemon: data, loadedType: type, loading: false, hasMore: false });
        } catch {
            set({ error: 'Fallo la carga de pokemones', loading: false });
        }
    },

    reset: () => set({ pokemon: [], offset: 0, hasMore: true, error: null, loadedType: null })
}));
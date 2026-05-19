import { create } from 'zustand';
import { getFavorites, addFavorite } from '../storage/favorites';

interface FavoritesStore {
    favorites: number[];
    toggleFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
    favorites: getFavorites(),
    toggleFavorite: (id: number) => {
        const { favorites } = get();
        const isFav = favorites.includes(id) ? favorites.filter(favId => favId !== id) : [...favorites, id];
        addFavorite(isFav);
        set({ favorites: isFav });
    },
    isFavorite: (id: number) => {
        return get().favorites.includes(id);
    }
}));
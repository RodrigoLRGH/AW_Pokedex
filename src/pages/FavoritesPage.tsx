import { useEffect, useState } from 'react';
import { useFavoritesStore } from '@/store/favoritesStore';
import { getPokemonById } from '@/services/pokemonService';
import { getOfficialArtworkUrl } from '@/services/pokemonService';
import PokemonCard from '@/components/PokemonCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { type PokemonCardData } from '@/types/pokemonList.interface';
import { LucideLoader } from 'lucide-react';

function FavoritesPage() {
    const { favorites } = useFavoritesStore();
    const navigate = useNavigate();
    const [favoritePokemon, setFavoritePokemon] = useState<PokemonCardData[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (favorites.length === 0) {
            setFavoritePokemon([]);
            return;
        }
        setLoading(true);
        Promise.all(
            favorites.map(async (id) => {
                const data = await getPokemonById(id);
                return {
                    id: data.id,
                    name: data.name,
                    imageUrl: getOfficialArtworkUrl(data.id),
                    types: data.types.map((t) => t.type.name)
                } as PokemonCardData;
            })
        ).then(setFavoritePokemon).finally(() => setLoading(false));
    }, [favorites]);

    return (
        <>
            <div className="container mx-auto px-4 py-6">
                <nav className="relative mb-6">
                    <h1 className="text-3xl font-bold text-center">
                        Mis pokemones favoritos
                    </h1>
                    <Button variant="outline" onClick={() => navigate('/catalog')}>
                        Volver al catálogo
                    </Button>
                </nav>
                {loading && (
                    <p className="text-center py-12 flex justify-center">
                        <LucideLoader className="animate-spin" />
                    </p>
                )}
                {!loading && favoritePokemon.length === 0 && (
                    <p className="text-gray-500">Aun no tienes pokemones favoritos...</p>
                )}
                {!loading && favoritePokemon.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {favoritePokemon.map(p => (
                            <PokemonCard key={p.id} pokemon={p} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default FavoritesPage;
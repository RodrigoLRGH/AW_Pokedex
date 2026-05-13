import { usePokemonList } from '../hooks/usePokemonList';
import PokemonCard from '../components/PokemonCard';

function PokemonCatalog() {
    const { pokemon, loading, error } = usePokemonList();

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Lista de Pokémon
            </h1>

            {error ? (
                <p className="text-destructive text-center py-12">
                    {error}
                </p>
            ) : loading ? (
                <p className="text-center py-12">
                    Loading Pokémon...
                </p>
            ) : (
                <div className="flex flex-wrap justify-center gap-6">
                    {pokemon.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default PokemonCatalog;
import PokemonCard from '../components/PokemonCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button } from '@/components/ui/button';
import { useCatalog } from '@/hooks/useCatalog';
import { useNavigate } from 'react-router-dom';
import CatalogFilters from '../components/CatalogFilters';
import { LucideLoader } from 'lucide-react';

function PokemonCatalog() {
    const {
        displayList, error, hasMore, loadMore, types,
        search, setSearch, selectedType, setSelectedType, isSearching,
        pokemonLength} = useCatalog();
    const navigate = useNavigate();

    return (
        <>
            <div className="container mx-auto px-4 py-6">
                <nav className="relative mb-6">
                    <h1 className="text-3xl font-bold text-center">
                        Lista de Pokémon
                    </h1>

                    <Button
                        variant="outline"
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                        onClick={() => navigate('/favorites')}>
                        Favoritos
                    </Button>
                </nav>

                <CatalogFilters search={search} onSearchChange={setSearch} selectedType={selectedType} onTypeChange={setSelectedType} types={types} isSearching={isSearching} />

                {error && (
                    <p className="text-destructive text-center py-12">
                        {error}
                    </p>
                )}

                {displayList.length === 0 && !error && (
                    <p className="text-center py-12">
                        No se encontraron Pokémon que coincidan con los criterios de búsqueda.
                    </p>
                )}

                <InfiniteScroll
                    dataLength={pokemonLength}
                    next={loadMore}
                    hasMore={hasMore}
                    loader={
                        <p className="text-center py-4 flex justify-center">
                            <LucideLoader className="animate-spin" />
                        </p>
                    }>
                    <div className="flex flex-wrap justify-center gap-4 mt-5">
                        {displayList.map((pokemon) => (
                            <PokemonCard key={pokemon.id} pokemon={pokemon} />
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    );
}

export default PokemonCatalog;
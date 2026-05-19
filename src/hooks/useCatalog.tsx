import { useEffect, useState } from 'react';
import { usePokemon } from './usePokemon';
import { useTypeList } from './useTypeList';
import { useSearchPokemon } from './useSearchPokemon';
export function useCatalog() {
    const { pokemon, error, hasMore, loadMore, loadByType } = usePokemon();
    const { types } = useTypeList();
    const [search, setSearch] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const { results: searchResults, loading: searchLoading } = useSearchPokemon(search);

    const isSearching = !!search.trim();
    const isFiltering = selectedType !== 'all';

    useEffect(() => {
        if (selectedType !== 'all') {
            loadByType(selectedType);
        } else {
            loadByType('all');
        }
    }, [selectedType]);

    const localMatches = search.trim()
        ? pokemon.filter((p) =>
            p.name.toLowerCase().includes(search.trim().toLowerCase()) &&
            (selectedType === 'all' ? true : p.types.includes(selectedType))
        ) : [];

    const isLoadingSearch = isSearching && localMatches.length === 0 && searchLoading;

    const displayList = (() => {
        if (!search.trim()) {
            return pokemon.filter((p) =>
                selectedType === 'all' ? true : p.types.includes(selectedType)
            );
        }
        if (localMatches.length > 0) return localMatches;
        return searchResults.filter((p) =>
            selectedType === 'all' ? true : p.types.includes(selectedType)
        );
    })();

    return {
        displayList,
        error,
        hasMore: !isSearching && (isFiltering ? false : hasMore),
        loadMore,
        types,
        search,
        setSearch,
        selectedType,
        setSelectedType,
        searchLoading: isLoadingSearch,
        isSearching,
        isFiltering,
        pokemonLength: pokemon.length
    };
}
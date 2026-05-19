import { useEffect, useState } from 'react';
import { getPokemonTypes } from '../services/pokemonService';

export function useTypeList() {
    const [types, setTypes] = useState<string[]>([]);

    useEffect(() => {
        getPokemonTypes().then((data) => {
            const filtered = data.filter((name) => !['unknown', 'shadow'].includes(name));
            setTypes(filtered);
        })
    }, []);

    return { types };
}
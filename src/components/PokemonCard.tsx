import { useNavigate } from 'react-router';
import type { PokemonCardData } from '../types/pokemonList.interface';
import { getTypeColor } from '../utils/pokemonUtils';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
    pokemon: PokemonCardData;
}

function PokemonCard({ pokemon }: Props) {
    const navigate = useNavigate();
    const typeColor = getTypeColor(pokemon.types[0]);
    if (!pokemon) return null;
    
    return (
        <>
            <Card className="w-52 rounded-xl shadow-md transition hover:scale-105"
                onClick={() => navigate(`/pokemon/${pokemon.id}`)}
                style={{ backgroundColor: `${typeColor}70` }}>
                <CardContent className="p-4 flex flex-col items-center">
                    <span className="text-xl text-black-500 self-end">
                        #{pokemon.id.toString()}
                    </span>

                    <img src={pokemon.imageUrl} alt={pokemon.name} className="w-24 h-24 object-contain" />

                    <h2 className="text-lg font-bold capitalize mt-2">
                        {pokemon.name}
                    </h2>

                    <div className="flex gap-2 mt-2 flex-wrap justify-center">
                        {pokemon.types.map((type) => (
                            <span
                                key={type}
                                className="px-2 py-1 rounded-full text-white text-xs"
                                style={{ backgroundColor: getTypeColor(type) }}>
                                {type}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default PokemonCard;
import { type Pokemon } from '../types/pokemon.interface';
import { getTypeColor } from '../utils/pokemonUtils';

interface Props {
    pokemon: Pokemon;
}

function PokemonHeader({ pokemon }: Props) {
    const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    const typeColor = getTypeColor(pokemon.types[0].type.name);

    return (
        <>
            <div className="border-b px-6 py-5 flex flex-wrap gap-6 items-start" style={{ backgroundColor: `${typeColor}70` }}>
                <img src={artworkUrl} alt={pokemon.name} className="w-50 h-50 object-contain mx-auto drop-shadow-md" />

                <div className="flex-1 min-w-75">

                    <h1 className="text-2xl font-bold pb-4">#{pokemon.id} - {pokemon.name}</h1>

                    <div className="flex gap-2 flex-wrap mb-4">
                        {pokemon.types.map((type) => (
                            <span
                                className="px-2 py-1 rounded-full text-black text-xs font-medium"
                                style={{ backgroundColor: getTypeColor(type.type.name) }}>
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2 border border-neutral-800 rounded-lg p-4"
                        style={{ backgroundColor: `${typeColor}50` }}>
                        <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm">Altura</p>
                            <p className="text-lg font-bold">{pokemon.height / 10} m</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm">Peso</p>
                            <p className="text-lg font-bold">{pokemon.weight / 10} kg</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm">Experiencia base</p>
                            <p className="text-lg font-bold">{pokemon.base_experience}</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm">Orden</p>
                            <p className="text-lg font-bold">{pokemon.order}</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm">Default</p>
                            <p className="text-lg font-bold">{pokemon.is_default ? 'Sí' : 'No'}</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm">Especie</p>
                            <p className="text-lg font-bold">{pokemon.species.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonHeader;
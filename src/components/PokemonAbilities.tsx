import { type Pokemon } from "../types/pokemon.interface";
import { getTypeColor } from "../utils/pokemonUtils";
import { Card, CardContent} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PokemonAbilitiesProps {
    pokemon: Pokemon;
}

function PokemonAbilities({ pokemon }: PokemonAbilitiesProps) {
    const typeColor = getTypeColor(pokemon.types[0].type.name);

    return (
        <>
            <Card>
                        <CardContent className="p-4">
                            <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5">
                                Habilidades
                            </p>
                            {pokemon.abilities.map((ability) => (
                                <div key={ability.ability?.name}
                                    className="flex justify-between items-center py-1.5 border-b">
                                    <span className="text-sm capitalize">{ability.ability?.name}</span>
                                    <div className="flex items-center gap-2">
                                        {ability.is_hidden && (
                                            <span className="text-sm px-1.5 py-0.5 rounded-full"
                                                style={{ backgroundColor: `${typeColor}` }}>
                                                Oculta
                                            </span>
                                        )}
                                        <Badge variant="outline">Slot {ability.slot}</Badge>
                                    </div>
                                </div>
                            ))}

                            <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5 pt-4">
                                Tipos
                            </p>
                            {pokemon.types.map(({ slot, type }) => (
                                <div key={slot} className="flex justify-between items-center py-1.5 border-b">
                                    <span style={{ backgroundColor: getTypeColor(type.name) }}
                                        className="px-2 py-1 rounded-full text-black text-xs">
                                        {type.name}
                                    </span>
                                    <Badge variant="outline">{slot}</Badge>
                                </div>
                            ))}

                            <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5 pt-4">
                                Datos generales
                            </p>
                            <div>
                                <div className="flex justify-between items-center py-1.5 border-b">
                                    <span className="text-sm capitalize">ID</span>
                                    <Badge variant="outline">{pokemon.id}</Badge>
                                </div>

                                <div className="flex justify-between items-center py-1.5 border-b">
                                    <p className="text-sm">Nombre</p>
                                    <Badge variant="outline">{pokemon.name}</Badge>
                                </div>

                                <div className="flex justify-between items-center py-1.5 border-b">
                                    <p className="text-sm">Orden</p>
                                    <Badge variant="outline">{pokemon.order}</Badge>
                                </div>

                                <div className="flex justify-between items-center py-1.5 border-b">
                                    <p className="text-sm">Default</p>
                                    <Badge variant="outline">{pokemon.is_default ? 'Sí' : 'No'}</Badge>
                                </div>

                                <div className="flex justify-between items-center py-1.5 border-b">
                                    <p className="text-sm">Especie</p>
                                    <Badge variant="outline">{pokemon.species?.name}</Badge>
                                </div>

                                <div className="flex justify-between items-center py-1.5 border-b">
                                    <p className="text-sm">Altura</p>
                                    <Badge variant="outline">{pokemon.height / 10} m</Badge>
                                </div>

                                <div className="flex justify-between items-center py-1.5 border-b">
                                    <p className="text-sm">Peso</p>
                                    <Badge variant="outline">{pokemon.weight / 10} kg</Badge>
                                </div>

                                <div className="flex justify-between items-center py-1.5 border-b">
                                    <p className="text-sm">Experiencia base</p>
                                    <Badge variant="outline">{pokemon.base_experience}</Badge>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
        </>
    )
}

export default PokemonAbilities;
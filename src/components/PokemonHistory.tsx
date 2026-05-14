import { type Pokemon } from "../types/pokemon.interface";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PokemonHistoryProps {
    pokemon: Pokemon;
}

function PokemonHistory({ pokemon }: PokemonHistoryProps) {

    return (
        <>
            <Card>
                <CardContent className="p-4">
                    <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5">
                        Habilidades pasadas
                    </p>

                    {pokemon.past_abilities.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No hay datos históricos disponibles.</p>
                    ) : (
                        pokemon.past_abilities.map((pastAbility, index) => (
                            <div key={index} className="flex justify-between items-center border-b">
                                <p className="text-sm font-medium mb-1">{pastAbility.generation.name}</p>
                                {pokemon.abilities.map((ability) => (
                                    <div className="bg-muted p-4 rounded-lg">
                                        <p className="text-sm">{ability.ability?.name}</p>
                                        <Badge variant="outline">{ability.is_hidden ? 'Oculta' : `slot ${ability.slot}`}</Badge>
                                    </div>
                                ))}
                            </div>
                        ))
                    )}
                    <p className="text-sm font-medium uppercase mt-4 mb-3 flex items-center gap-1.5">
                        Estadisticas pasadas
                    </p>

                    {pokemon.past_stats.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No hay datos históricos disponibles.</p>
                    ) : (
                        pokemon.past_stats.map((pastStat, index) => (
                            <div key={index} className="flex justify-between items-center border-b">
                                <p className="text-sm font-medium mb-1">{pastStat.generation.name}</p>
                                {pastStat.stats.map((stat) => (
                                    <div className="bg-muted p-4 rounded-lg">
                                        <p className="text-sm">{stat.stat.name}</p>
                                        <Badge variant="outline">{stat.base_stat}</Badge>
                                    </div>
                                ))}
                            </div>
                        ))
                    )}

                </CardContent>
            </Card>
        </>
    )
}

export default PokemonHistory;
import { type Pokemon } from "../types/pokemon.interface";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "./ui/badge";

interface PokemonMovesProps {
    pokemon: Pokemon;
}

function PokemonMoves({ pokemon }: PokemonMovesProps) {
    return (
        <>
            <Card>
                <CardContent className="p-4">
                    <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5">
                        Movimientos
                    </p>
                    {pokemon.moves.map(({ move, version_group_details }) => (
                        <div className="flex justify-between items-center py-1.5 border-b" key={move.name}>
                            <span className="text-sm capitalize">{move.name}</span>
                            <div className="text-right">
                                <p className="text-xs capitalize">
                                    {version_group_details[0]?.move_learn_method.name}
                                </p>
                                {version_group_details[0]?.level_learned_at > 0 && (
                                    <Badge variant="outline">
                                        Nivel: {version_group_details[0]?.level_learned_at}
                                    </Badge>
                                )}
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </>
    )
}

export default PokemonMoves;
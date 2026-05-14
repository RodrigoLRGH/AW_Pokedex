import { type Pokemon } from "../types/pokemon.interface";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "./ui/badge";

interface PokemonGameIndicesProps {
    pokemon: Pokemon;
}

function PokemonGameIndices({ pokemon }: PokemonGameIndicesProps) {
    return (
        <>
            <Card>
                <CardContent className="p-4">
                    <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5">
                        Indices de juego
                    </p>
                    {pokemon.game_indices.map(({ game_index, version }) => (
                        <div className="flex justify-between items-center py-1.5 border-b" key={version.name}>
                            <span className="text-sm capitalize">{version.name}</span>
                            <Badge variant="outline">{game_index}</Badge>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </>
    )
}

export default PokemonGameIndices;
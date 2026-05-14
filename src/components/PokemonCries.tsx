import { type Pokemon } from "../types/pokemon.interface";
import { Card, CardContent } from "@/components/ui/card";

interface PokemonAbilitiesProps {
    pokemon: Pokemon;
}

function PokemonCries({ pokemon }: PokemonAbilitiesProps) {

    return (
        <>
            <Card>
                <CardContent className="p-4">
                    <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5">
                        Gritos
                    </p>
                    <div className="flex flex-col gap-3">
                        {pokemon.cries.latest && (
                            <div>
                                <p className="text-sm pb-2">Grito actual</p>
                                <audio controls src={pokemon.cries.latest}
                                    className="h-8 w-full" aria-label={`Grito actual`} />
                            </div>
                        )}
                        <hr className="my-4" />
                        {pokemon.cries.legacy && (
                            <div>
                                <p className="text-sm pb-2">Grito legado</p>
                                <audio controls src={pokemon.cries.legacy}
                                    className="h-8 w-full" aria-label={`Grito legado`} />
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default PokemonCries;
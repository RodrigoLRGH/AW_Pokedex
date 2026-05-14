import { type Pokemon } from "../types/pokemon.interface";
import { Card, CardContent } from "@/components/ui/card";

interface PokemonHeldItemsProps {
    pokemon: Pokemon;
}

function PokemonHeldItems({ pokemon }: PokemonHeldItemsProps) {
    return (
        <>
            <Card>
                <CardContent>
                    <p className="text-sm font-medium uppercase mt-4 mb-3 flex items-center gap-1.5">
                        Held Items
                    </p>
                    {pokemon.held_items.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No tiene objetos equipados.</p>
                    ) : (
                        <div className="grid grid-cols-2 gap-3">
                            {pokemon.held_items.map((item, index) => (
                                <div key={index} className="bg-muted p-4 rounded-lg flex flex-col border *:border-border">
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.item.name}.png`} alt={item.item.name} className="w-10 h-10 mt-2" />
                                    <p className="text-sm">{item.item.name}</p>
                                    <p className="text-lg font-bold">Rarity: {item.version_details[0]?.rarity}</p>
                                    <p className="text-sm text-muted-foreground">Version: {item.version_details[0]?.version.name}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </>
    )
}

export default PokemonHeldItems;
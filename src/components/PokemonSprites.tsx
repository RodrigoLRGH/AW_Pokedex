import { type Pokemon } from "../types/pokemon.interface";
import { getTypeColor } from "../utils/pokemonUtils";
import { Card, CardContent } from "@/components/ui/card";

interface PokemonSpritesProps {
    pokemon: Pokemon;
}

function PokemonSprites({ pokemon }: PokemonSpritesProps) {
    const typeColor = getTypeColor(pokemon.types[0].type.name);
    return (
        <>
            <Card>
                        <CardContent className="p-4">
                            <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5">
                                Formas
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {pokemon.forms.map((form) => (
                                    <span key={form.name} className="px-2 py-1 rounded-full text-black text-xs"
                                        style={{ backgroundColor: `${typeColor}` }}>
                                        {form.name}
                                    </span>
                                ))}
                            </div>

                            <hr className="my-4" />

                            <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5">Sprites</p>
                            <div className="grid grid-cols-4 gap-2 mb-4">
                                {[
                                    { url: pokemon.sprites.front_default, label: 'Frontal' },
                                    { url: pokemon.sprites.back_default, label: 'Trasera' },
                                    { url: pokemon.sprites.front_shiny, label: 'Frontal Shiny' },
                                    { url: pokemon.sprites.back_shiny, label: 'Trasera Shiny' },
                                ].map(({ url, label }) => (
                                    url ? (
                                        <div key={label} className="flex flex-col items-center">
                                            <img src={url} alt={`${pokemon.name} ${label}`} className="w-16 h-16 object-contain" />
                                            <span className="text-xs mt-1">{label}</span>
                                        </div>
                                    ) : null
                                ))}
                            </div>

                            <hr className="my-4" />


                            <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5">Artwork Oficial</p>
                            <div className="grid grid-cols-4 gap-2 mb-4">
                                {[
                                    { url: pokemon.sprites.other?.['official-artwork'].front_default, label: 'Frontal' },
                                    { url: pokemon.sprites.other?.['official-artwork'].front_shiny, label: 'Frontal Shiny' },
                                ].map(({ url, label }) => (
                                    url ? (
                                        <div key={label} className="flex flex-col items-center">
                                            <img src={url} alt={`${pokemon.name} ${label}`} className="w-16 h-16 object-contain" />
                                            <span className="text-xs mt-1">{label}</span>
                                        </div>
                                    ) : null
                                ))}
                            </div>

                        </CardContent>
                    </Card>
        </>
    )
}

export default PokemonSprites;
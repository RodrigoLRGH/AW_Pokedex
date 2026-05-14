import { type Pokemon } from "../types/pokemon.interface";
import { Card, CardContent } from "@/components/ui/card";

interface PokemonGameIndicesProps {
    pokemon: Pokemon;
}

function PokemonGameIndices({ pokemon }: PokemonGameIndicesProps) {
    const genI = pokemon?.sprites.versions?.['generation-i'];
    const genII = pokemon?.sprites.versions?.['generation-ii'];
    const genIII = pokemon?.sprites.versions?.['generation-iii'];
    const genIV = pokemon?.sprites.versions?.['generation-iv'];
    const genV = pokemon?.sprites.versions?.['generation-v'];
    const genVI = pokemon?.sprites.versions?.['generation-vi'];
    const genVII = pokemon?.sprites.versions?.['generation-vii'];
    const genVIII = pokemon?.sprites.versions?.['generation-viii'];
    const genIX = pokemon?.sprites.versions?.['generation-ix'];

    return (
        <>
            <Card>
                <CardContent className="p-4">
                    <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5">
                        Sprites por Generacion
                    </p>
                    <p className="text-xs font-semibold uppercase mt-3 mb-2">Generacion I</p>
                    <div className="flex flex-wrap gap-4">
                        {
                            genI && Object.entries(genI).map(([version, sprite]) => (
                                <div>
                                    <p className="text-sm capitalize">{version}</p>
                                    <div className="flex gap-2">
                                        {sprite.front_default && <img src={sprite.front_default} alt={`${pokemon.name} ${version} frontal`} className="w-16 h-16 object-contain" />}
                                        {sprite.back_default && <img src={sprite.back_default} alt={`${pokemon.name} ${version} trasera`} className="w-16 h-16 object-contain" />}
                                    </div>
                                </div>
                            ))}
                    </div>

                    <hr className="my-4" />

                    <p className="text-xs font-semibold uppercase mt-3 mb-2">Generacion II</p>
                    <div className="flex flex-wrap gap-4">
                        {
                            genII && Object.entries(genII).map(([version, sprite]) => (
                                <div>
                                    <p className="text-sm capitalize">{version}</p>
                                    <div className="flex gap-2">
                                        {sprite.front_default && <img src={sprite.front_default} alt={`${pokemon.name} ${version} frontal`} className="w-16 h-16 object-contain" />}
                                        {sprite.back_default && <img src={sprite.back_default} alt={`${pokemon.name} ${version} trasera`} className="w-16 h-16 object-contain" />}
                                    </div>
                                </div>
                            ))}
                    </div>

                    <hr className="my-4" />

                    <p className="text-xs font-semibold uppercase mt-3 mb-2">Generacion III</p>
                    <div className="flex flex-wrap gap-4">
                        {
                            genIII && Object.entries(genIII).map(([version, sprite]) => (
                                <div>
                                    <p className="text-sm capitalize">{version}</p>
                                    <div className="flex gap-2">
                                        {sprite.front_default && <img src={sprite.front_default} alt={`${pokemon.name} ${version} frontal`} className="w-16 h-16 object-contain" />}
                                        {sprite.back_default && <img src={sprite.back_default} alt={`${pokemon.name} ${version} trasera`} className="w-16 h-16 object-contain" />}
                                    </div>
                                </div>
                            ))}
                    </div>

                    <hr className="my-4" />

                    <p className="text-xs font-semibold uppercase mt-3 mb-2">Generacion IV</p>
                    <div className="flex flex-wrap gap-4">
                        {
                            genIV && Object.entries(genIV).map(([version, sprite]) => (
                                <div>
                                    <p className="text-sm capitalize">{version}</p>
                                    <div className="flex gap-2">
                                        {sprite.front_default && <img src={sprite.front_default} alt={`${pokemon.name} ${version} frontal`} className="w-16 h-16 object-contain" />}
                                        {sprite.back_default && <img src={sprite.back_default} alt={`${pokemon.name} ${version} trasera`} className="w-16 h-16 object-contain" />}
                                    </div>
                                </div>
                            ))}
                    </div>

                    <hr className="my-4" />

                    <p className="text-xs font-semibold uppercase mt-3 mb-2">Generacion V</p>
                    <div className="flex flex-wrap gap-4">
                        {
                            genV && Object.entries(genV).map(([version, sprite]) => (
                                <div>
                                    <p className="text-sm capitalize">{version}</p>
                                    <div className="flex gap-2">
                                        {sprite.front_default && <img src={sprite.front_default} alt={`${pokemon.name} ${version} frontal`} className="w-16 h-16 object-contain" />}
                                        {sprite.back_default && <img src={sprite.back_default} alt={`${pokemon.name} ${version} trasera`} className="w-16 h-16 object-contain" />}
                                    </div>
                                </div>
                            ))}
                    </div>

                    <hr className="my-4" />

                    <p className="text-xs font-semibold uppercase mt-3 mb-2">Generacion VI</p>
                    <div className="flex flex-wrap gap-4">
                        {
                            genVI && Object.entries(genVI).map(([version, sprite]) => (
                                <div>
                                    <p className="text-sm capitalize">{version}</p>
                                    <div className="flex gap-2">
                                        {sprite.front_default && <img src={sprite.front_default} alt={`${pokemon.name} ${version} frontal`} className="w-16 h-16 object-contain" />}
                                    </div>
                                </div>
                            ))}
                    </div>

                    <hr className="my-4" />

                    <p className="text-xs font-semibold uppercase mt-3 mb-2">Generacion VII</p>
                    <div className="flex flex-wrap gap-4">
                        {
                            genVII && Object.entries(genVII).map(([version, sprite]) => (
                                <div>
                                    <p className="text-sm capitalize">{version}</p>
                                    <div className="flex gap-2">
                                        {sprite.front_default && <img src={sprite.front_default} alt={`${pokemon.name} ${version} frontal`} className="w-16 h-16 object-contain" />}
                                        {sprite.back_default && <img src={sprite.back_default} alt={`${pokemon.name} ${version} trasera`} className="w-16 h-16 object-contain" />}
                                    </div>
                                </div>
                            ))}
                    </div>

                    <hr className="my-4" />

                    <p className="text-xs font-semibold uppercase mt-3 mb-2">Generacion VIII</p>
                    <div className="flex flex-wrap gap-4">
                        {
                            genVIII && Object.entries(genVIII).map(([version, sprite]) => (
                                <div>
                                    <p className="text-sm capitalize">{version}</p>
                                    <div className="flex gap-2">
                                        {sprite.front_default && <img src={sprite.front_default} alt={`${pokemon.name} ${version} frontal`} className="w-16 h-16 object-contain" />}
                                        {sprite.back_default && <img src={sprite.back_default} alt={`${pokemon.name} ${version} trasera`} className="w-16 h-16 object-contain" />}
                                    </div>
                                </div>
                            ))}
                    </div>

                    <hr className="my-4" />

                    <p className="text-xs font-semibold uppercase mt-3 mb-2">Generacion IX</p>
                    <div className="flex flex-wrap gap-4">
                        {
                            genIX && Object.entries(genIX).map(([version, sprite]) => (
                                <div>
                                    <p className="text-sm capitalize">{version}</p>
                                    <div className="flex gap-2">
                                        {sprite.front_default && <img src={sprite.front_default} alt={`${pokemon.name} ${version} frontal`} className="w-16 h-16 object-contain" />}
                                        {sprite.back_default && <img src={sprite.back_default} alt={`${pokemon.name} ${version} trasera`} className="w-16 h-16 object-contain" />}
                                    </div>
                                </div>
                            ))}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default PokemonGameIndices;
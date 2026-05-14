import { useParams, useNavigate } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';
import { Button } from '@/components/ui/button';
import { getTypeColor } from '../utils/pokemonUtils';
import PokemonHeader from '@/components/PokemonHeader';
import PokemonStats from '@/components/PokemonStats';
import PokemonAbilities from '@/components/PokemonAbilities';
import PokemonSprites from '@/components/PokemonSprites';
import PokemonCries from '@/components/PokemonCries';
import PokemonHistory from '@/components/PokemonHistory';
import PokemonHeldItems from '@/components/PokemonHeldItems';
import PokemonMoves from '@/components/PokemonMoves';
import PokemonGameIndices from '@/components/PokemonGameIndices';
import PokemonSpritesHistory from '@/components/PokemonSpritesHistory';
function PokemonDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { pokemon, loading, error } = usePokemon(Number(id));

    if (loading)
        return <p className='text-center py-12 text-muted-foreground'>Loading...</p>;

    if (error)
        return <p className='text-center py-12 text-destructive'>{error}</p>;
    if (!pokemon)
        return <p className='text-center py-12 text-destructive'>Pokemon no encontrado</p>;

    const typeColor = getTypeColor(pokemon.types[0].type.name);

    return (
        <>
            <div className="min-h-screen bg-muted/40">
                <nav className="bg-background shadow px-8 py-4 flex justify-between items-center">
                    <Button variant="ghost" onClick={() => navigate('/catalog')}>
                        Volver al catálogo
                    </Button>
                </nav>

                <PokemonHeader pokemon={pokemon} />
                <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col gap-6">
                    <PokemonStats stat={pokemon.stats} />
                    <PokemonAbilities pokemon={pokemon} />
                    <PokemonSprites pokemon={pokemon} />
                    <PokemonCries pokemon={pokemon} />
                    <PokemonHistory pokemon={pokemon} />
                    <PokemonHeldItems pokemon={pokemon} />
                    <PokemonGameIndices pokemon={pokemon} />
                    <PokemonSpritesHistory pokemon={pokemon} />
                    <PokemonMoves pokemon={pokemon} />
                </div>

            </div>
        </>
    )
}

export default PokemonDetail;
import { type Stat } from "../types/pokemon.interface";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface Props {
    stat: Stat[];
}

function PokemonStats({ stat }: Props) {
    const total = stat.reduce((acc, curr) => acc + curr.base_stat, 0);
    return (
        <>
            <Card>
                <CardContent className="p-4">
                    <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5">
                        Estadisticas Base
                    </p>
                    {stat.map((stat) => (
                        <div key={stat.stat.name} className="flex justify-between items-center py-1.5 border-b border-border last:border-0">
                            <span className="capitalize">{stat.stat.name}</span>
                            <Badge variant="outline">{stat.base_stat}</Badge>
                        </div>
                    ))}
                    <div className="flex justify-between items-center py-1.5 border-b">
                        <span className="font-bold">Total</span>
                        <Badge variant="outline">
                            {total}
                        </Badge>
                    </div>
                    <p className="text-sm font-medium uppercase mb-3 flex items-center gap-1.5 pt-4">
                        Esfuerzo (EV yield)
                    </p>

                    {stat.map((stat) => (
                        <div key={stat.stat.name} className="flex justify-between items-center py-1.5 border-b border-border last:border-0">
                            <span className="capitalize">{stat.stat.name}</span>
                            <Badge variant="outline">{stat.effort}</Badge>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </>
    )
}

export default PokemonStats;
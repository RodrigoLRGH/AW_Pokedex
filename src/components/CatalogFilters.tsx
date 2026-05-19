import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Props {
    search: string;
    onSearchChange: (value: string) => void;
    selectedType: string;
    onTypeChange: (value: string) => void;
    types: string[];
    isSearching: boolean;
}

function CatalogFilters({ search, onSearchChange, selectedType, onTypeChange, types, isSearching }: Props) {
    return (
        <>
            <div className="flex gap-3 mb-6 flex-wrap">
                <Input placeholder="Buscar Pokémon..." className="flex-1"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)} />

                {!isSearching && (
                    <Select value={selectedType} onValueChange={(value) => onTypeChange(value)}>
                        <SelectTrigger className="border rounded px-3 py-2">
                            <SelectValue placeholder="Filtrar por tipo" />
                        </SelectTrigger>
                        <SelectContent className="border rounded mt-1 bg-white">
                            <SelectItem key="" value="all" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                Todos los tipos
                            </SelectItem>
                            {types.map((type) => (
                                <SelectItem key={type} value={type} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                    {type}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            </div>
        </>
    )
}

export default CatalogFilters;
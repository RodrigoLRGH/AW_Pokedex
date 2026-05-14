// export interface PokemonListItem {
//     id: number;
//     url: string;
// }

// export interface PokemonListResponse {
//     count: number;
//     next: string | null;
//     previous: string | null;
//     results: PokemonListItem[];
// }

// export interface PokemonTypeSlot {
//     slot: number;
//     type: {
//         name: string;
//         url: string;
//     };
// }

// export interface PokemonTypeStat {
//     base_stat: number;
//     effort: number;
//     stat: {
//         name: string;
//         url: string;
//     };
// }

// export interface PokemonTypeAbilitySlot {
//     ability: {
//         name: string;
//         url: string;
//     };
//     is_hidden: boolean;
//     slot: number;
// }

// export interface PokemonCardData {
//     id: number;
//     name: string;
//     imageUrl: string;
//     types: string[];
// }

// export interface Pokemon {
//     id: number;
//     name: string;
//     base_experience: number;
//     height: number;
//     weight: number;
//     types: PokemonTypeSlot[];
//     stats: PokemonTypeStat[];
//     abilities: PokemonTypeAbilitySlot[];
// }
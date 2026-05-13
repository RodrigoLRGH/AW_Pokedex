export const TYPE_COLORS: Record<string, string> = {
  normal: '#919AA2',
  fire: '#FF9741',
  water: '#3692DC',
  electric: '#FBD100',
  grass: '#38BF4B',
  ice: '#70CBD4',
  fighting: '#E0306A',
  poison: '#B567CE',
  ground: '#E87236',
  flying: '#89AAE3',
  psychic: '#FF6675',
  bug: '#83C300',
  rock: '#C5B78C',
  ghost: '#4C6AB2',
  dragon: '#006FC9',
  dark: '#5B5465',
  steel: '#5A8EA2',
  fairy: '#FB89EB',
}

export function getTypeColor(type: string): string {
    return TYPE_COLORS[type];
}
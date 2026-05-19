export function getFavorites(): number[] {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
}

export function addFavorite(id: number[]): void {
    localStorage.setItem('favorites', JSON.stringify(id));
}
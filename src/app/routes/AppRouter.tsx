import FavoritesPage from '@/pages/FavoritesPage';
import PokemonCatalog from '../../pages/PokemonCatalog';
import PokemonDetail from '../../pages/PokemonDetail';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router';

function AppRouter() { 
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to="/catalog" />} />
                    <Route path="/catalog" element={<PokemonCatalog />} />
                    <Route path="/pokemon/:id" element={<PokemonDetail />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;
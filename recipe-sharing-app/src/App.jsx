import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🍲 Recipe Sharing App</h1>

      {/* Navigation */}
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/favorites" style={{ marginRight: '1rem' }}>⭐ Favorites</Link>
        <Link to="/recommendations">🎯 Recommendations</Link>
      </nav>

      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </BrowserRouter>
  );
}

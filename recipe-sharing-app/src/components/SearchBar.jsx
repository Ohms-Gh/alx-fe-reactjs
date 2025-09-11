import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="🔍 Search recipes..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{
        width: '100%',
        padding: '0.5rem',
        marginBottom: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    />
  );
};

export default SearchBar;

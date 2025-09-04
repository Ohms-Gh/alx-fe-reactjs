import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <UserProfile 
        name="Bismark" 
        age="30" 
        bio="Loves hiking and photography" 
      />

      <UserProfile 
        name="Bismark" 
        age="30" 
        bio="A foodie who enjoys exploring new cities" 
      />
    </>
  );
}

export default App;

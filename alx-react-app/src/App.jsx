import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      <UserProfile 
        name="John" 
        age="30" 
        bio="A foodie who enjoys exploring new cities" 
      />
    </>
  );
}

export default App;

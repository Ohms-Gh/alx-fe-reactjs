import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age={25} bio="Loves exploring new cities." />
      <Footer />
    </div>
  );
}

export default App;

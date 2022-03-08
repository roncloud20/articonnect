import './App.css';
import './Style.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import ArtisanRecom from './Components/ArtisanRecom';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <h2>Most Patronized Artisans</h2>
      <ArtisanRecom />
    </div>
  );
}

export default App;

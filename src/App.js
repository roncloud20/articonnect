
import './Style.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import ArtisanRecom from './Components/ArtisanRecom';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <h2>Most Patronized Artisans</h2>
      <ArtisanRecom />
      <Footer />
    </div>
  );
}

export default App;

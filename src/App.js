import Header from './Components/Header';
import Banner from './Components/Banner';
import ArtisanRecom from './Components/ArtisanRecom';
import Footer from './Components/Footer';
import {artisans} from './artisans';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      artisans: artisans,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render(){
    const filteredArtisans = this.state.artisans.filter(artisan =>{
      return artisan.artisanName.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="App">
        <Header searchChange={this.onSearchChange}/>
        <Banner />
        <h2>Most Patronized Artisans</h2>
        <ArtisanRecom artisans={filteredArtisans} />
        <Footer />
      </div>
    );
  }
}

export default App;

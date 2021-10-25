import React from 'react';
import PokemonEntry from './PokemonEntry.jsx';
import PokemonList from './PokemonList.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: []
    }
    this.showAll = this.showAll.bind(this);
  }

  showAll() {
    axios.get('/pokemon')
    .then( results => {
      console.log(results.data)
      this.setState({
        display: results.data
      })
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <div>
          <h1>Pokemon!</h1>
          <button onClick={this.showAll}>Show All</button>
          <select id="type">
            <option>Sort by Type</option>
            <option>Grass</option>
            <option>Fire</option>
            <option>Water</option>
            <option>Normal</option>
            <option>Poison</option>
            <option>Electric</option>
            <option>Ground</option>
            <option>Fighting</option>
            <option>Psychic</option>
            <option>Rock</option>
            <option>Ghost</option>
            <option>Dragon</option>
          </select>
          <button>INSERT</button>
          <div>
            <PokemonList pokemons={this.state.display} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;


/*
<div>
    <h3>Ivysaur</h3>
    <img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en" />
  </div>
  <div>
    <h3>Venusaur</h3>
    <img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en" />
  </div>
</div>
*/
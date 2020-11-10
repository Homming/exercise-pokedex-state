import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.pokemonClickEvent = this.pokemonClickEvent.bind(this);

        this.state = {
            pokemonIndex: 0
        }
    }

    pokemonClickEvent() {
        if(this.state.pokemonIndex < this.props.pokemons.length - 1){
            this.setState((actualState, _props) => ({
                pokemonIndex: actualState.pokemonIndex + 1
            }));
        } else {
            this.setState({
                pokemonIndex: 0
            });
        }
    }

    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons.filter((_pokemon, index) => this.state.pokemonIndex === index)
                    .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
                <button onClick={this.pokemonClickEvent}>Próximo Pokemon</button>
            </div>
        );
    }
}

export default Pokedex;
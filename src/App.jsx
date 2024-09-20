import { useEffect } from 'react';
import { getPokemon, getPokemonDetails } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons } from './actions';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { Col } from 'antd';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(pokemonsRes.map(
        pokemon => getPokemonDetails(pokemon)
      ));

      dispatch(setPokemons(pokemonsDetailed));
    };

    

    fetchPokemons();
  }, [])

  return (
      <div className='App'>
        <Col span={4} offset={10}>
          <img src={logo} alt='Pokedux'/>
        </Col>
        <Col span={8} offset={8}>
          <Searcher></Searcher>
        </Col>
        <PokemonList pokemons={pokemons}/>
      </div>
  )
}


export default App;

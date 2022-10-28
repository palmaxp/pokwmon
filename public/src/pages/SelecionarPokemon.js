import React from 'react';
import { Link } from 'react-router-dom';
import ListPokemons from '../modules/ListPokemons';

const SelecionarPokemon = () => {
	return (
		<div>
			<Link to={`/`}>Home</Link>

			<ListPokemons />
		</div>
	);
};

export default SelecionarPokemon;

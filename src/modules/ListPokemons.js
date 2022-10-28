import React, { useEffect, useState, useRef } from 'react';

const ListPokemons = () => {
	const [pokemons, setPokemons] = useState([]);
	const [fetching, setFetching] = useState(true);
	let quantidadePokemonsLista = 1;
	let min = 1;
	let max = 905;

	const ref = useRef(0);

	const getRandomNumber = (min, max) => {
		return Math.round(Math.random() * (max - min) + min);
	};

	const getPokemonsList = () => {
		for (let index = 0; index < quantidadePokemonsLista; index++) {
			const pokemonId = getRandomNumber(min, max);
			fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
				.then((r) => r.json())
				.then((pokemon) => {
					setPokemons((prevList) => [...prevList, pokemon]);
				})
				.catch((err) => console.error(err))
				.finally(() => setFetching(false));
		}
	};

	useEffect(() => {
		if (ref.current === 0) {
			ref.current += 1;
			getPokemonsList();
		}
	}, []);

	return (
		<>
			{!fetching && (
				<div>
					ListPokemons
					{pokemons.map((pokemon) => (
						<div mr={2}>
							{pokemon.name}
							{console.log(pokemon)}
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default ListPokemons;

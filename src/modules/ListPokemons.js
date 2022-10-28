import React, { useEffect, useState, useRef } from 'react';

const ListPokemons = () => {
	const [pokemons, setPokemons] = useState([]);
	const [numberChosen, setNumberChosen] = useState([3, 4, 5]);
	const [fetching, setFetching] = useState(true);
	const quantidadePokemonsLista = 10;
	const min = 1;
	const max = 905;
	const ref = useRef(0);

	const getRandomNumberNotChosenBefore = (min, max) => {
		let invalid = true;
		let randomNum;
		while (invalid) {
			randomNum = Math.round(Math.random() * (max - min) + min);
			if (!numberChosen.includes(randomNum)) {
				setNumberChosen((prevList) => [...prevList, randomNum]);
				invalid = false;
			}
		}
		return randomNum;
	};

	const getPokemonsList = () => {
		for (let index = 0; index < quantidadePokemonsLista; index++) {
			const pokemonId = getRandomNumberNotChosenBefore(min, max);
			fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
				.then((r) => r.json())
				.then((pokemon) => {
					setPokemons((prevList) => [...prevList, pokemon]);
				})
				.catch((err) => console.error(err));
		}
		setFetching(false);
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
					{pokemons.map((pokemon, i) => (
						<div mr={2} key={i}>
							<div style={{ display: 'flex' }}>
								<img src={pokemon.sprites.front_default} />
								<img src={pokemon.sprites.back_default} />
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default ListPokemons;

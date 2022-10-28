import { createContext, useContext, useState } from 'react';

export const PokemonContext = createContext();
export const useUser = () => useContext(PokemonContext);

const PokemonProvider = (props) => {
	const [pokemon, setPokemon] = useState(null);

	return <PokemonContext.Provider value={{ pokemon, setPokemon }} {...props} />;
};

export default PokemonProvider;

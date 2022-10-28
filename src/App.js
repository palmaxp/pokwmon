import React from 'react';
import Routes from './Routes';
import PokemonProvider from './providers/contextPokemon';

const App = () => {
	return (
		<div>
			<PokemonProvider>
				<Routes />
			</PokemonProvider>
		</div>
	);
};

export default App;

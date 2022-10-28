import React from 'react';
import Routes from './modules/Routes';
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

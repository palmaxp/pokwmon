import React from 'react';
import Routes from './Routes';
import PokemonProvider from './providers/contextPokemon';

import { initializeApp } from 'firebase/app';

const firebaseApp = initializeApp({
	apiKey: 'AIzaSyCp6FUNoXMqRZxy95XcoLrOgVbpqKlrVzw',
	authDomain: 'wmon-621d8.firebaseapp.com',
	projectId: 'wmon-621d8',
});

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

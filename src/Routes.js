import React from 'react';
import SelecionarPokemon from './pages/SelecionarPokemon';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
	const routes = [
		{
			url: '/',
			component: Home,
		},
		{
			url: '/selecionar',
			component: SelecionarPokemon,
		},
	];

	return (
		<>
			<Router>
				<Switch>
					{routes.map((data, i) => {
						return (
							<Route
								key={i}
								exact
								path={`${data.url}`}
								component={data.component}
							/>
						);
					})}
				</Switch>
			</Router>
		</>
	);
};

export default Routes;

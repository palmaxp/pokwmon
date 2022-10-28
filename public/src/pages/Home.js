import { Link } from 'react-router-dom';
import ListPokemons from '../modules/ListPokemons';

const Home = () => {
	return (
		<>
			<Link to={`/selecionar`}>Selecionar pokemon</Link>
		</>
	);
};

export default Home;

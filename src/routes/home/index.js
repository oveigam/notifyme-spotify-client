import { h } from 'preact';
import AlertzySection from '../../components/sections/AlertzySection';
import ConfigSection from '../../components/sections/ConfigSection';
import SpotifySection from '../../components/sections/SpotifySection';
import style from './style.css';

const Home = ({code}) => {
	return (
		<div class={style.home}>
			<ConfigSection />
			<SpotifySection code={code} />
			<AlertzySection />
		</div>
	)
}

export default Home;

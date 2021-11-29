import { h } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';

const App = () => (
	<div id="app">
		<Router>
			<Home path="/" />
			<Home path="/:code" />
		</Router>
	</div>
)

export default App;

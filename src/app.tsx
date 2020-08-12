import React, {FunctionComponent} from 'react';
import Timeline from './containers/timeline';
import Trends from './widgets/trends';

const App: FunctionComponent = () => {
	return (
		<>
			<Trends/>
			<Timeline type="home"/>
		</>
	);
};

export default App;

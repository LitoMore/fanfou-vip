import React, {FunctionComponent, useState, useEffect} from 'react';
import {Status as StatusType} from './types/fanfou';
import Timeline from './containers/timeline';
import Status from './components/status';
import ff from './api/fanfou';

const App: FunctionComponent = () => {
	const [timeline, setTimeline] = useState<StatusType[]>([]);

	useEffect(() => {
		(async () => {
			const tl = await ff.get('/statuses/user_timeline', {id: 'wangxing'});
			setTimeline(tl);
		})();
	}, []);

	return (
		<Timeline>
			{timeline.map(status => <Status key={status.id} status={status}/>)}
		</Timeline>
	);
};

export default App;

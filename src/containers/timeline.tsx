import React, {FunctionComponent, useState, useEffect} from 'react';
import styled from 'styled-components';
import ff from '../api/fanfou';
import {Status} from '../types/fanfou';
import StatusComponent from '../components/status';

export type TimelineType = 'home' | 'public' | 'mentions';

type TimelineProps = {
	className?: string;
	type: TimelineType;
	page?: number;
	format?: string;
};

const uriDict = {
	public: '/statuses/public_timeline',
	home: '/statuses/home_timeline',
	mentions: '/statuses/mentions'
};

const Timeline: FunctionComponent<TimelineProps> = ({className, type, page, format = 'html'}) => {
	const [timeline, setTimeline] = useState<Status[]>([]);

	useEffect(() => {
		const fetchTimeline = () => {
			try {
				(async () => {
					const tl = await ff.get(uriDict[type], {page, format});
					setTimeline(tl);
				})();
			} catch {}
		};

		fetchTimeline();
	}, [type, page, format]);

	return (
		<div className={className}>
			{timeline.map(status => <StatusComponent key={status.id} status={status}/>)}
		</div>
	);
};

const StyledTimeline = styled(Timeline)`
	padding: 5px;

	& ${StatusComponent} {
		margin-bottom: 5px;
	}

	& ${StatusComponent}:last-child {
		margin-bottom: 0;
	}
`;

export default StyledTimeline;

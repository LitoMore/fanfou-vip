import React, {FunctionComponent, useState, useEffect} from 'react';
import styled from 'styled-components';
import ff from '../api/fanfou';
import {Trend} from '../types/fanfou';
import Widget from '../components/widget';

const Trends: FunctionComponent = () => {
	const [trends, setTrends] = useState<Trend[]>([]);

	useEffect(() => {
		try {
			(async () => {
				const trends = await ff.get('/saved_searches/list', {});
				setTrends(trends);
			})();
		} catch {}
	}, []);

	return (
		<Widget title="关注的话题">
			{trends.map(trend => <TrendItem key={trend.id}>{trend.name}</TrendItem>)}
		</Widget>
	);
};

const TrendItem = styled.div``;

export default Trends;

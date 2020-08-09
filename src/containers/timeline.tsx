import styled from 'styled-components';
import {Container as StatusContainer} from '../components/status';

const TimelineContainer = styled.div`
	padding: 5px;

	& ${StatusContainer} {
		margin-bottom: 5px;
	}

	& ${StatusContainer}:last-child {
		margin-bottom: 0;
	}
`;

export default TimelineContainer;

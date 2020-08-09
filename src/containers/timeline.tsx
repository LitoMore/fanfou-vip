import styled from 'styled-components';
import Status from '../components/status';

const TimelineContainer = styled.div`
	padding: 5px;

	& ${Status} {
		margin-bottom: 5px;
	}

	& ${Status}:last-child {
		margin-bottom: 0;
	}
`;

export default TimelineContainer;

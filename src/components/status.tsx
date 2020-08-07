import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {Status} from '../types/fanfou';

type StatusProps = {
	status: Status;
};

const StatusComponent: FunctionComponent<StatusProps> = ({status}) => {
	return <Container>{status.text}</Container>;
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export default StatusComponent;

import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {Status as StatusType} from '../types/fanfou';

type StatusProps = {
	className?: string;
	status: StatusType;
};

const StatusDiv: FunctionComponent<StatusProps> = ({className, status}) => (
	<div className={className}>
		<Slot>
			<Avatar src={status.user.profile_image_url}/>
		</Slot>
		<Slot flex="1" direction="column">
			<Name>{status.user.name}</Name>
			<Text>{status.text}</Text>
		</Slot>
	</div>
);

const StyledStatus = styled(StatusDiv)`
	display: flex;
`;

const Slot = styled.div<{
	flex?: string;
	direction?: 'row' | 'column';
}>`
	flex: ${props => props.flex ?? 'none'};
	flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
`;

const Avatar = styled.img`
	margin-right: 5px;
	width: 48px;
	height: 48px;
	border-radius: 4px;
`;

const Name = styled.div`
	color: var(--textBlack);
	font-weight: bold;
	font-size: 14px;
	line-height: 1.3125;
`;

const Text = styled.div`
	color: var(--textBlack);
	font-size: 14px;
	line-height: 1.3125;
`;

export default StyledStatus;

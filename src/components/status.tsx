import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {queries} from '../global-style';
import {Status as StatusType} from '../types/fanfou';
import favGray from '../assets/fav-gray.svg';

type StatusProps = {
	className?: string;
	status: StatusType;
};

const StatusDiv: FunctionComponent<StatusProps> = ({className, status}) => (
	<div className={className}>
		<Row>
			<Slot>
				<Avatar src={status.user.profile_image_url}/>
			</Slot>
			<Slot flex="1" direction="column">
				<Name>{status.user.name}</Name>
				<Text>{status.text}</Text>
			</Slot>
			<Slot>
				<Actions for="web">
					<Fav/>
					<Fav/>
					<Fav/>
				</Actions>
			</Slot>
		</Row>
		<Row>
			<Actions for="mobile">
				<Fav/>
				<Fav/>
				<Fav/>
			</Actions>
		</Row>
	</div>
);

const StyledStatus = styled(StatusDiv)`
	display: flex;
	flex-direction: column;
`;

const Row = styled.div`
	position: relative;
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

const Actions = styled.div<{
	for: 'web' | 'mobile';
}>`
	display: none;
	justify-content: space-around;
	align-items: center;

	@media ${queries.web} {
		${StyledStatus}:hover & {
			position: absolute;
			flex-direction: column;
			top: 0;
			right: 0;
			${props => props.for === 'web' ? 'display: flex;' : ''}
		}
	}

	@media ${queries.mobile} {
		width: 100px;
		align-self: right;
		margin-left: auto;
		height: 24px;
		${props => props.for === 'mobile' ? 'display: flex;' : ''}
	}
`;

const Icon = styled.div`
	width: 20px;
	height: 20px;
	background-position: center center;
	background-size: contain;
`;

const Fav = styled(Icon)`
	background-image: url(${favGray});
`;

export default StyledStatus;

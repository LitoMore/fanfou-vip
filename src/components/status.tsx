import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {queries} from '../global-style';
import {Status as StatusType} from '../types/fanfou';
import favGray from '../assets/fav-gray.svg';
import favDark from '../assets/fav-dark.svg';
import favBlue from '../assets/fav-blue.svg';
import replyGray from '../assets/reply-gray.svg';
import replyDark from '../assets/reply-dark.svg';
import replyBlue from '../assets/reply-blue.svg';
import repostGray from '../assets/repost-gray.svg';
import repostDark from '../assets/repost-dark.svg';
import repostBlue from '../assets/repost-blue.svg';
import deleteGray from '../assets/delete-gray.svg';
import deleteDark from '../assets/delete-dark.svg';
import deleteBlue from '../assets/delete-blue.svg';

const fav = {normal: favGray, hover: favDark, active: favBlue};
const reply = {normal: replyGray, hover: replyDark, active: replyBlue};
const repost = {normal: repostGray, hover: repostDark, active: repostBlue};
const del = {normal: deleteGray, hover: deleteDark, active: deleteBlue};

type IconType = {
	normal: string;
	hover: string;
	active: string;
};

const icons: Record<string, IconType> = {fav, reply, repost, del};

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
				<Actions platform="web">
					<Icon type="reply"/>
					<Icon type="fav"/>
					<Icon type="repost"/>
				</Actions>
			</Slot>
		</Row>
		<Row>
			<Actions platform="pad">
				<Icon type="reply"/>
				<Icon type="fav"/>
				<Icon type="repost"/>
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
	platform: 'web' | 'pad';
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
			padding-left: 20px;
			background-image: linear-gradient(to right,  #ffffff00, #ffffffcc 30%);
			${props => props.platform === 'web' ? 'display: flex;' : ''}
		}
	}

	@media ${queries.pad}, ${queries.mobile} {
		width: 100px;
		align-self: right;
		margin-left: auto;
		height: 24px;
		${props => props.platform === 'pad' ? 'display: flex;' : ''}
	}
`;

const Icon = styled.div<{
	type: 'fav' | 'repost' | 'reply' | 'delete';
}>`
	width: 20px;
	height: 20px;
	background-image: ${props => Object.values(icons[props.type]).map((url: string) => `url(${url})`).join(', ')};
	background-repeat: no-repeat;
	
	&:hover {
		background-image: url(${props => icons[props.type].hover});
	}

	&:active {
		background-image: url(${props => icons[props.type].active});
	}
`;

export default StyledStatus;

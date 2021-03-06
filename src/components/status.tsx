import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {queries} from '../global-style';
import {Status, Entity} from '../types/fanfou';
import {fav, reply, repost, del} from '../assets/action-icons';

type IconType = {
	normal: string;
	hover: string;
	active: string;
};

const icons: Record<string, IconType> = {fav, reply, repost, del};

const TextContent: FunctionComponent<{entity: Entity}> = ({entity}) => {
	switch (entity.type) {
		case 'at':
			return <Link>{entity.text}</Link>;
		case 'link':
			return <Link href={entity.link}>{entity.text}</Link>;
		case 'text':
		default:
			return <span>{entity.text}</span>;
	}
};

const StatusDiv: FunctionComponent<{
	className?: string;
	status: Status;
}> = ({className, status}) => {
	return (
		<div className={className}>
			<Row>
				<Slot>
					<Avatar src={status.user.profile_image_url}/>
				</Slot>
				<Slot flex="1" direction="column">
					<Name>{status.user.name}</Name>
					<Text>{status.entities?.map((entity, index) => <TextContent key={`${status.id}-entity-${index}`} entity={entity}/>)}</Text>
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
};

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

const Link = styled.a`
	color: var(--linkBlue);
	text-decoration: none;
`;

const Icon = styled.div<{
	type: 'fav' | 'repost' | 'reply' | 'del';
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

		& ${Icon}:last-child {
			background-position: 1px 2px;
		}
	}

	@media ${queries.pad}, ${queries.mobile} {
		width: 100px;
		align-self: right;
		margin-left: auto;
		height: 24px;
		${props => props.platform === 'pad' ? 'display: flex;' : ''}

		& ${Icon}:first-child {
			background-position: 2px 2px;
		}
	
		& ${Icon}:last-child {
			background-position-y: 2px;
		}
	}
`;

export default StyledStatus;

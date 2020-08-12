import React, {FunctionComponent, ReactNode} from 'react';
import styled from 'styled-components';

const Widget: FunctionComponent<{
	className?: string;
	title?: string;
	children?: ReactNode;
}> = ({className, title, children}) => {
	return (
		<div className={className}>
			{title && <Header>{title}</Header>}
			{children}
		</div>
	);
};

const StyledWidget = styled(Widget)`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

const Header = styled.div`
	user-select: none;
	margin-bottom: 10px;
	color: var(--textBlack);
	font-weight: bold;
	font-size: 14px;
	cursor: normal;
`;

export default StyledWidget;

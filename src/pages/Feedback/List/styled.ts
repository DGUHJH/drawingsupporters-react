import { Box, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Body = styled(Box)`
	width: 100%;
`;

export const Root = styled(Container)`
	&&& {
		padding: 0;
		margin-bottom: 500px;
	}
`;

export const TitleTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 40px;
		display: flex;
		text-align: center;
		margin-top: 60px;
	}
`;

export const MenuContainer = styled(Box)`
	width: 100%;
	display: flex;
	margin-top: 20px;
`;

export const MenuTypo = styled(Typography)`
	&&& {
		width: 240px;
		height: 58px;
		font-size: 16px;
		color: #7d7d7d;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2px white solid;
		cursor: pointer;
	}
`;

export const CardContainer = styled(Box)`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

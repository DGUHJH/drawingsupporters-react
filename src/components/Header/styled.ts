import { Box, Button, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
	width: 100%;
	height: 100px;
	box-shadow: 0 0 4px #0004;
`;

export const RootContainer = styled(Container)`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	&&& {
		padding: 0;
	}
`;

export const LeftContainer = styled(Box)`
	display: flex;
	align-items: center;
	height: 100%;
`;

export const LogoImgWrapper = styled(Box)`
	width: 260px;
	height: 65px;
`;

export const LogoImg = styled.img`
	width: 100%;
	height: 100%;
	cursor: pointer;
`;

export const MenuContainer = styled(Box)`
	margin-left: 20px;
	display: flex;
`;

export const MenuTypo = styled(Typography)`
	&&& {
		height: 99px;
		font-family: 'Noto Sans Regular';
		font-size: 20px;
		margin-left: 40px;
		cursor: pointer;
		display: flex;
		align-items: center;
		border-bottom: 2px white solid;
	}
`;

export const MenuPointTypo = styled.span`
	&&& {
		font-size: 24px;
		font-weight: bold;
	}
`;

export const RightContainer = styled(Box)`
	display: flex;
`;

export const LoginButton = styled(Button)`
	&&& {
		width: 77px;
		height: 36px;
		background: #248cd7;
		border-radius: 8px;
		margin-right: 20px;
	}
`;

export const LoginButtonTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 16px;
		color: white;
	}
`;

export const JoinButton = styled(Button)`
	width: 77px;
	height: 36px;
	border-radius: 8px;
`;

export const JoinButtonTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 16px;
		color: #7e7e7e;
	}
`;

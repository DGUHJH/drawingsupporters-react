import { Box, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Body = styled(Box)`
	width: 100%;
	border-top: 1px #eaeaea solid;
`;

export const Root = styled(Container)`
	&&& {
		height: 240px;
		padding: 0;
		padding-top: 72px;
		padding-bottom: 60px;
		display: flex;
		justify-content: space-between;
	}
`;

export const LeftContainer = styled(Box)`
	height: 108px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const TermsTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 20px;
	}
`;

export const InfoTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 20px;
	}
`;

export const RightContainer = styled(Box)`
	height: 108px;
`;

export const LogoImg = styled.img`
	width: 260px;
	height: 65px;
`;

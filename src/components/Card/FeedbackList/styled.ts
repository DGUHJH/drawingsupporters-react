import { Box, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Container)`
	&&& {
		height: 164px;
		padding: 0;
		border-radius: 8px;
		border: 1px #e4e4e4 solid;
		margin-bottom: 12px;
		display: flex;
		justify-content: space-between;
		cursor: pointer;
	}
`;

export const LeftContainer = styled(Box)`
	height: 100%;
	display: flex;
	flex-direction: column;
	padding-top: 12px;
	padding-left: 20px;
`;

export const UserContainer = styled(Box)`
	display: flex;
	align-items: center;
`;

export const UserProfileImg = styled(Box)`
	&&& {
		width: 40px;
		height: 40px;
		border-radius: 40px;
		background: #0003;
		margin-right: 12px;
	}
`;

export const UsernameTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 16px;
	}
`;

export const RequestTitleTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 20px;
		margin-top: 12px;
	}
`;

export const RequestChipContainer = styled(Box)`
	height: 36px;
	display: flex;
	margin-top: 22px;
`;

export const RequestChipWrapper = styled(Box)`
	padding: 8px 12px;
	margin-right: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #606060;
	border-radius: 8px;
`;

export const RequestChipTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 14px;
		color: white;
	}
`;

export const RightContainer = styled(Box)`
	height: 100%;
	display: flex;
	align-items: center;
	padding-right: 12px;
`;

export const FeedbackRequestImg = styled.img`
	width: 140px;
	height: 140px;
	background: #0003;
	border-radius: 8px;
`;

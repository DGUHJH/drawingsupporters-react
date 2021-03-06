import { Box, Button, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Container)`
	&&& {
		margin-bottom: 500px;
		padding: 0;
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

export const FeedbackContainer = styled(Box)`
	width: 100%;
	border: 1px #e4e4e4 solid;
	border-radius: 0;
	margin-top: 40px;
	padding: 20px;
	box-sizing: border-box;
`;

export const FeedbackTitleTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 32px;
	}
`;

export const MenuTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 20px;
		color: #606060;
		margin-bottom: 8px;
		margin-top: 40px;
	}
`;

export const DescriptionTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 14px;
		color: #606060;
		margin-top: 10px;
	}
`;

export const ContentChipContainer = styled(Box)`
	width: 100%;
	display: flex;
`;

export const ContentChip = styled(Box)`
	width: fit-content;
	padding: 8px 12px;
	background: #606060;
	border-radius: 8px;
	margin-right: 8px;
`;

export const ContentChipTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 14px;
		color: white;
	}
`;

export const FeedbackImgContainer = styled(Box)`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

export const FeedbackImg = styled.img`
	width: 400px;
	height: 400px;
	border-radius: 8px;
	margin-right: 20px;
	object-fit: contain;
`;

export const RequestSubmitButtonContainer = styled(Box)`
	width: 100%;
	height: 80px;
	margin-top: 100px;
`;

export const RequestSubmitButton = styled(Button)`
	&&& {
		width: 100%;
		height: 100%;
		border-radius: 8px;
		background: #248bd7;
	}
`;

export const RequestSubmitButtonTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 28px;
		color: white;
	}
`;

export const FeedbackDetailsCardContainer = styled(Box)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	border: 1px #e4e4e4 solid;
	border-radius: 8px;
	margin-top: 20px;
`;

export const FeedbackTitleTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 32px;
	}
`;

export const FeedbackDescriptionTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 20px;
		margin-top: 10px;
	}
`;

export const FeedbackImg = styled.img`
	width: 400px;
	height: 400px;
	border-radius: 8px;
	margin-right: 20px;
	object-fit: contain;
	margin-top: 10px;
`;

import { Box, Button, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
	width: 100%;
`;

export const FeedbackTitleTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 40px;
	}
`;

export const FeedbackContainer = styled(Box)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const FeedbackEditor = styled(TextField)`
	&&& {
		width: 1280px;
		height: 80px;
		margin-bottom: 20px;
	}
`;

export const FeedbackImgContainer = styled(Box)`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
`;

export const FeedbackImgButton = styled(Button)`
	&&& {
		width: 200px;
		height: 80px;
		background: #248bd7;
		border-radius: 8px;
	}
`;

export const FeedbackImgButtonTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 20px;
		color: white;
	}
`;

export const FeedbackEditorContainer = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const FeedbackEditorTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 20px;
		color: #707070;
		cursor: pointer;
	}
`;

export const FeedbackImgNameWrapper = styled(Box)`
	width: 1068px;
	height: 80px;
	background: #fafafa;
	border-radius: 8px;
	display: flex;
	align-items: center;
	padding: 0 24px;
	box-sizing: border-box;
`;

export const FeedbackImgNameWrapperTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 20px;
	}
`;

export const FeedbackSubmitButtonContainer = styled(Box)`
	width: 100%;
	height: 80px;
	margin-top: 100px;
`;

export const FeedbackSubmitButton = styled(Button)`
	&&& {
		width: 100%;
		height: 100%;
		border-radius: 8px;
		background: #248bd7;
	}
`;

export const FeedbackSubmitButtonTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 28px;
		color: white;
	}
`;

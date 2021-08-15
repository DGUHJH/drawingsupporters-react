import { Box, Button, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 100px;
	margin-bottom: 500px;
`;

export const LoginContainer = styled(Box)`
	width: 800px;
	height: 680px;
	border: 1px #e4e4e4 solid;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const LoginTitleTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 32px;
		display: flex;
		text-align: center;
		margin-top: 60px;
	}
`;

export const RequestEditor = styled(TextField)`
	&&& {
		width: 628px;
		height: 80px;
		margin-bottom: 20px;
	}
`;

export const LoginSubmitButton = styled(Button)`
	&&& {
		width: 628px;
		height: 80px;
		background: #248bd7;
		margin-top: 80px;
		border-radius: 8px;
	}
`;

export const LoginSubmitButtonTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 24px;
		color: white;
	}
`;

export const JoinTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 24px;
		color: #7e7e7e;
		margin-top: 20px;
		cursor: pointer;
	}
`;

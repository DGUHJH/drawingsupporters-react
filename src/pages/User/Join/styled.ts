import {
	Box,
	Button,
	Checkbox,
	TextField,
	Typography,
} from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 100px;
	margin-bottom: 500px;
`;

export const JoinContainer = styled(Box)`
	width: 800px;
	border: 1px #e4e4e4 solid;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 60px;
`;

export const JoinTitleTypo = styled(Typography)`
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

export const JoinAgreeContainer = styled(Box)`
	width: 628px;
	display: flex;
	align-items: center;
	margin-top: 80px;
`;

export const JoinAgreeCheckbox = styled(Checkbox)`
	&&& {
		color: #248bd7;
	}
`;

export const JoinAgreeTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 20px;
		color: #222;
	}
`;

export const JoinAgreePointTypo = styled.span`
	color: #248bd7;
	font-weight: bold;
	text-decoration: underline;
`;

export const JoinSubmitButton = styled(Button)`
	&&& {
		width: 628px;
		height: 80px;
		background: #248bd7;
		margin-top: 52px;
		border-radius: 8px;
	}
`;

export const JoinSubmitButtonTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 24px;
		color: white;
	}
`;

export const DuplicateCheckButton = styled(Button)`
	&&& {
		width: 100px;
		height: 50px;
		background: #248bd7;
		border-radius: 8px;
	}
`;

export const DuplicateCheckButtonTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 18px;
		color: white;
	}
`;

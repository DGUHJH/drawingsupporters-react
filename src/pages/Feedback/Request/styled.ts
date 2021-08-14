import {
	Box,
	Button,
	Checkbox,
	Container,
	TextField,
	Typography,
} from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Container)`
	&&& {
		width: 100%;
		height: 1403px;
		padding: 0;
	}
`;

export const TitleTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 40px;
		margin-top: 60px;
	}
`;

export const RequestContainer = styled(Box)`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 60px;
`;

export const RequestTitleEditor = styled(TextField)`
	&&& {
		width: 1280px;
		height: 80px;
		margin-bottom: 20px;
	}
`;

export const RequestDetailInfoWrapper = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const RequestEditor = styled(TextField)`
	&&& {
		width: 628px;
		height: 80px;
		margin-bottom: 20px;
	}
`;

export const RequestImgContainer = styled(Box)`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
`;

export const RequestImgButton = styled(Button)`
	&&& {
		width: 200px;
		height: 80px;
		background: #248bd7;
		border-radius: 8px;
	}
`;

export const RequestImgButtonTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 20px;
		color: white;
	}
`;

export const RequestImgNameWrapper = styled(Box)`
	width: 1068px;
	height: 80px;
	background: #fafafa;
	border-radius: 8px;
	display: flex;
	align-items: center;
	padding: 0 24px;
	box-sizing: border-box;
`;

export const RequestImgNameWrapperTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 20px;
	}
`;

export const RequestPhoneNumberContainer = styled(Box)`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	margin-top: 60px;
`;

export const ReqeustPhoneNumberCheckbox = styled(Checkbox)`
	margin-left: 20px;
	color: #248bd7;
`;

export const RequestPhoneNumberTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 24px;
		color: #222;
	}
`;

export const RequestAgreeContainer = styled(Box)`
	width: 100%;
	display: flex;
	align-items: center;
	margin-top: 40px;
`;

export const ReqeustAgreeCheckbox = styled(Checkbox)`
	&&& {
		width: 44px;
		height: 44px;
		color: #248bd7;
	}
`;

export const RequestAgreeTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 24px;
		color: #222;
	}
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

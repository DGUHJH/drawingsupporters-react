import { Box, Button, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Container)`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 50px;
	margin-bottom: 200px;
	padding: 0;
`;

export const MenuContainer = styled(Box)`
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const MenuTitleTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 20px;
	}
`;

export const LayerContainer = styled(Box)`
	width: 300px;
	height: 248px;
	border-radius: 8px;
	border: 1px #0003 solid;
	display: flex;
	flex-direction: column;
	padding: 20px;
	box-sizing: border-box;
`;

export const ColorContainer = styled(Box)`
	width: 300px;
	height: 480px;
	display: flex;
	flex-direction: column;
	border: 1px #0003 solid;
	border-radius: 8px;
	padding: 20px;
	box-sizing: border-box;
	margin-top: 20px;
`;

export const DrawContainer = styled(Box)`
	width: 640px;
	height: 748px;
	border-radius: 8px;
	border: 1px #0003 solid;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FeedbackRequestImg = styled.img`
	width: 616px;
	height: 724px;
	object-fit: contain;
`;

export const RequestContainer = styled(Box)`
	width: 300px;
	height: 676px;
	border: 1px #0003 solid;
	border-radius: 8px;
	padding: 20px;
	box-sizing: border-box;
`;

export const SubmitButton = styled(Button)`
	width: 300px;
	height: 52px;
	background: #248bd7;
	margin-top: 20px;
`;

export const SubmitButtonTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 16px;
		color: white;
	}
`;

export const RequestTypoContainer = styled(Box)`
	width: 100%;
	height: 600px;
	overflow-y: scroll;
	&&& {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	&::-webkit-scrollbar {
		display: none;
	}
	margin-top: 10px;
`;

export const RequestTitleTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 18px;
		font-weight: bold;
		margin-top: 5px;
	}
`;

export const RequestTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-size: 16px;
		margin-top: 5px;
	}
`;

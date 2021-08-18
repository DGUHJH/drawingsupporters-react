import {
	Box,
	Button,
	Container,
	TextField,
	Typography,
} from '@material-ui/core';
import CanvasDraw from 'react-canvas-draw';
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

export const LayerElementContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

export const LayerElement = styled(Box)`
	width: 260px;
	height: 46px;
	border-radius: 8px;
	display: flex;
	align-items: center;
	padding: 12px;
	box-sizing: border-box;
	background: #f6f6f6;
	cursor: pointer;
	margin-bottom: 10px;
`;

export const LayerElementTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 16px;
		color: #7d7d7d;
	}
`;

export const BrushContainer = styled(Box)`
	width: 300px;
	height: 120px;
	display: flex;
	flex-direction: column;
	border: 1px #0003 solid;
	border-radius: 8px;
	padding: 20px;
	box-sizing: border-box;
	margin-top: 20px;
`;

export const ColorContainer = styled(Box)`
	width: 300px;
	height: 400px;
	display: flex;
	flex-direction: column;
	border: 1px #0003 solid;
	border-radius: 8px;
	padding: 20px;
	box-sizing: border-box;
	margin-top: 20px;
`;

export const DrawContainer = styled.div`
	width: 640px;
	height: 748px;
	position: relative;
`;

export const DrawWrapper = styled(Box)`
	width: 640px;
	height: 748px;
	border-radius: 8px;
	border: 1px #0003 solid;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #f6f6f6;
	position: relative;
`;

export const DrawCanvas = styled(CanvasDraw)`
	&&& {
		width: 640px;
		height: 748px;
		position: absolute;
		top: 0;
		left: 0;
	}
`;

export const SketchPickerContainer = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

export const BrushRadiusContainer = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

export const FeedbackRequestImg = styled.img`
	width: 616px;
	height: 724px;
	object-fit: contain;
	background: #0001;
	border-radius: 8px;
`;

export const RequestContainer = styled(Box)`
	width: 300px;
	height: 276px;
	overflow-y: scroll;
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

export const FeedbackContainer = styled(Box)`
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	border: 1px #0003 solid;
	border-radius: 8px;
	margin-top: 20px;
`;

export const FeedbackEditorContainer = styled(Box)`
	width: 100%;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
`;

export const FeedbackTitleEditor = styled(TextField)`
	&&& {
		width: 100%;
		margin-top: 10px;
		color: #248bd7;
	}
`;

export const FeedbackDescriptionEditor = styled(TextField)`
	&&& {
		width: 100%;
		margin-top: 10px;
		color: #248bd7;
	}
`;

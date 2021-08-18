import { Slider } from '@material-ui/core';
import { requestDetail } from 'api/feedback';
import { ReducerType } from 'features';
import { StateType } from 'features/userInfo/loginSlice';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { createFileName, useScreenshot } from 'use-react-screenshot';
import * as Styled from './styled';

type DataProps = {
	title: string;
	description: string;
	feedback_type: string[];
	feedback_file_type: string;
	price_lower_limit: number;
	price_upper_limit: number;
	regist_date: string;
	thumbnail_list: string[];
};

const height = 50;
const fontSize = 14;
const InputLabelProps = {
	style: {
		fontFamily: 'Noto Sans Regular',
		height,
		fontSize,
	},
};
const inputProps = {
	style: {
		fontFamily: 'Noto Sans Regular',
		height,
		fontSize,
		padding: '0 12px',
		lineHeight: '120%',
	},
};

const Feedback = () => {
	const location = useLocation();
	const history = useHistory();
	const [brushRadius, setBrushRadius] = useState<number>(12);
	const [brushColor, setBrushColor] = useState('#000');
	const canvasRef: any[] = [useRef<any>(), useRef<any>(), useRef<any>()];
	const [canvasData, setCanvasData] = useState<any[]>([null, null, null]);

	const requestId = location.pathname.split('/')[3];
	const [data, setData] = useState<DataProps>();
	const [selectedLayer, setSelectedLayer] = useState([true, false, false]);

	const loginData = useSelector<ReducerType, StateType>((state) => state.login);

	const onLayerSelect = (id: number) => () => {
		setCanvasData((prev) => {
			return prev.map((value, index) => {
				return id === index ? canvasRef[index]?.getSaveData() : value;
			});
		});
		setSelectedLayer((prev) => {
			return prev.map((value, index) => (index === id ? !value : value));
		});
		takeScreenShot(drawRef.current);
	};

	const onBrushRadiusChange = (e: any, newValue: any) => {
		setBrushRadius(newValue);
	};

	useEffect(() => {
		requestDetail(requestId).then((res) => {
			setData(res.data);
			console.log(res);
		});
	}, []);

	const drawRef = createRef<any>();
	const [image, takeScreenShot] = useScreenshot({
		type: 'image/png',
		quality: 1.0,
	});

	const download = (
		imageData: any,
		{ name = 'drawingsupporters', extension = 'png' } = {}
	) => {
		const a = document.createElement('a');
		a.href = imageData;
		a.download = createFileName(extension, name);
		a.click();
	};

	const downloadScreenshot = () =>
		takeScreenShot(drawRef.current).then(download);
	return (
		<Styled.Root>
			<Styled.MenuContainer>
				<Styled.LayerContainer>
					<Styled.MenuTitleTypo>레이어</Styled.MenuTitleTypo>
					<Styled.LayerElementContainer>
						{selectedLayer.map((value: boolean, index: number) => (
							<Styled.LayerElement
								onClick={onLayerSelect(index)}
								style={value ? { background: '#248BD7' } : {}}
								key={`layer_element_${index}`}
							>
								<Styled.LayerElementTypo
									style={value ? { color: 'white' } : {}}
								>
									레이어 {index + 1}
								</Styled.LayerElementTypo>
							</Styled.LayerElement>
						))}
					</Styled.LayerElementContainer>
				</Styled.LayerContainer>
				<Styled.BrushContainer>
					<Styled.MenuTitleTypo>선 크기</Styled.MenuTitleTypo>
					<Styled.BrushRadiusContainer>
						<Slider
							value={brushRadius}
							step={1}
							onChange={onBrushRadiusChange}
							max={20}
							min={1}
							valueLabelDisplay="auto"
							style={{ color: '#248bd7' }}
						/>
					</Styled.BrushRadiusContainer>
				</Styled.BrushContainer>

				<Styled.ColorContainer>
					<Styled.MenuTitleTypo>선 색상</Styled.MenuTitleTypo>
					<Styled.SketchPickerContainer>
						<SketchPicker
							color={brushColor}
							onChangeComplete={(color: any) => setBrushColor(color.hex)}
						/>
					</Styled.SketchPickerContainer>
				</Styled.ColorContainer>
			</Styled.MenuContainer>
			<Styled.DrawContainer
				ref={drawRef}
				// style={{ background: `no-repeat url("${data?.thumbnail_list[0]}")` }}
			>
				<Styled.DrawWrapper>
					<Styled.FeedbackRequestImg src={data?.thumbnail_list[0]} />
					{selectedLayer.map((value: boolean, index: number) => (
						<Styled.DrawCanvas
							ref={(canvasDraw: any) => (canvasRef[index] = canvasDraw)}
							canvasWidth={640}
							canvasHeight={748}
							backgroundColor="#0000"
							hideInterface
							hideGrid
							background="#0000"
							key={`draw_canvas_${index}`}
							style={value ? {} : { zIndex: -1 }}
							saveData={canvasData[index]}
							brushRadius={brushRadius}
							brushColor={brushColor}
						/>
					))}
				</Styled.DrawWrapper>
			</Styled.DrawContainer>
			<Styled.MenuContainer>
				<Styled.RequestContainer>
					<Styled.MenuTitleTypo>요청 사항</Styled.MenuTitleTypo>
					<Styled.RequestTypoContainer>
						<Styled.RequestTitleTypo>제목</Styled.RequestTitleTypo>
						<Styled.RequestTypo>{data?.title}</Styled.RequestTypo>
						<Styled.RequestTitleTypo>요청사항</Styled.RequestTitleTypo>
						<Styled.RequestTypo>{data?.description}</Styled.RequestTypo>
					</Styled.RequestTypoContainer>
				</Styled.RequestContainer>
				<Styled.FeedbackContainer>
					<Styled.MenuTitleTypo>피드백 내용</Styled.MenuTitleTypo>
					<Styled.FeedbackEditorContainer>
						<Styled.FeedbackTitleEditor
							placeholder="제목"
							variant="outlined"
							InputLabelProps={InputLabelProps}
							inputProps={inputProps}
						/>
						<Styled.FeedbackDescriptionEditor
							placeholder="내용"
							variant="outlined"
							InputLabelProps={InputLabelProps}
							inputProps={{
								style: {
									height: 200,
									fontSize,
									lineHeight: '120%',
								},
							}}
							multiline={true}
						/>
					</Styled.FeedbackEditorContainer>
				</Styled.FeedbackContainer>
				<Styled.SubmitButton
					variant="contained"
					color="primary"
					onClick={downloadScreenshot}
				>
					<Styled.SubmitButtonTypo>피드백 제출</Styled.SubmitButtonTypo>
				</Styled.SubmitButton>
			</Styled.MenuContainer>
		</Styled.Root>
	);
};

export default Feedback;

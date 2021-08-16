import { Slider } from '@material-ui/core';
import { requestDetail } from 'api/feedback';
import { ReducerType } from 'features';
import { StateType } from 'features/userInfo/loginSlice';
import React, { useEffect, useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
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

	console.log(canvasData);

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
							valueLabelDisplay="auto"
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
			<Styled.DrawContainer>
				{selectedLayer.map((value: boolean, index: number) => (
					<Styled.DrawCanvas
						ref={(canvasDraw: any) => (canvasRef[index] = canvasDraw)}
						canvasWidth={640}
						canvasHeight={748}
						backgroundColor="#0000"
						imgSrc={'https://t1.daumcdn.net/cfile/tistory/99BACC445A4B25F20B'}
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
				<Styled.FeedbackRequestImg src={data?.thumbnail_list[0]} />
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
				<Styled.SubmitButton>
					<Styled.SubmitButtonTypo>저장</Styled.SubmitButtonTypo>
				</Styled.SubmitButton>
			</Styled.MenuContainer>
		</Styled.Root>
	);
};

export default Feedback;

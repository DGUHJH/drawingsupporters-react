import { Slider } from '@material-ui/core';
import { feedback, requestDetail } from 'api/feedback';
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
	const [brushRadius, setBrushRadius] = useState<number>(6);
	const [brushColor, setBrushColor] = useState('#000');
	const canvasRef: any[] = [useRef<any>(), useRef<any>(), useRef<any>()];
	const [canvasData, setCanvasData] = useState<any[]>([null, null, null]);
	const [checkBackground, setCheckBackground] = useState<boolean>(true);

	const requestId = location.pathname.split('/')[3];
	const [data, setData] = useState<DataProps>();
	const [selectedLayer, setSelectedLayer] = useState([true, false, false]);
	const [imageFile, setImageFile] = useState<any>();
	const imageFileUploadRef = useRef<any>();
	const loginData = useSelector<ReducerType, StateType>((state) => state.login);

	const handleImageFileUpload = (e: any) => {
		if (e.target.files[0].size < 10e6) {
			setImageFile(e.target.files[0]);
		} else {
			alert('10MB 이하로 업로드해주세요!');
		}
	};

	const onLayerSelect = (id: number) => () => {
		if (id !== 3) {
			setCanvasData((prev) => {
				return prev.map((value, index) => {
					return id === index ? canvasRef[index]?.getSaveData() : value;
				});
			});
			setSelectedLayer((prev) => {
				return prev.map((value, index) => (index === id ? !value : value));
			});
		} else {
			setCheckBackground((prev) => !prev);
		}
	};

	const onBrushRadiusChange = (e: any, newValue: any) => {
		setBrushRadius(newValue);
	};

	useEffect(() => {
		requestDetail(requestId).then((res) => {
			setData(res.data.drawing_info);
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

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const onEditorChange = (id: string) => (e: any) => {
		if (id === 'title') {
			setTitle(e.target.value);
		} else if (id === 'description') {
			setDescription(e.target.value);
		}
	};

	const onSubmit = () => {
		if (title === '') {
			alert('제목을 입력해주세요!');
		} else if (description === '') {
			alert('내용을 입력해주세요!');
		} else if (!imageFile) {
			alert('피드백 이미지를 입력해주세요!');
		} else {
			const formatDescription = description.replaceAll('\n', '\\n');
			const formData = new FormData();
			const imageBlob = new Blob([imageFile], {
				type: 'image/png',
			});
			const jsonData: any = {
				title,
				description: formatDescription,
				price: 0,
				feedback_file_type: 'image',
			};
			const dataBlob = new Blob([JSON.stringify(jsonData)], {
				type: 'application/json',
			});
			formData.append('properties', dataBlob);
			formData.append('file', imageBlob, `${requestId}.png`);
			console.log('formatDescription', formatDescription);
			feedback(requestId, formData).then((res) => {
				alert('피드백이 완료되었습니다!');
				history.replace('/');
			});
		}
	};

	const onUndoButtonClick = () => {
		let a = 0;
		selectedLayer.forEach((value, index) => value && (a = index));
		canvasRef[a].undo();
	};

	console.log(imageFile);

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
						<Styled.LayerElement
							onClick={onLayerSelect(3)}
							style={checkBackground ? { background: '#248BD7' } : {}}
						>
							<Styled.LayerElementTypo
								style={checkBackground ? { color: 'white' } : {}}
							>
								배경
							</Styled.LayerElementTypo>
						</Styled.LayerElement>
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
					<Styled.FeedbackRequestImg
						style={checkBackground ? {} : { display: 'none' }}
						src={data?.thumbnail_list[0]}
					/>
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
				<Styled.DrawButtonContainer>
					<Styled.DrawSequenceBackButton
						variant="contained"
						onClick={onUndoButtonClick}
					>
						<Styled.DrawSequenceButtonTypo>
							되돌리기
						</Styled.DrawSequenceButtonTypo>
					</Styled.DrawSequenceBackButton>
					<Styled.DrawDownloadButton
						variant="contained"
						color="primary"
						onClick={downloadScreenshot}
					>
						<Styled.SubmitButtonTypo>다운로드</Styled.SubmitButtonTypo>
					</Styled.DrawDownloadButton>
				</Styled.DrawButtonContainer>
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
							value={title}
							onChange={onEditorChange('title')}
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
							value={description}
							onChange={onEditorChange('description')}
						/>
					</Styled.FeedbackEditorContainer>
					<Styled.RequestImgContainer>
						<input
							type="file"
							name="file"
							accept="image/*"
							onChange={(e) => handleImageFileUpload(e)}
							style={{ display: 'none' }}
							ref={imageFileUploadRef}
						/>
						<Styled.RequestImgButton
							onClick={() => {
								imageFileUploadRef && imageFileUploadRef.current.click();
							}}
						>
							<Styled.RequestImgButtonTypo>
								피드백 이미지
							</Styled.RequestImgButtonTypo>
						</Styled.RequestImgButton>
						<Styled.RequestImgNameWrapper>
							<Styled.RequestImgNameWrapperTypo>
								{imageFile?.name}
							</Styled.RequestImgNameWrapperTypo>
						</Styled.RequestImgNameWrapper>
					</Styled.RequestImgContainer>
				</Styled.FeedbackContainer>
				<Styled.SubmitButton
					variant="contained"
					color="primary"
					onClick={onSubmit}
				>
					<Styled.SubmitButtonTypo>피드백 제출</Styled.SubmitButtonTypo>
				</Styled.SubmitButton>
			</Styled.MenuContainer>
		</Styled.Root>
	);
};

export default Feedback;

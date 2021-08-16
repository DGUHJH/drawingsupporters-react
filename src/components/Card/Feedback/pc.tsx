import { feedback } from 'api/feedback';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import * as Styled from './styled';

type Props = {
	requestId: string;
};

const height = 80;
const fontSize = 24;
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
		padding: '0 24px',
		lineHeight: '250%',
	},
};

const FeedbackCard: React.FC<Props> = ({ requestId }) => {
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [price, setPrice] = useState<number>(0);
	const [imageFile, setImageFile] = useState<any>();

	const imageFileUploadRef = useRef<any>();
	const history = useHistory();

	const handleImageFileUpload = (e: any) => {
		if (e.target.files[0].size < 1000000) {
			setImageFile(e.target.files[0]);
		} else {
			alert('10MB 이하로 업로드해주세요!');
		}
	};

	const onEditorChange = (id: string) => (e: any) => {
		if (id === 'title') {
			setTitle(e.target.value);
		} else if (id === 'description') {
			setDescription(e.target.value);
		} else if (id === 'price') {
			setPrice(e.target.value);
		}
	};

	const onSubmit = async () => {
		if (title === '') {
			alert('제목을 입력해주세요!');
		} else if (description === '') {
			alert('피드백 내용을 입력해주세요!');
		} else {
			const formData = new FormData();
			const imageBlob = await new Blob([imageFile], { type: 'image/*' });
			const data: any = {
				title,
				description,
				price: 0,
				feedback_file_type: 'image',
			};
			const dataBlob = await new Blob([JSON.stringify(data)], {
				type: 'application/json',
			});
			formData.append('properties', dataBlob);
			formData.append('file', imageBlob);
			feedback(requestId, formData);
			console.log(typeof imageBlob);
		}
	};

	const onFeedbackEditorClick = () => {
		window.open(`/feedback/feedback/${requestId}`);
	};

	return (
		<Styled.Root>
			<Styled.FeedbackTitleTypo>피드백 하기</Styled.FeedbackTitleTypo>
			<Styled.FeedbackContainer>
				<Styled.FeedbackEditor
					style={{ height }}
					placeholder="제목"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
					value={title}
					onChange={onEditorChange('title')}
				/>
				<Styled.FeedbackEditor
					style={{ height: '260px' }}
					placeholder="피드백 내용 (최대 200자)"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={{
						style: {
							height: 200,
							fontSize,
							padding: '8px 12px',
							lineHeight: '120%',
						},
					}}
					value={description}
					onChange={onEditorChange('description')}
					multiline={true}
				/>
				<Styled.FeedbackImgContainer>
					<input
						type="file"
						name="file"
						accept="image/*"
						onChange={(e) => handleImageFileUpload(e)}
						style={{ display: 'none' }}
						ref={imageFileUploadRef}
					/>
					<Styled.FeedbackImgButton
						onClick={() => {
							imageFileUploadRef && imageFileUploadRef.current.click();
						}}
					>
						<Styled.FeedbackImgButtonTypo>
							이미지 업로드
						</Styled.FeedbackImgButtonTypo>
					</Styled.FeedbackImgButton>
					<Styled.FeedbackImgNameWrapper>
						<Styled.FeedbackImgNameWrapperTypo>
							{imageFile?.name}
						</Styled.FeedbackImgNameWrapperTypo>
					</Styled.FeedbackImgNameWrapper>
				</Styled.FeedbackImgContainer>
				<Styled.FeedbackEditorContainer>
					<Styled.FeedbackEditorTypo onClick={onFeedbackEditorClick}>
						피드백 에디터 바로가기
					</Styled.FeedbackEditorTypo>
				</Styled.FeedbackEditorContainer>
				<Styled.FeedbackSubmitButtonContainer>
					<Styled.FeedbackSubmitButton onClick={onSubmit}>
						<Styled.FeedbackSubmitButtonTypo>
							제출하기
						</Styled.FeedbackSubmitButtonTypo>
					</Styled.FeedbackSubmitButton>
				</Styled.FeedbackSubmitButtonContainer>
			</Styled.FeedbackContainer>
		</Styled.Root>
	);
};

export default FeedbackCard;

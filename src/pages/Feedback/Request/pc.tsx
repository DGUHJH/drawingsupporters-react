import React from 'react';
import * as Styled from './styled';

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
	},
};

const FeedbackRequest = () => {
	return (
		<Styled.Root>
			<Styled.TitleTypo>피드백 요청</Styled.TitleTypo>
			<Styled.RequestContainer>
				<Styled.RequestTitleEditor
					style={{ height }}
					placeholder="그림 제목"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
				/>
				<Styled.RequestDetailInfoWrapper>
					<Styled.RequestEditor
						style={{ height }}
						placeholder="피드백 분야"
						variant="outlined"
						InputLabelProps={InputLabelProps}
						inputProps={inputProps}
					/>
					<Styled.RequestEditor
						style={{ height }}
						placeholder="피드백 유형"
						variant="outlined"
						InputLabelProps={InputLabelProps}
						inputProps={inputProps}
					/>
					<Styled.RequestEditor
						style={{ height }}
						placeholder="희망 가격대"
						variant="outlined"
						InputLabelProps={InputLabelProps}
						inputProps={inputProps}
					/>
					<Styled.RequestEditor
						style={{ height }}
						placeholder="희망 마감기한"
						variant="outlined"
						InputLabelProps={InputLabelProps}
						inputProps={inputProps}
					/>
				</Styled.RequestDetailInfoWrapper>
				<Styled.RequestTitleEditor
					style={{ height: '260px', marginTop: '40px' }}
					placeholder="피드백 상세 요구사항 (최대 200자)"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={{
						style: {
							height: 200,
							fontSize,
							padding: '8px 12px',
						},
					}}
					multiline={true}
				/>
			</Styled.RequestContainer>
			<Styled.RequestImgContainer>
				<Styled.RequestImgButton>
					<Styled.RequestImgButtonTypo>
						이미지 업로드
					</Styled.RequestImgButtonTypo>
				</Styled.RequestImgButton>
				<Styled.RequestImgNameWrapper />
			</Styled.RequestImgContainer>
			<Styled.RequestPhoneNumberContainer>
				<Styled.RequestEditor
					style={{ height }}
					placeholder="연락처"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
				/>
			</Styled.RequestPhoneNumberContainer>
			<Styled.RequestAgreeContainer>
				<Styled.ReqeustAgreeCheckbox color="primary" />
				<Styled.RequestAgreeTypo>
					사이트 게시에 동의합니다.
				</Styled.RequestAgreeTypo>
			</Styled.RequestAgreeContainer>
			<Styled.RequestSubmitButtonContainer>
				<Styled.RequestSubmitButton>
					<Styled.RequestSubmitButtonTypo>
						제출하기
					</Styled.RequestSubmitButtonTypo>
				</Styled.RequestSubmitButton>
			</Styled.RequestSubmitButtonContainer>
		</Styled.Root>
	);
};

export default FeedbackRequest;

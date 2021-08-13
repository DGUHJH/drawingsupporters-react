import { feedbackDetail } from 'api/feedback';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import * as Styled from './styled';

const FeedbackDetails = () => {
	const location = useLocation();

	useEffect(() => {
		console.log(location.pathname);
		feedbackDetail(location.pathname.split('/')[3]).then((res) => {
			console.log(res);
		});
	}, []);

	return (
		<Styled.Root>
			<Styled.TitleTypo>피드백 상세</Styled.TitleTypo>
			<Styled.FeedbackContainer>
				<Styled.FeedbackTitleTypo>
					캐릭터 그림 피드백 요청합니다.
				</Styled.FeedbackTitleTypo>
				<Styled.MenuTypo>피드백 분야</Styled.MenuTypo>
				<Styled.ContentChipContainer>
					<Styled.ContentChip>
						<Styled.ContentChipTypo>그림체</Styled.ContentChipTypo>
					</Styled.ContentChip>
					<Styled.ContentChip>
						<Styled.ContentChipTypo>구도</Styled.ContentChipTypo>
					</Styled.ContentChip>
				</Styled.ContentChipContainer>

				<Styled.MenuTypo>피드백 유형</Styled.MenuTypo>
				<Styled.ContentChipContainer>
					<Styled.ContentChip>
						<Styled.ContentChipTypo>그림 파일</Styled.ContentChipTypo>
					</Styled.ContentChip>
				</Styled.ContentChipContainer>

				<Styled.MenuTypo>피드백 이미지</Styled.MenuTypo>
				<Styled.ContentChipContainer>
					<Styled.ContentChip>
						<Styled.ContentChipTypo>그림 파일</Styled.ContentChipTypo>
					</Styled.ContentChip>
				</Styled.ContentChipContainer>

				<Styled.MenuTypo>피드백 이미지</Styled.MenuTypo>
				<Styled.FeedbackImgContainer>
					<Styled.FeedbackImg />
					<Styled.FeedbackImg />
					<Styled.FeedbackImg />
				</Styled.FeedbackImgContainer>
			</Styled.FeedbackContainer>
		</Styled.Root>
	);
};

export default FeedbackDetails;

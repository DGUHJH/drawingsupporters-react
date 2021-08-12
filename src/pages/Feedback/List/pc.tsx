import { feedbackList } from 'api/feedback';
import FeedbackListCard from 'components/Card/FeedbackList/pc';
import React, { useEffect, useState } from 'react';
import * as Styled from './styled';

const point = {
	color: '#248BD7',
	borderBottom: '2px #248BD7 solid',
};

const FeedbackList = () => {
	const [select, setSelect] = useState(0);

	const onMenuClick = (id: number) => () => {
		setSelect(id);
	};

	useEffect(() => {
		feedbackList().then((res) => {
			console.log('res', res);
		});
	}, []);

	return (
		<Styled.Root>
			<Styled.TitleTypo>피드백 리스트</Styled.TitleTypo>
			<Styled.MenuContainer>
				<Styled.MenuTypo
					style={select === 0 ? point : {}}
					onClick={onMenuClick(0)}
				>
					진행 중
				</Styled.MenuTypo>
				<Styled.MenuTypo
					style={select === 1 ? point : {}}
					onClick={onMenuClick(1)}
				>
					마감
				</Styled.MenuTypo>
			</Styled.MenuContainer>
			<Styled.CardContainer>
				<FeedbackListCard
					username="드로잉 초보"
					title="캐릭터 그림 피드백 요청합니다."
					chipList={['그림체', '스케치']}
				/>
				<FeedbackListCard
					username="드로잉 초보"
					title="캐릭터 그림 피드백 요청합니다."
					chipList={['그림체', '스케치']}
				/>
				<FeedbackListCard
					username="드로잉 초보"
					title="캐릭터 그림 피드백 요청합니다."
					chipList={['그림체', '스케치']}
				/>
			</Styled.CardContainer>
		</Styled.Root>
	);
};

export default FeedbackList;

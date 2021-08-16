import {
	feedbackList as feedbackListFetch,
	requestList as requestListFetch,
} from 'api/feedback';
import FeedbackListCard from 'components/Card/FeedbackList/pc';
import RequestListCard from 'components/Card/RequestList/pc';
import React, { useEffect, useState } from 'react';
import * as Styled from './styled';

const point = {
	color: '#248BD7',
	borderBottom: '2px #248BD7 solid',
};

const FeedbackList = () => {
	const [select, setSelect] = useState(0);
	const [requestList, setRequestList] = useState([]);
	const [feedbackList, setFeedbackList] = useState([]);

	const onMenuClick = (id: number) => () => {
		setSelect(id);
	};

	useEffect(() => {
		requestListFetch().then((res) => {
			setRequestList(res.data);
			console.log('res', res);
		});
		feedbackListFetch().then((res) => {
			setFeedbackList(res.data);
			console.log('res', res);
		});
	}, []);

	console.log('request', requestList);
	console.log('feedback', feedbackList);

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
				{select === 0
					? requestList?.map((request: any, index: number) => (
							<RequestListCard
								id={request.id}
								username={request.nickname}
								title={request.title}
								thumbnail={request.thumbnail_list[0]}
								chipList={request.feedback_type.split(',')}
							/>
					  ))
					: feedbackList?.map((request: any, index: number) => (
							<FeedbackListCard
								id={request.id}
								username="멘토"
								title={request.title}
								thumbnail={request.thumbnail[0]}
							/>
					  ))}
			</Styled.CardContainer>
		</Styled.Root>
	);
};

export default FeedbackList;

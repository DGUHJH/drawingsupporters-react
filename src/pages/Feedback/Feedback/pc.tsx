import { requestDetail } from 'api/feedback';
import { ReducerType } from 'features';
import { StateType } from 'features/userInfo/loginSlice';
import React, { useEffect, useState } from 'react';
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
	const requestId = location.pathname.split('/')[3];
	const [data, setData] = useState<DataProps>();
	const loginData = useSelector<ReducerType, StateType>((state) => state.login);

	useEffect(() => {
		requestDetail(requestId).then((res) => {
			setData(res.data);
			console.log(res);
		});
	}, []);

	return (
		<Styled.Root>
			<Styled.MenuContainer>
				<Styled.LayerContainer>
					<Styled.MenuTitleTypo>레이어</Styled.MenuTitleTypo>
				</Styled.LayerContainer>
				<Styled.ColorContainer>
					<Styled.MenuTitleTypo>채색</Styled.MenuTitleTypo>
				</Styled.ColorContainer>
			</Styled.MenuContainer>
			<Styled.DrawContainer>
				<Styled.FeedbackRequestImg src={data?.thumbnail_list[0]} />
			</Styled.DrawContainer>
			<Styled.MenuContainer>
				<Styled.RequestContainer>
					<Styled.MenuTitleTypo>요청 사항</Styled.MenuTitleTypo>
				</Styled.RequestContainer>
				<Styled.SubmitButton>
					<Styled.SubmitButtonTypo>제출</Styled.SubmitButtonTypo>
				</Styled.SubmitButton>
			</Styled.MenuContainer>
		</Styled.Root>
	);
};

export default Feedback;

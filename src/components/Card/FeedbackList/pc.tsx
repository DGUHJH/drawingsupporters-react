import React from 'react';
import { useHistory } from 'react-router';
import * as Styled from './styled';

type Props = {
	id: number;
	username: string;
	title: string;
	thumbnail: string;
};

const FeedbackListCard: React.FC<Props> = ({
	id,
	username,
	title,
	thumbnail,
}) => {
	const history = useHistory();

	const onCardClick = () => {
		history.push(`/feedback/details/${id}`);
	};

	return (
		<Styled.Root onClick={onCardClick}>
			<Styled.LeftContainer>
				<Styled.UserContainer>
					<Styled.UserProfileImg />
					<Styled.UsernameTypo>{username}</Styled.UsernameTypo>
				</Styled.UserContainer>
				<Styled.RequestTitleTypo>{title}</Styled.RequestTitleTypo>
			</Styled.LeftContainer>
			<Styled.RightContainer>
				<Styled.FeedbackRequestImg src={thumbnail} />
			</Styled.RightContainer>
		</Styled.Root>
	);
};

export default FeedbackListCard;

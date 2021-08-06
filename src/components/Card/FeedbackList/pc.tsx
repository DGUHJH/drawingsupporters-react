import React from 'react';
import * as Styled from './styled';

type Props = {
	username: string;
	title: string;
	chipList: string[];
};

const FeedbackListCard: React.FC<Props> = ({ username, title, chipList }) => {
	return (
		<Styled.Root>
			<Styled.LeftContainer>
				<Styled.UserContainer>
					<Styled.UserProfileImg />
					<Styled.UsernameTypo>{username}</Styled.UsernameTypo>
				</Styled.UserContainer>
				<Styled.RequestTitleTypo>{title}</Styled.RequestTitleTypo>
				<Styled.RequestChipContainer>
					{chipList?.map((value, index) => (
						<Styled.RequestChipWrapper key={`feedback_list_card_${index}`}>
							<Styled.RequestChipTypo>{value}</Styled.RequestChipTypo>
						</Styled.RequestChipWrapper>
					))}
				</Styled.RequestChipContainer>
			</Styled.LeftContainer>
			<Styled.RightContainer>
				<Styled.FeedbackRequestImg />
			</Styled.RightContainer>
		</Styled.Root>
	);
};

export default FeedbackListCard;

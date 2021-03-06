import React from 'react';
import * as Styled from './styled';

type Props = {
	title: string;
	description: string;
	imageSrl: string;
};

const FeedbackDetailsCard: React.FC<Props> = ({
	title,
	description,
	imageSrl,
}) => {
	return (
		<Styled.Root>
			<Styled.FeedbackTitleTypo>{title}</Styled.FeedbackTitleTypo>
			<Styled.FeedbackDescriptionTypo>
				{description.split('\\n').map((line: string) => {
					return (
						<span>
							{line}
							<br />
						</span>
					);
				})}
			</Styled.FeedbackDescriptionTypo>
			<Styled.FeedbackImg src={imageSrl} />
		</Styled.Root>
	);
};

export default FeedbackDetailsCard;

import banner1 from 'assets/images/banner4.png';
import React from 'react';
import * as Styled from './styled';

const Main = () => {
	return (
		<Styled.Root>
			<Styled.BannerContainer>
				<Styled.BannerTitleContainer>
					<Styled.BannerTitleTypo>
						안녕하세요 실시간 비대면 그림 코칭 시스템 <br />
						<Styled.BannerTitleTypoBlue>
							드로잉서포터즈
						</Styled.BannerTitleTypoBlue>
						입니다.
					</Styled.BannerTitleTypo>
				</Styled.BannerTitleContainer>
				<Styled.BannerImgContainer>
					<Styled.BannerImg src={banner1} />
				</Styled.BannerImgContainer>
			</Styled.BannerContainer>
		</Styled.Root>
	);
};

export default Main;

import logo from 'assets/images/logo.png';
import React from 'react';
import * as Styled from './styled';

const Header = () => {
	return (
		<Styled.Root>
			<Styled.RootContainer>
				<Styled.LeftContainer>
					<Styled.LogoImgWrapper>
						<Styled.LogoImg src={logo} />
					</Styled.LogoImgWrapper>
					<Styled.MenuContainer>
						<Styled.MenuTypo>피드백 요청</Styled.MenuTypo>
						<Styled.MenuTypo>피드백 리스트</Styled.MenuTypo>
					</Styled.MenuContainer>
				</Styled.LeftContainer>
				<Styled.RightContainer>
					<Styled.LoginButton>
						<Styled.LoginButtonTypo>로그인</Styled.LoginButtonTypo>
					</Styled.LoginButton>
					<Styled.JoinButton>
						<Styled.JoinButtonTypo>회원가입</Styled.JoinButtonTypo>
					</Styled.JoinButton>
				</Styled.RightContainer>
			</Styled.RootContainer>
		</Styled.Root>
	);
};

export default Header;

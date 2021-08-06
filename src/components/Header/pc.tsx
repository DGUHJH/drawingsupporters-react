import logo from 'assets/images/logo.png';
import React from 'react';
import { useHistory } from 'react-router';
import * as Styled from './styled';

const Header = () => {
	const history = useHistory();

	const onMenuClick = (url: string) => () => {
		history.push(url);
	};

	return (
		<Styled.Root>
			<Styled.RootContainer>
				<Styled.LeftContainer>
					<Styled.LogoImgWrapper>
						<Styled.LogoImg src={logo} onClick={onMenuClick('/')} />
					</Styled.LogoImgWrapper>
					<Styled.MenuContainer>
						<Styled.MenuTypo onClick={onMenuClick('/feedback/request')}>
							피드백 요청
						</Styled.MenuTypo>
						<Styled.MenuTypo onClick={onMenuClick('/feedback/list')}>
							피드백 리스트
						</Styled.MenuTypo>
					</Styled.MenuContainer>
				</Styled.LeftContainer>
				<Styled.RightContainer>
					<Styled.LoginButton onClick={onMenuClick('/user/login')}>
						<Styled.LoginButtonTypo>로그인</Styled.LoginButtonTypo>
					</Styled.LoginButton>
					<Styled.JoinButton onClick={onMenuClick('/user/join')}>
						<Styled.JoinButtonTypo>회원가입</Styled.JoinButtonTypo>
					</Styled.JoinButton>
				</Styled.RightContainer>
			</Styled.RootContainer>
		</Styled.Root>
	);
};

export default Header;

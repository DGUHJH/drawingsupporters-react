import logo from 'assets/images/logo.png';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import * as Styled from './styled';

const Header = () => {
	const history = useHistory();
	const location = useLocation();
	const point = {
		color: '#248cd7',
		borderBottom: '2px #248cd7 solid',
	};

	const onMenuClick = (url: string) => () => {
		history.push(url);
	};

	console.log('location', location.pathname);

	return (
		<Styled.Root>
			<Styled.RootContainer>
				<Styled.LeftContainer>
					<Styled.LogoImgWrapper>
						<Styled.LogoImg src={logo} onClick={onMenuClick('/')} />
					</Styled.LogoImgWrapper>
					<Styled.MenuContainer>
						<Styled.MenuTypo
							style={location.pathname === '/feedback/request' ? point : {}}
							onClick={onMenuClick('/feedback/request')}
						>
							피드백 요청
						</Styled.MenuTypo>
						<Styled.MenuTypo
							style={location.pathname === '/feedback/list' ? point : {}}
							onClick={onMenuClick('/feedback/list')}
						>
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

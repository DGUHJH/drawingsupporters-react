import { cookies } from 'api/methods/cookies';
import logo from 'assets/images/logo.png';
import { ReducerType } from 'features';
import { authLogin, StateType } from 'features/userInfo/loginSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import * as Styled from './styled';

const point = {
	color: '#248cd7',
	borderBottom: '2px #248cd7 solid',
};

const Header = () => {
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();
	const loginData = useSelector<ReducerType, StateType>((state) => state.login);

	const onMenuClick = (url: string) => () => {
		history.push(url);
	};

	const onLogout = () => {
		cookies.remove('access_token');
		cookies.remove('refresh_token');
		history.push('/');
		history.go(0);
	};

	useEffect(() => {
		dispatch(authLogin());
	}, [history, location]);

	console.log('loginData', loginData);

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
					{loginData.nickname === 'initialValue' || !loginData.nickname ? (
						<>
							<Styled.LoginButton onClick={onMenuClick('/user/login')}>
								<Styled.LoginButtonTypo>로그인</Styled.LoginButtonTypo>
							</Styled.LoginButton>
							<Styled.JoinButton onClick={onMenuClick('/user/join')}>
								<Styled.JoinButtonTypo>회원가입</Styled.JoinButtonTypo>
							</Styled.JoinButton>
						</>
					) : (
						<>
							<Styled.MenuTypo>
								<Styled.MenuPointTypo>
									{loginData.nickname !== 'initialValue' && loginData.nickname}
								</Styled.MenuPointTypo>
								&nbsp;
								{loginData.nickname !== 'initialValue' && loginData.userType
									? '강사'
									: '학생'}
								님
							</Styled.MenuTypo>
							<Styled.MenuTypo onClick={onLogout}>로그아웃</Styled.MenuTypo>
						</>
					)}
				</Styled.RightContainer>
			</Styled.RootContainer>
		</Styled.Root>
	);
};

export default Header;

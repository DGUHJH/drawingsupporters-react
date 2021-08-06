import React from 'react';
import * as Styled from './styled';

const height = 80;
const fontSize = 24;
const InputLabelProps = {
	style: {
		fontFamily: 'Noto Sans Regular',
		height,
		fontSize,
	},
};
const inputProps = {
	style: {
		fontFamily: 'Noto Sans Regular',
		height,
		fontSize,
		padding: '0 24px',
	},
};

const UserLogin = () => {
	return (
		<Styled.Root>
			<Styled.LoginContainer>
				<Styled.LoginTitleTypo>
					간편하게 로그인하고 <br />
					비대면 코칭을 경험해보세요.
				</Styled.LoginTitleTypo>
				<Styled.RequestEditor
					style={{ height, marginTop: '80px' }}
					placeholder="아이디 (이메일 주소)"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
				/>
				<Styled.RequestEditor
					style={{ height }}
					placeholder="비밀번호"
					type="password"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
				/>
				<Styled.LoginSubmitButton>
					<Styled.LoginSubmitButtonTypo>로그인</Styled.LoginSubmitButtonTypo>
				</Styled.LoginSubmitButton>
				<Styled.JoinTypo>비밀번호 찾기 ㅣ 회원가입</Styled.JoinTypo>
			</Styled.LoginContainer>
		</Styled.Root>
	);
};

export default UserLogin;

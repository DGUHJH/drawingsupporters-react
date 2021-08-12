import { cookies } from 'api/methods/cookies';
import { login } from 'api/user';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
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
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const history = useHistory();

	const onChange = (id: string) => (e: any) => {
		if (id === 'email') {
			setEmail(e.target.value);
		} else if (id === 'password') {
			setPassword(e.target.value);
		}
	};

	const onSubmit = () => {
		login({ email, password }).then((res) => {
			if (res.status === 200) {
				cookies.set('access_token', res.data.access_token);
				cookies.set('refresh_token', res.data.refresh_token);
				history.push('/');
			} else {
				alert(res.message);
			}
		});
	};

	const editorEnterEvent = (e: any) => {
		if (e.key === 'Enter') {
			onSubmit();
		}
	};

	const onJoinButtonClick = () => {
		history.push('/user/join');
	};

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
					value={email}
					onChange={onChange('email')}
					onKeyPress={editorEnterEvent}
				/>
				<Styled.RequestEditor
					style={{ height }}
					placeholder="비밀번호"
					type="password"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
					value={password}
					onChange={onChange('password')}
					onKeyPress={editorEnterEvent}
				/>
				<Styled.LoginSubmitButton onClick={onSubmit}>
					<Styled.LoginSubmitButtonTypo>로그인</Styled.LoginSubmitButtonTypo>
				</Styled.LoginSubmitButton>
				<Styled.JoinTypo>회원가입</Styled.JoinTypo>
			</Styled.LoginContainer>
		</Styled.Root>
	);
};

export default UserLogin;

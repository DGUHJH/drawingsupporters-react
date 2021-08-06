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

const UserJoin = () => {
	return (
		<Styled.Root>
			<Styled.JoinContainer>
				<Styled.JoinTitleTypo>
					간편하게 가입하고 <br />
					비대면 코칭을 경험해보세요.
				</Styled.JoinTitleTypo>
				<Styled.RequestEditor
					style={{ height, marginTop: '80px' }}
					placeholder="아이디 (이메일 주소)"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
				/>
				<Styled.RequestEditor
					style={{ height, marginTop: '60px' }}
					placeholder="비밀번호"
					type="password"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
				/>
				<Styled.RequestEditor
					style={{ height }}
					placeholder="비밀번호 확인"
					type="password"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
				/>
				<Styled.RequestEditor
					style={{ height, marginTop: '60px' }}
					placeholder="닉네임"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
				/>
				<Styled.RequestEditor
					style={{ height }}
					placeholder="전화번호"
					variant="outlined"
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
				/>
				<Styled.JoinAgreeContainer>
					<Styled.JoinAgreeCheckbox color="primary" />
					<Styled.JoinAgreeTypo>
						<Styled.JoinAgreePointTypo>가입 약관</Styled.JoinAgreePointTypo> 및{' '}
						<Styled.JoinAgreePointTypo>
							마케팅 정보 수집
						</Styled.JoinAgreePointTypo>
						에 동의합니다.
					</Styled.JoinAgreeTypo>
				</Styled.JoinAgreeContainer>
				<Styled.JoinSubmitButton>
					<Styled.JoinSubmitButtonTypo>회원가입</Styled.JoinSubmitButtonTypo>
				</Styled.JoinSubmitButton>
			</Styled.JoinContainer>
		</Styled.Root>
	);
};

export default UserJoin;

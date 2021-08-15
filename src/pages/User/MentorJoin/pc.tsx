import { InputAdornment } from '@material-ui/core';
import { checkEmail, checkNickname, mentorJoin } from 'api/user';
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

const UserJoin = () => {
	const [isEmailDuplicate, setIsEmailDuplicate] = useState<boolean>(true);
	const [isNicknameDuplicate, setIsNicknameDuplicate] = useState<boolean>(true);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordConfirm, setPasswordConfirm] = useState<string>('');
	const [nickname, setNickname] = useState<string>('');
	const [phoneNumber, setPhoneNumber] = useState<string>('');
	const [agreement, setAgreement] = useState<boolean>(false);

	const history = useHistory();

	const onCheckButtonClick = (id: string) => () => {
		const emailRule =
			/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

		if (id === 'email') {
			if (emailRule.test(email)) {
				checkEmail(email).then((res) => {
					setIsEmailDuplicate(res.data.is_duplicate);
				});
			} else {
				alert('이메일 형식에 맞추어 입력해주세요!');
			}
		} else if (id === 'nickname') {
			if (nickname === '') {
				alert('닉네임을 입력해주세요!');
			} else {
				checkNickname(nickname).then((res) => {
					setIsNicknameDuplicate(res.data.is_duplicate);
				});
			}
		}
	};

	const onEditorChange = (id: string) => (e: any) => {
		if (id === 'email') {
			if (!isEmailDuplicate) {
				alert('이메일 중복 체크를 완료한 후에는 이메일을 변경할 수 없습니다!');
			} else {
				setEmail(e.target.value);
			}
		} else if (id === 'password') {
			setPassword(e.target.value);
		} else if (id === 'passwordConfirm') {
			setPasswordConfirm(e.target.value);
		} else if (id === 'nickname') {
			if (!isNicknameDuplicate) {
				alert('닉네임 중복 체크를 완료한 후에는 닉네임을 변경할 수 없습니다!');
			} else {
				setNickname(e.target.value);
			}
		} else if (id === 'phoneNumber') {
			setPhoneNumber(e.target.value);
		} else if (id === 'agreement') {
			setAgreement(e.target.checked);
		}
	};

	const onSubmit = () => {
		const passwordRule =
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
		const phoneNumberRule = /^[0-9\b -]{0,13}$/;
		const data = {
			email,
			password,
			nickname,
			phone_number: phoneNumber,
		};

		if (isEmailDuplicate) {
			alert('이메일 중복 체크를 해주세요!');
		} else if (!passwordRule.test(password)) {
			alert('비밀번호 형식에 맞추어 입력해주세요!');
		} else if (password !== passwordConfirm) {
			alert('비밀번호와 비밀번호 확인이 일치하지 않습니다!');
		} else if (isNicknameDuplicate) {
			alert('닉네임 중복 체크를 해주세요!');
		} else if (!phoneNumberRule.test(phoneNumber)) {
			alert('올바른 핸드폰 번호를 입력해주세요!');
		} else if (!agreement) {
			alert('약관에 동의해주세요!');
		} else {
			mentorJoin(data).then((res) => {
				if (res?.status === 200) {
					alert('회원가입이 완료되었습니다!');
					history.replace('/');
				} else {
					alert('회원가입에 실패하였습니다!');
				}
			});
		}
	};

	console.log('agreement', agreement);

	return (
		<Styled.Root>
			<Styled.JoinContainer>
				<Styled.JoinTitleTypo>
					간편하게 가입하고 <br />
					비대면 코칭을 경험해보세요.
				</Styled.JoinTitleTypo>
				<Styled.MenteeJoinLinkTypo
					onClick={() => history.push('/user/mentor-join')}
				>
					이 폼은 멘토용 가입 폼입니다. 학생 가입은 여기를 클릭해주세요.
				</Styled.MenteeJoinLinkTypo>
				<Styled.RequestEditor
					style={{ height: '100px', marginTop: '80px' }}
					placeholder="아이디 (이메일 주소)"
					variant="outlined"
					value={email}
					onChange={onEditorChange('email')}
					InputLabelProps={InputLabelProps}
					helperText={
						!isEmailDuplicate
							? '중복 체크가 완료되었습니다.'
							: '이메일 중복 체크를 해주세요.'
					}
					InputProps={{
						endAdornment: (
							<InputAdornment position="start">
								<Styled.DuplicateCheckButton
									onClick={onCheckButtonClick('email')}
								>
									<Styled.DuplicateCheckButtonTypo>
										중복 체크
									</Styled.DuplicateCheckButtonTypo>
								</Styled.DuplicateCheckButton>
							</InputAdornment>
						),
						style: {
							fontFamily: 'Noto Sans Regular',
							height,
							fontSize,
							padding: '0 12px',
						},
					}}
				/>
				<Styled.RequestEditor
					style={{ height: '100px', marginTop: '60px' }}
					placeholder="비밀번호"
					type="password"
					variant="outlined"
					helperText="영문 + 숫자 + 특수문자 조합 8자 이상"
					value={password}
					onChange={onEditorChange('password')}
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
				/>
				<Styled.RequestEditor
					style={{ height }}
					placeholder="비밀번호 확인"
					type="password"
					variant="outlined"
					value={passwordConfirm}
					onChange={onEditorChange('passwordConfirm')}
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
				/>
				<Styled.RequestEditor
					style={{ height: '100px', marginTop: '60px' }}
					placeholder="닉네임"
					variant="outlined"
					value={nickname}
					onChange={onEditorChange('nickname')}
					InputLabelProps={InputLabelProps}
					helperText={
						!isNicknameDuplicate
							? '중복 체크가 완료되었습니다.'
							: '닉네임 중복 체크를 해주세요.'
					}
					InputProps={{
						endAdornment: (
							<InputAdornment position="start">
								<Styled.DuplicateCheckButton
									onClick={onCheckButtonClick('nickname')}
								>
									<Styled.DuplicateCheckButtonTypo>
										중복 체크
									</Styled.DuplicateCheckButtonTypo>
								</Styled.DuplicateCheckButton>
							</InputAdornment>
						),
						style: {
							fontFamily: 'Noto Sans Regular',
							height,
							fontSize,
							padding: '0 12px',
						},
					}}
				/>
				<Styled.RequestEditor
					style={{ height }}
					placeholder="전화번호"
					variant="outlined"
					value={phoneNumber}
					onChange={onEditorChange('phoneNumber')}
					InputLabelProps={InputLabelProps}
					inputProps={inputProps}
				/>
				<Styled.JoinAgreeContainer>
					<Styled.JoinAgreeCheckbox
						color="primary"
						checked={agreement}
						onChange={onEditorChange('agreement')}
					/>
					<Styled.JoinAgreeTypo>
						<Styled.JoinAgreePointTypo>가입 약관</Styled.JoinAgreePointTypo> 및{' '}
						<Styled.JoinAgreePointTypo>
							마케팅 정보 수집
						</Styled.JoinAgreePointTypo>
						에 동의합니다.
					</Styled.JoinAgreeTypo>
				</Styled.JoinAgreeContainer>
				<Styled.JoinSubmitButton onClick={onSubmit}>
					<Styled.JoinSubmitButtonTypo>회원가입</Styled.JoinSubmitButtonTypo>
				</Styled.JoinSubmitButton>
			</Styled.JoinContainer>
		</Styled.Root>
	);
};

export default UserJoin;

import logo from 'assets/images/logo.png';
import React from 'react';
import * as Styled from './styled';

const Footer = () => {
	return (
		<Styled.Body>
			<Styled.Root>
				<Styled.LeftContainer>
					<Styled.TermsTypo>이용약관 ㅣ 개인정보처리방침</Styled.TermsTypo>
					<Styled.InfoTypo>
						상호명 : 드로잉서포터즈 · 대표 : 황재형 <br />
						이메일 : drawingspptrs@gmail.com · 연락처 : 010-3120-4914
					</Styled.InfoTypo>
				</Styled.LeftContainer>
				<Styled.RightContainer>
					<Styled.LogoImg src={logo} />
				</Styled.RightContainer>
			</Styled.Root>
		</Styled.Body>
	);
};

export default Footer;

import { Box, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
	width: 100%;
`;

export const BannerContainer = styled(Box)`
	width: 100%;
	height: 768px;
	margin-top: 60px;
	border-bottom: 1px #eaeaea solid;
`;

export const BannerTitleContainer = styled(Container)`
	&&& {
		padding: 0;
	}
`;

export const BannerTitleTypo = styled(Typography)`
	&&& {
		font-family: 'Noto Sans Regular';
		font-weight: bold;
		font-size: 40px;
	}
`;

export const BannerTitleTypoBlue = styled.span`
	color: #248bd7;
`;

export const BannerImgContainer = styled(Container)`
	&&& {
		width: 100%;
		padding: 0;
		margin-top: 40px;
		overflow: hidden;
	}
`;

export const BannerImgWrapper = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const BannerImg = styled.img`
	width: 1280px;
	height: 480px;
`;

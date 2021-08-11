import banner1 from 'assets/images/banner1.png';
import banner2 from 'assets/images/banner2.png';
import banner3 from 'assets/images/banner3.png';
import banner4 from 'assets/images/banner4.png';
import FeedbackRequest from 'pages/Feedback/Request/pc';
import React from 'react';
import SwiperCore, { A11y, Autoplay, Scrollbar } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './styled';

SwiperCore.use([Scrollbar, A11y, Autoplay]);

const bannerList = [banner1, banner2, banner3, banner4];

const Main = () => {
	return (
		<Styled.Root>
			<Styled.BannerContainer>
				<Styled.BannerTitleContainer>
					<Styled.BannerTitleTypo>
						안녕하세요 실시간 비대면 그림 코칭 시스템 <br />
						<Styled.BannerTitleTypoBlue>
							드로잉서포터즈
						</Styled.BannerTitleTypoBlue>
						입니다.
					</Styled.BannerTitleTypo>
				</Styled.BannerTitleContainer>
				<Styled.BannerImgContainer>
					<Swiper
						slidesPerView={1}
						pagination={{ clickable: true }}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={(swiper) => {}}
						autoplay={true}
						style={{ width: '1280px' }}
					>
						{bannerList.map((banner, index) => (
							<SwiperSlide
								style={{ width: '1280px' }}
								key={`banner_swiper_slide_${index}`}
							>
								<Styled.BannerImgWrapper>
									<Styled.BannerImg src={banner} />
								</Styled.BannerImgWrapper>
							</SwiperSlide>
						))}
					</Swiper>
				</Styled.BannerImgContainer>
			</Styled.BannerContainer>
			<FeedbackRequest />
		</Styled.Root>
	);
};

export default Main;

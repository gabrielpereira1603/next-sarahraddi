"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Img1 from './images/img1.jpeg';
import Img2 from './images/img2.jpeg';
import Img3 from './images/img3.jpeg';
import Image from 'next/image';
import style from "@/app/components/learnMore/learnMore.module.css";

export default function LearnMore() {
  return (
    <section className={style.learnMore}>
        <div className={style.content}>
            <div className={style.title}>
                <h2>Saiba mais sobre a Sarah Raddi</h2>
                <h3>Fique por dentro de tudo que está sendo feito!</h3>
            </div>
            <div className={style.carrousel}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    loop={true} 
                    pagination={{ clickable: true }}
                    breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 10 }, // Telas pequenas
                    768: { slidesPerView: 4, spaceBetween: 20 }, // Telas maiores
                    }}
                >
                    <SwiperSlide>
                        <div className={style.slideContent}>
                            <Image src={Img1} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.slideContent}>
                            <Image src={Img2} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.slideContent}>
                            <Image src={Img3} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.slideContent}>
                            <img src="https://placehold.co/400" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.slideContent}>
                            <img src="https://placehold.co/400" alt=""/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  );
}

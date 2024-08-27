"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
                            <img src="https://nikolasferreira.com.br/wp-content/uploads/2023/03/ms-1.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.slideContent}>
                            <img src="https://nikolasferreira.com.br/wp-content/uploads/2023/03/emens.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.slideContent}>
                            <img src="https://nikolasferreira.com.br/wp-content/uploads/2023/03/entrevista.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.slideContent}>
                            <img src="https://nikolasferreira.com.br/wp-content/uploads/2023/03/discurso.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.slideContent}>
                            <img src="https://nikolasferreira.com.br/wp-content/uploads/2023/03/entrevista.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  );
}

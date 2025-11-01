import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css';
export default function SlideSkeleton() {
    const skeletons = Array(6).fill(0); // 6 cards bana rahe hain

    return (
        <>
            <Swiper
                style={{ '--swiper-navigation-color': '#ff5722', '--swiper-navigation-size': '30px' }}
                spacebetween={16}
                breakpoints={{
                    768: {
                        slidesPerView: 3
                    },
                    480: {
                        slidesPerView: 2
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}
                modules={[Navigation]}
                navigation
                className='mySwiper'>
                {skeletons.map((_, i) => (
                    <SwiperSlide key={i}>
                        <div className="box1 places-box placeholder-glow ">
                            <div className="skeleton-img placeholder col-12" style={{ height: "300px" }}></div>
                            <div className="wrapper-discount">
                                <span className="placeholder col-4"></span>
                            </div>
                            <div className="tour-content">
                                <h3 className="title placeholder-glow">
                                    <span className="placeholder col-8"></span>
                                </h3>
                                <div className="tour-price placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                ))
                }
            </Swiper>
        </>
    );
}

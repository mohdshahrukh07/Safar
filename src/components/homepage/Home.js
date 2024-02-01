
import './Homepage.css'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import TravelBox from '../packages/TravelBox';
export default function Home() {
    const readMore = () => {
        window.scroll({
          top: 735, 
          behavior: 'smooth', 
        });
    };
    return (
        <div>
            <div className="header">
                <img src="https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg" alt="" />
                <div className="header-container">
                    <div className="header-title">
                        <h1 className='title-start'>EXPLORE</h1>
                        <h1 className='title-end'>THE WORLD</h1>
                        <p>The journey of a lifetime starts with a single step, share your happiness with us and book your new adventures</p>
                    </div>
                    <div className='button-container'>
                    <Link to='/tour'><div className="btn-top btn-left">Choose Tour</div></Link>
                    <div className="btn-top btn-right" onClick={readMore}>Read More</div>
                    </div>
                </div>
            </div>
            <div className="menu-bar">
                <div className="menu-items">
                    <Swiper spaceBetween={16}
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
                        }} modules={[Navigation]}
                        navigation
                        style={{ '--swiper-navigation-size': '25px', '--swiper-navigation-color': '#6c757d' }}>
                        <SwiperSlide>
                            <div className="menu-box">
                                <div className="db-logo">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="detail-box">
                                    <h3 className="heading-title">1000+ local tours</h3>
                                    <span className="title">you will enjoy the tour</span>
                                </div>
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="menu-box">
                                <div className="db-logo">
                                    <i className="fa-regular fa-snowflake"></i>
                                </div>
                                <div className="detail-box">
                                    <h3 className="heading-title">Winter Destinetions</h3>
                                    <span className="title">you will enjoy the tour</span>
                                </div>
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="menu-box">
                                <div className="db-logo">
                                    <i className="fa-regular fa-face-smile"></i>
                                </div>
                                <div className="detail-box">
                                    <h3 className="heading-title">98%Happy Travels</h3>
                                    <span className="title">you will enjoy the tour</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <TravelBox />
        </div>
    )
}

import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './Travelbox.css'
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css';
function TravelBox() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = `${process.env.PUBLIC_URL}/SafarData.json`;
        const data = await fetch(jsonData);
        const parsedData = await data.json();
        setState(parsedData.TravelPackage);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const itemsPerPage = 6;
  const currentPage = 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = state.slice(startIndex, endIndex);
  return (
    <div>
      <div className="travel-packages">
        <div className="package-heading">
          <div className="heading-line">Popular Travel Packages</div>
          <h1>Top Cities for Travel</h1>
        </div>
        <div className="packages" >
          {currentData.map((element => {
            return <div className="card-container" key={element.id} >
              <div className="inner-image"><img src={element.urlToImage} alt="" /></div>
              <div className="card-detail">
                <div className="inner-detail">
                  <div className="card-offer">{element.discount}</div>
                  <div className="card-box">
                    <div className="tour-title">
                      <div className="tour-stars"> <i className="fa-solid fa-star" ></i>
                        <i className="fa-solid fa-star" ></i>
                        <i className="fa-solid fa-star" ></i>
                        <i className="fa-solid fa-star" ></i>
                        <i className="fa-solid fa-star" ></i></div>
                      <Link to={`/bookpage/${element.id}`}><h3 className="card-title">{element.title}</h3></Link>
                      <div className="tour-address">
                        <i className="fa-solid fa-location-dot" ></i>
                        {element.location}
                      </div>
                    </div>
                  </div>
                  <div className="tour-rate">
                    <span className="tour-old-price">
                      <span className="old-price-symbol">&#x20B9;</span>
                      {element.cutprice}
                    </span>
                    <span className="tour-current-price">
                      <span className="current-price-symbol">&#x20B9;</span>
                      {element.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          }))
          }
        </div>
      </div>
      <div className="places">
        <div className="package-heading">
          <div className="heading-line">Best Staying Places</div>
          <h1>Top Staying Places</h1>
        </div>
        <div className="container-box">
          <div className="box-row">
            <div className="box-items">
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
                {currentData.map((element => {
                  return <SwiperSlide key={element.id}>
                    <div className="box1 places-box">
                      <img src={element.image} alt="" />
                      <div className="wrapper-discount">
                        <div className="text">Discount {element.discount}</div>
                      </div>
                      <div className="tour-content">
                        <h3 className="title"><Link to={`/bookpage/${element.id}`}>{element.title}</Link></h3>
                        <div className="tour-price">
                          <span className="tour-price-info">
                            <span className="current-amount" data-amount="142.50">
                              <span className="current-symbol">&#x20B9;</span>
                              {element.price}
                            </span>
                          </span>
                          <span> / ticket </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                }))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="trending-events">
        <div className="package-heading">
          <div className="heading-line">Trending Event of the Week</div>
          <h1>Trending Event</h1>
        </div>
      </div>
      <div className="event-box">

        <div className="event-detail">
          <i className="fa-solid fa-map-location-dot fa-2xl" ></i>
          <div className="events">
            <span className="events-count">584</span>
            <p className="events-title">Top Locak Guides</p>
          </div>
        </div>

        <div className="event-detail">
          <i className="fa-regular fa-sun fa-2xl" ></i>
          <div className="events">
            <span className="events-count">7,410</span>
            <p className="events-title">Winter Destinations</p>
          </div>
        </div>
        <div className="event-detail">
          <i className="fa-solid fa-route fa-2xl" ></i>
          <div className="events">
            <span className="events-count">680</span>
            <p className="events-title">New Tours</p>
          </div>
        </div>
        <div className="event-detail">
          <i className="fa-regular fa-face-smile-beam fa-2xl" ></i>
          <div className="events">
            <span className="events-count">2,540</span>
            <p className="events-title">Happy Travelers</p>
          </div>
        </div>
      </div>
      <div className="client-box">

        <div className="package-heading">
          <div className="heading-line">What Out Client Saying</div>
          <h1>Our Traveler Say</h1>
        </div>
        <div className="client-slider">
          <div className="slide-row">

            <div className="slide-items">
              <Swiper
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
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation
                style={{
                  '--swiper-navigation-size': '25px',
                  '--swiper-navigation-color': '#6c757d',
                  '--swiper-pagination-bottom': '-5px',
                  '--swiper-pagination-color': '#ff9800',
                  '--swiper-pagination-bullet-width': '12px',
                  '--swiper-pagination-bullet-height': '12px',
                  '--swiper-pagination-bullet-horizontal-gap': '10px'
                }}>
                <SwiperSlide>
                  <div className="client-data client-box1">

                    <div className="profile">
                      <img src="https://th.bing.com/th/id/OIP.5bjWxXxX2sXoAV9kgYQhTwHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.3" alt="" />
                    </div>

                    <h3>Tom Hanry</h3>

                    <p className="job">Photographer</p>
                    <div className="stars">
                      <i className="fa-solid fa-star" ></i>
                      <i className="fa-solid fa-star" ></i>
                      <i className="fa-solid fa-star" ></i>
                      <i className="fa-solid fa-star" ></i>
                      <i className="fa-solid fa-star" ></i>
                    </div>
                    <p className="discription">Experience of travelling with Safar has been very satisfactory. They have faithfully stuck to the schedule that was planned prior to the tour.</p>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-data client-box2">
                    <div className="profile">
                      <img src="https://th.bing.com/th/id/OIP.Nk6prPA-hhRsaCpKDr4sMgHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.3" alt="" />
                    </div>

                    <h3>Alisya clark</h3>

                    <p className="job">vloger</p>
                    <div className="stars">
                      <i className="fa-solid fa-star" ></i>
                      <i className="fa-solid fa-star" ></i>
                      <i className="fa-solid fa-star" ></i>
                      <i className="fa-solid fa-star" ></i>
                      <i className="fa-solid fa-star" ></i>
                    </div>
                    <p className="discription">I would like to thank you for your service, our journey through India has been an amazing experience
                      Hope to come back soon, have a nice day </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-data client-box3">
                    <div className="profile">
                      <img src="https://th.bing.com/th/id/OIP.pEp9vaU0P55vlusXv54vsAHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.3" alt="" />
                    </div>

                    <h3>Arman Khan</h3>

                    <p className="job">Actor</p>
                    <div className="stars">
                      <i className="fa-solid fa-star" ></i>
                      <i className="fa-solid fa-star" ></i>
                      <i className="fa-solid fa-star" ></i>
                      <i className="fa-solid fa-star" ></i>
                      <i className="fa-solid fa-star" ></i>
                    </div>
                    <p className="discription">Thank you very much for all your assistance for my safe trip to Delhi. Your driver Mahesh was excellent. Will contact you again for my future trips.</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TravelBox;

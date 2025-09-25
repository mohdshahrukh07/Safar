import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, } from 'swiper/modules';
import Select from 'react-select'
import './Booking.css'
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import useApi from '../../api/useApi';
export default function BookPage() {

    // code for showing selected date
    const { packageInfoApi, BookingApi } = useApi();
    const [selectedDate, setSelectedDate] = useState('');
    const [activeBooking, setAtiveBooking] = useState(false);
    const [allowToBook, SetAllowToBook] = useState(false);
    const [state, setState] = useState({});
    const [adult, setadult] = useState(0);
    const [youth, setyouth] = useState(0);
    const [child, setchild] = useState(0);
    const [loading, setLoading] = useState(false);
    const today = new Date().toISOString().split('T')[0];
    const { id } = useParams();
    const [formData, setFormData] = useState({
        address: '',
        startDate: '',
        adults: 0,
        teenagers: 0,
        children: 0,
        travelPackegeId:id
    })
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        handleForm(event)
        event.target.className = event.target.value !== '' ? 'has-value' : '';
    }


    useEffect(() => {
        const fetchBookingData = async () => {
            setLoading(true);
            const response = await packageInfoApi({ travel_id: id });

            if (response) {
                setState(response.data.travelPackage);
                setAtiveBooking(response.data.activeBooking);
                SetAllowToBook(response.data.allowToBook);
                setLoading(false)
            }
        }
        fetchBookingData();
    }, [id])

    const handleForm = (fieldOrEvent, value) => {
        setFormData((prev) => {
            if (fieldOrEvent?.target) {
                const { name, value } = fieldOrEvent.target;
                return { ...prev, [name]: value };
            }

            return { ...prev, [fieldOrEvent]: value ? value.value : 0 };
        });
    }

    const submit = async (e) => {
        try {
            e.preventDefault()
            const response = await BookingApi(formData);
            if(response.status){
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    // function for selecting adult members
    const numberOptions = Array.from({ length: 10 }, (_, index) => ({
        value: index + 1,
        label: `${index + 1}`,
    }));
    // function for selecting youth and childrens
    const kidsnumber = Array.from({ length: 11 }, (_, index) => ({
        value: index,
        label: `${index}`,
    }));
    const handleAdult = (selected) => {
        setadult(selected);
        handleForm("adults", selected)
    };
    const handleYouth = (selected) => {
        setyouth(selected);
        handleForm("teenagers", selected)
    };
    const handleChild = (selected) => {
        setchild(selected);
        handleForm("children", selected)
    };
    const [calculatedValue, setCalculatedValue] = useState(null);
    useEffect(() => {
        let total = 0;
        if (adult) total += state.price * adult.value;
        if (youth) total += state.price * youth.value * 0.4;
        if (child) total += state.price * child.value * 0.2;

        setCalculatedValue(total.toFixed(0));
    }, [adult, youth, child, state.price]);

    return (
        <div>
            {state && (
                <div className='bookpage-container'>
                    <div className="booking-container">
                        <div className="image-slidebox">
                            <Swiper spaceBetween={30}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2
                                    },
                                    0: {
                                        slidesPerView: 1
                                    }
                                }} modules={[Navigation]}
                                navigation
                                style={{ '--swiper-navigation-size': '40px', '--swiper-navigation-color': '#ff5722' }}>
                                <SwiperSlide><img src={state.img1} alt="hotels img " /></SwiperSlide>
                                <SwiperSlide><img src={state.img2} alt="hotels img" /></SwiperSlide>
                                <SwiperSlide><img src={state.img3} alt="hotels img" /></SwiperSlide>
                                <SwiperSlide><img src={state.img4} alt="hotels img" /></SwiperSlide>
                                <SwiperSlide><img src={state.img5} alt="hotels img" /></SwiperSlide>
                            </Swiper>

                        </div>
                        <div className="booking-icons">
                            <div className="menu-box">
                                <div className="db-logo">
                                    <i className="fa-solid fa-qrcode"></i>
                                </div>
                                <div className="detail-box">
                                    <h3 className="heading-title">Tour Code</h3>
                                    <span className="title">{state.tourCode}</span>
                                </div>
                            </div>
                            <div className="menu-box">
                                <div className="db-logo">
                                    <i className="fa-solid fa-hourglass-start"></i>
                                </div>
                                <div className="detail-box">
                                    <h3 className="heading-title">Duration</h3>
                                    <span className="title">5 hour</span>
                                </div>
                            </div>
                            <div className="menu-box">
                                <div className="db-logo">
                                    <i className="fa-solid fa-umbrella-beach"></i>
                                </div>
                                <div className="detail-box">
                                    <h3 className="heading-title">Address</h3>
                                    <span className="title">{state.location}</span>
                                </div>
                            </div>
                            <div className="menu-box">
                                <div className="db-logo">
                                    <i className="fa-solid fa-calendar-days"></i>
                                </div>
                                <div className="detail-box">
                                    <h3 className="heading-title">Days</h3>
                                    <span className="title">3 Days</span>
                                </div>
                            </div>
                        </div>
                        <div className="booking-name">
                            <div className="para-title">
                                <h2 className="title-of-tour">
                                    {state.title}
                                </h2>
                                <div className="price-tour-box">
                                    <span className='price-tour'>&#x20B9; {state.price}</span>
                                    <span> / Per Person</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="booking-box">
                        <div className="discription-box">
                            <div className="booking-discription">
                                <div className="paragraph">
                                    <h3>Overview</h3><hr />
                                    <div>{state.discription1}<br />{state.discription2}</div><br />

                                    <div>Day 1: Heritage Highlights<br />{state.day1}<br /><br />
                                        Day 2: Cultural Immersion <br />{state.day2}<br /> <br />
                                        Day 3: Adventure & Relaxation <br />{state.day3} </div>
                                </div>
                            </div>
                            <div className="booking-discription">
                                <div className="paragraph">
                                    <h3>Amenities</h3><hr />
                                    <div className='amenities-container'>
                                        <div className="amenities-box">
                                            <i className="fa-solid fa-circle-check"></i>
                                            <div className="amenties-title">Balcony</div>
                                        </div>
                                        <div className="amenities-box">
                                            <i className="fa-solid fa-circle-check"></i>
                                            <div className="amenties-title">Bedding</div>
                                        </div>
                                        <div className="amenities-box">
                                            <i className="fa-solid fa-circle-check"></i>
                                            <div className="amenties-title">Heating</div>
                                        </div>
                                        <div className="amenities-box">
                                            <i className="fa-solid fa-circle-check"></i>
                                            <div className="amenties-title">Microwave</div>
                                        </div>
                                        <div className="amenities-box">
                                            <i className="fa-solid fa-circle-check"></i>
                                            <div className="amenties-title">Outdoor Seating</div>
                                        </div>
                                        <div className="amenities-box">
                                            <i className="fa-solid fa-circle-check"></i>
                                            <div className="amenties-title">Smoking Allow</div>
                                        </div>
                                        <div className="amenities-box">
                                            <i className="fa-solid fa-circle-check"></i>
                                            <div className="amenties-title">Terrace</div>
                                        </div>
                                        <div className="amenities-box">
                                            <i className="fa-solid fa-circle-check"></i>
                                            <div className="amenties-title">Valet Parking</div>
                                        </div>
                                        <div className="amenities-box">
                                            <i className="fa-solid fa-circle-check"></i>
                                            <div className="amenties-title">Wheelchair Accesible</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="discription-box2">
                            <div className="booking booking-discription">
                                <div className='booking-form-title'>
                                    <h2>Book this tour</h2>
                                </div>
                                <div className="booking-form">
                                    <form id="form-items" onSubmit={submit}>
                                        <div className="input-groups">
                                            <label htmlFor="address">Address</label>
                                            <input type="text" name='address' className='address' onChange={handleForm} value={formData.address} placeholder='Your Address' required />
                                        </div>
                                        <div className="input-groups">
                                            <label htmlFor="date-from">Date from</label>
                                            <input
                                                type="date"
                                                name="startDate"
                                                placeholder=""
                                                value={formData.startDate}
                                                onChange={handleDateChange}
                                                className={selectedDate !== '' ? 'has-value' : ''}
                                                min={today}
                                                required
                                            />
                                        </div>
                                        <div className="input-select">
                                            <div className="input-tickets">Tickets:</div>
                                            <div className="select-tickets">
                                                <label htmlFor="ticket">Adult:- 18+ years</label>
                                                <Select className='members' value={adult} onChange={handleAdult} options={numberOptions} isClearable required />
                                            </div>
                                            <div className="select-tickets">
                                                <label htmlFor="ticket">teenagers:- 13+ years</label>
                                                <Select className='members' value={youth} onChange={handleYouth} options={kidsnumber} isClearable />

                                            </div>
                                            <div className="select-tickets">
                                                <label htmlFor="ticket">Children: </label>
                                                <Select className='members' value={child} onChange={handleChild} options={kidsnumber} isClearable />
                                            </div>
                                        </div>
                                        <div className="total-cost input-groups">
                                            <h3>
                                                Total:
                                            </h3>
                                            <h3>&#x20B9; {calculatedValue}</h3>
                                        </div>
                                        <button type="submit">Book Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

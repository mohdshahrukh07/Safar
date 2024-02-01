import React from 'react'
import { useState, useEffect } from 'react'
import './Tourpage.css'
import Select from 'react-select'
import Linkstrip from '../Linkstrip/Linkstrip'
import { Link } from 'react-router-dom'
function TourPage() {
  // with the help of this component, we can find and tour package by searching or filtering.
  
  // location and sortBy variable for making select and its option 
  const location = [
    { value: 'All_Destination', label: 'All Destination' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Rajasthan', label: 'Rajasthan' }
  ]
  const sortBy = [
    { value: 'A_Z', label: 'A-Z' },
    { value: 'Z_A', label: 'Z-A' },
    { value: 'PriceHigh', label: 'Price--Low to High' },
    { value: 'PriceLow', label: 'Price--High to Low' }
  ]
  // fetcing data from SafarData.json(json file)
  const itemsPerPage = 6;
  const [state, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  // slice all json data to show only 6 packeges in a single page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = state.slice(startIndex, endIndex);

  // functons for go to next And previuos page
  // function For neXt page  
  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  // function for previuos page
  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // funtons for selectors to change their fetched data by selecting options
  
  // function for selectors to change thair feched data by select location 
  const [selectedLocation, setSelectedLocation] = useState(location[0]);

  const filteredData = selectedLocation.value === 'All_Destination'
  ? currentData
  : currentData.filter((element) => element.destination === selectedLocation.value);
  // funtion for slelctors to sort data by selecting options
  const [selectedSortOption, setSelectedSortOption] = useState(sortBy[0]);
  const sortedData = [...filteredData].sort((a, b) => {
    switch (selectedSortOption.value) {
      case 'A_Z':
        return a.title.localeCompare(b.title);
      case 'Z_A':
        return b.title.localeCompare(a.title);
      case 'PriceHigh':
        return parseFloat(a.price) - parseFloat(b.price);
      case 'PriceLow':
        return parseFloat(b.price) - parseFloat(a.price);
      default:
        return 0;
    }
  });
  return (
    <div className='TourPage-container'>
      <Linkstrip Pagename="Search" ComponentName="Tour" />
      <div className="tour-container">
        <div className="element-container">
          <div className="selector-container">
            <div className="selector-items slt-state">
              <h3 className="slt-label">Select Location</h3>
              <Select className='select-option' options={location} value={selectedLocation} 
              onChange={(selected) => setSelectedLocation(selected)}/>
            </div>
            <div className="selector-items arange-items">
              <h3 className="slt-label">Sort By</h3>
              <Select className='select-option' options={sortBy}  value={selectedSortOption}
          onChange={(selected) => setSelectedSortOption(selected)}/>
            </div>
          </div>
          <div className="searched-packeges">
            <div className="packages">
              {sortedData.map((element => {
                return <div className="card-container" key={element.title} >
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
          <div className="next-prev-btn d-flex justify-content-center">
            <button type="button" className="btn btn-danger m-3" onClick={handlePrevClick}  disabled={currentPage === 1}>	&larr; Prev</button>
            <button type="button" className="btn btn-danger m-3" onClick={handleNextClick} disabled={currentPage === Math.ceil(state.length / itemsPerPage)}>Next &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourPage

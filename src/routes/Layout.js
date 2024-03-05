import React from "react";
import { connect } from "react-redux";
import HeaderPage from "./HeaderPage";
import BottomPage from "./BottomPage";
import ListProduct from "./ListProduct";
import "./Layout.scss";
import bedAlt from '../assets/images/bed-alt.svg'

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import image1 from '../assets/images/pexels-adrien-olichon-3884479.jpg'
import image2 from '../assets/images/pexels-kimberly-mcneilus-2480608.jpg'
import image3 from '../assets/images/pexels-konstantinos-eleftheriadis-2034335.jpg'
import image4 from '../assets/images/pexels-luizamaria-scurtu-1977342.jpg'
import image5 from '../assets/images/pexels-michael-block-3225531.jpg'
import image6 from '../assets/images/pexels-mikhail-nilov-6530544.jpg'
import image7 from '../assets/images/pexels-rachel-claire-6127261.jpg'
import image8 from '../assets/images/pexels-vincent-gerbouin-1167021.jpg'
import image9 from '../assets/images/pexels-vincent-gerbouin-1179156.jpg'



class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Ha Noi",
      adults: 1,
      children: 0,
      rooms: 1,
      pets: false,
      checkIn: "",
      checkOut: "",
      stateAddress: [],
      inputPeople: false,
    };
  }

  handleInputChange = (e) => {
    const { className, value, type, checked } = e.target;
    this.setState({
      [className]: type === "checkbox" ? checked : value,
    });
  };



  handleSearch = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state);
  };

  handleHideShowInput = () => {
    this.setState({
      inputPeople: !this.state.inputPeople,
    })
  }

  render() {
    const { location, adults, children, rooms, pets, checkIn, checkOut, inputPeople } = this.state;
    const listImage = [image1, image2, image3, image4, image5, image6, image7, image8, image9]
    const product = {
      nameProduct: 'The Porter House Hotel Sydney',
      point: 4.5,
      peopleCheckPoint: 45,
      image: { image1, image2, image3, image4 }, // Assuming image1, image2, image3, image4 are defined elsewhere
      infor: `The Porter House Hotel - MGallery is nestled amongst the eclectic mix of heritage and modern buildings in the heart of Sydney's CBD. Take a journey of discovery for all the sense, where rich history meets modern elegance. You will find The Porter House Hotel, just footsteps away from Sydney's iconic attractions such as the Australian Museum, Hyde Park, Darling Harbour, Capitol Theatre and Circular Quay.`,
      address: '203 Castlereagh Street, 2000 Sydney, Australia',
      timeCheckIn: '2:00 PM',
      timeCheckOut: '11:00 AM',
      typeRoom: '1 Room - 1 adult',
      ServicesAndEquipments: [
        'Swimming pool',
        'Shuttle',
        'Restaurant',
        'Wheelchair accessible',
        'Fitness center',
        'Wi-Fi',
        'Air conditioning',
        'Breakfast',
        'Bar',
        'Meeting rooms',
        'Non Smoking',
        'Room service',
      ],
    };
    return (
      <>
        <div className="content-header-page">
          <HeaderPage />
          <div className="text-header-1"> We compare hotel prices from 100s of sites  </div>
          <div className="text-header-2">We’ll do the searching. You do the saving. </div>
          <form onSubmit={this.handleSearch} className="form-search">
            <div className="child-search child-width-left " >
              <label htmlFor="location"><i className="fa-solid fa-magnifying-glass"></i></label>
              <div className="tab-text-child">
                <div className="text-child">
                  Going to
                </div>
                <input
                  type="text"
                  id="location"
                  className="location"
                  value={location}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="child-search child-width-center" >
              <label htmlFor="location"><i className="fa-regular fa-calendar-check"></i></label>
              <div className="tab-text-child">
                <div className="text-child">
                  Check in
                </div>
                <input
                  type="date"
                  id="checkIn"
                  className="checkIn"
                  value={checkIn}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="child-search child-width-center" >
              <label htmlFor="location"><i className="fa-solid fa-calendar-check"></i></label>
              <div className="tab-text-child">
                <div className="text-child">
                  Check out
                </div>
                <input
                  type="date"
                  id="checkOut"
                  className="checkOut"
                  value={checkOut}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="child-search child-width-right" onClick={() => this.handleHideShowInput()}>
              <div className="form-input-people" >
                <img src={bedAlt} alt="bet-alt" className="icon-bed-alt" />
                <div className="tab-text-child">
                  <div className="text-child">
                    Guests and rooms
                  </div>
                  <label >{`${parseInt(adults, 10) + parseInt(children, 10)} Guests, ${rooms} Room`}</label>
                </div>
              </div>
              {inputPeople &&
                <div className="hide-show">
                  <div className="form-input-people" >
                    <div className="text-title" htmlFor="adults">Adults:</div>
                    <div className="number-input-layout">
                      <div className="add-input"><i className="fa-solid fa-plus"></i></div>
                      <input
                        type="number"
                        id="adults"
                        className="adults"
                        min="1"
                        value={adults}
                        onChange={this.handleInputChange}
                      />
                      <div className="subtract-input"><i className="fa-solid fa-minus"></i></div>
                    </div>
                  </div>
                  <div className="form-input-people">
                    <div className="text-title" htmlFor="children">Children:</div>
                    <div className="number-input-layout">
                      <div className="add-input"><i className="fa-solid fa-plus"></i></div>
                      <input
                        type="number"
                        id="children"
                        className="children"
                        min="0"
                        value={children}
                        onChange={this.handleInputChange}
                      />
                      <div className="subtract-input"><i className="fa-solid fa-minus"></i></div>
                    </div>
                  </div>

                  <div className="form-input-people">
                    <div className="text-title" htmlFor="rooms">Rooms:</div>
                    <div className="number-input-layout">
                      <div className="add-input"><i className="fa-solid fa-plus"></i></div>
                      <input
                        type="number"
                        id="rooms"
                        className="rooms"
                        min="1"
                        value={rooms}
                        onChange={this.handleInputChange}
                      />
                      <div className="subtract-input"><i className="fa-solid fa-minus"></i></div>
                    </div>
                  </div>

                  <div className="form-input-people">
                    <div className="text-title" htmlFor="pets">Pet:</div>
                    <input
                      type="checkbox"
                      id="pets"
                      className="pets"
                      checked={pets}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              }
            </div>
            <button type="submit">Search</button>
          </form>
          <div className="text-header-3">Discover your new favorite stay</div>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
            className="swiper-content"
            spaceBetween={0}
            slidesPerView={5}
          >
            {listImage.map((imagetTitle, index) => (
              <SwiperSlide key={index + 1}><img src={imagetTitle} alt={`imagetTitle ${index + 1}`} /></SwiperSlide>
            ))}
          </Swiper>

          <div className="text-header-3">Browse hotels in Sydney</div>
          <ListProduct />
        </div >


        <BottomPage />
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

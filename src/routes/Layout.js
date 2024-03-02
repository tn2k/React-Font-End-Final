import React from "react";
import { connect } from "react-redux";
import HeaderPage from "./HeaderPage";
import "./Layout.scss";
import bedAlt from '../assets/images/bed-alt.svg'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';

import image1 from '../assets/images/pexels-adrien-olichon-3884479.jpg'
import image2 from '../assets/images/pexels-kimberly-mcneilus-2480608.jpg'
import image3 from '../assets/images/pexels-konstantinos-eleftheriadis-2034335.jpg'


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
    const swiperParams = {
      spaceBetween: 100,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };

    console.log('check input ', inputPeople)
    return (
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
        <div>Discover your new favorite stay</div>


        <div class="swiper">

          <div class="swiper-wrapper">
            <div class="swiper-button-prev"></div>
            <div class="swiper-slide" src={image1}></div>
            <div class="swiper-slide" src={image1}></div>
            <div class="swiper-slide" src={image1}></div>
            <div class="swiper-slide" src={image2}></div>
            <div class="swiper-slide" src={image2}></div>
            <div class="swiper-slide" src={image3}></div>
            <div class="swiper-slide" src={image3}></div>
            <div class="swiper-button-next"></div>
          </div>






        </div>



      </div >
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

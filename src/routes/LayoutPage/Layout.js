import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderPage from "./HeaderPage";
import BottomPage from "./BottomPage";
import ListProduct from "../ListProduct/ListProduct";
import 'swiper/css';
import "./Layout.scss";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getAllProducts } from "../../services/apiProduct"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { withTranslation } from 'react-i18next';
import i18n from "../../i18n"

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueCity: '',
      valuePrice: '',
      inputFullProperty: false,
      inputRoom: false,
      inputIntroduction: true,
      listProduct: [],
      language: 'en'
    };
  }

  handleInputOnChange = (event) => {
    this.setState({
      valueCity: event.target.value
    });
  };

  //format input prince
  handleInputChange = (e) => {
    const rawValue = e.target.value.replace(/\./g, '');
    this.setState({ valuePrice: rawValue });
  }

  handleBlur = () => {
    this.setState({ valuePrice: this.formatNumber(this.state.valuePrice) });
  };

  formatNumber = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  /////////
  handleClick = (key) => {
    this.setState(prevState => ({
      [key]: !prevState[key]
    }));
  };

  handleClickFullProperty = () => {
    this.handleClick('inputFullProperty');
  };

  handleClickRoom = () => {
    this.handleClick('inputRoom');
  };

  handleSubmit = () => {
    const { valueCity, valuePrice, inputFullProperty, inputRoom } = this.state;
    alert(`City: ${valueCity}\nPrice: ${valuePrice}\nFull Property: ${inputFullProperty}\nRoom: ${inputRoom}`);
  };

  // onClick Introduction 
  handleIntroductSearch = (inputIntroduction) => {
    this.setState({ inputIntroduction: true });
  }

  handleIntroductCreate = (inputIntroduction) => {
    this.setState({ inputIntroduction: false })
  }
  /////////

  componentDidMount = () => {
    this.fetchListProduct()
  }

  // OnClick Change Language
  handleLanguageChange = (newLanguage) => {
    this.setState({ language: newLanguage });
    i18n.changeLanguage(newLanguage);
  };
  //////////////////////

  // get list data all Product
  fetchListProduct = async () => {
    let data = await getAllProducts()
    console.log(data)
    if (data.statusCode === 200) {
      this.setState({ listProduct: data.metadata })
    }
  }
  /////////////////////

  render() {
    const image2 = 'https://res.cloudinary.com/driamsklu/image/upload/v1730945102/image/v7pcvjivkcrwyrud1ztc.jpg'
    const image3 = 'https://res.cloudinary.com/driamsklu/image/upload/v1730945102/image/vzt2xx3qzlfx2lu2kzib.jpg'
    const image4 = 'https://res.cloudinary.com/driamsklu/image/upload/v1730945102/image/f4ircywzwzzgor6csrnp.jpg'
    const image5 = 'https://res.cloudinary.com/driamsklu/image/upload/v1730945103/image/vdj4zdvynkxs1ixqqvt5.jpg'
    const image6 = 'https://res.cloudinary.com/driamsklu/image/upload/v1730945103/image/drm0z5ojahruwbsejjve.jpg'
    const image7 = 'https://res.cloudinary.com/driamsklu/image/upload/v1730945103/image/vsprutxyw5ldnmriygn1.jpg'
    const image8 = 'https://res.cloudinary.com/driamsklu/image/upload/v1730945103/image/deas4l3loxufn047qla5.jpg'

    const listImage = [image2, image3, image4, image5, image6, image7, image8]
    const { inputFullProperty, inputRoom, inputIntroduction } = this.state;
    const { t } = this.props;
    return (
      <>
        <div className="content-header-page">
          <HeaderPage
            language={this.state.language}
            onLanguageChange={this.handleLanguageChange}
          />
          <div className="form-input-content-page">
            <div className="child-form-input">
              <div className="text-form-input1"> {t('Find the best')}<br></br>{t('home')}<br></br>{t('anywhere')}</div>
              <div className="text-form-input2">{t('Apartments and rooms bookable directly online')}</div>
              <div className="image-form-input">
                <img className="image-form-input1" src='https://res.cloudinary.com/driamsklu/image/upload/v1730945102/image/i4qst6sed3urtrmrqnas.jpg' alt="image1"></img>
                <img className="image-form-input2" src={image2} alt="image2"></img>
              </div>
            </div>
            <div className="child-form-input">
              <div className="information-field">
                <div className="name-input">{t('City')}</div>
                <input className="input-city"
                  type="text"
                  value={this.state.valueCity}
                  onChange={this.handleInputOnChange}
                  placeholder={t('Type a city...')}
                ></input>
                <div className="name-input">{t('Prince')}</div>
                <input className="input-Check-in"
                  type="text"
                  value={this.state.valuePrice}
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur}
                  placeholder={t('Set a price ...')}
                ></input>
                <div className="name-input">{t('Accommodation typology')}</div>
                <div className="form-input-type">
                  < div className={`input-type ${inputFullProperty ? 'selected' : ''}`}
                    onClick={() => this.handleClick('inputFullProperty')}>
                    <i className="fa-solid fa-house"></i>
                    <div>{t('Full property')}</div>
                  </div>
                  <div className={`input-type ${inputRoom ? 'selected' : ''}`}
                    onClick={() => this.handleClick('inputRoom')}>
                    <i className="fa-solid fa-door-closed"></i>
                    <div>{t('Room')}</div>
                  </div>
                </div>
                <div className="search-form-input" onClick={this.handleSubmit}>{t('Search Now')}</div>
              </div>
            </div>
          </div>

          <div className="contener-introduction">
            <div className="text-header-3">Introduction to Renting a Home</div>
            <div className=" child-introduction">
              <div className={`select-type-introduction ${inputIntroduction === true ? 'selected' : ''}`} onClick={this.handleIntroductSearch}>Rent a Residence</div>
              <div className={`select-type-introduction ${inputIntroduction === false ? 'selected' : ''}`} onClick={this.handleIntroductCreate}>Create a Rental Property</div>
            </div>
            {inputIntroduction ? (
              < div className="content-instruct">
                <div className="icon-introduction">
                  <img src="https://res.cloudinary.com/driamsklu/image/upload/v1730945101/image/bbea2vxrmkqmptnhafml.webp" alt="imageICon1"></img>
                  <div className="title-description-introduction">Search for a Rental</div>
                  <div className="child-description-introduction">Enter your preferred location and apply filters like price and amenities to narrow down your options. This helps you quickly find properties that meet your specific needs.</div>
                  <div className="link-description-introduction">link address</div>
                </div>
                <div className="icon-introduction">
                  <img src="https://res.cloudinary.com/driamsklu/image/upload/v1730945101/image/nnidgjrykkddixlcwl22.webp" alt="imageICon2"></img>
                  <div className="title-description-introduction">Browse and Contact</div>
                  <div className="child-description-introduction">Click on listings that interest you and contact the landlord for more details or to schedule a viewing. Make sure to ask any questions you have about the property during this stage.</div>
                  <div className="link-description-introduction">link address</div>
                </div>
                <div className="icon-introduction">
                  <img src="https://res.cloudinary.com/driamsklu/image/upload/v1730945102/image/xcmqibm11pa656phbnsd.webp" alt="imageICon3"></img>
                  <div className="title-description-introduction">Pay and Move In</div>
                  <div className="child-description-introduction">Complete the payment process, get the keys, and move into your new home. Ensure all the necessary paperwork is signed and double-check move-in dates.</div>
                  <div className="link-description-introduction">link address</div>
                </div>
              </div>
            )
              : (
                <div className="content-instruct">
                  <div className="icon-introduction">
                    <img src="https://res.cloudinary.com/driamsklu/image/upload/v1730945102/image/ox6iobsaoaiaorfgexxs.jpg" alt="imageICon4"></img>
                    <div className="title-description-introduction">Create an Account or Log In</div>
                    <div className="child-description-introduction">Open the app and sign up if you don't have an account, or log in with your existing account.</div>
                    <div className="link-description-introduction">link address</div>
                  </div>
                  <div className="icon-introduction">
                    <img src="https://res.cloudinary.com/driamsklu/image/upload/v1730945102/image/brcwwzfheu13ho1bemea.jpg" alt="imageICon5"></img>
                    <div className="title-description-introduction">Create a New Listing</div>
                    <div className="child-description-introduction">Find the "Post Listing" or "Add New" button and fill in the details about your house, including location, rental price, description, and photos. Ensure the information is clear and attractive to draw potential renters.</div>
                    <div className="link-description-introduction">link address</div>
                  </div>
                  <div className="icon-introduction">
                    <img src="https://res.cloudinary.com/driamsklu/image/upload/v1730945100/image/ebsw6eusueavskhbeyfo.jpg" alt="imageICon6"></img>
                    <div className="title-description-introduction">Post and Manage Your Listing</div>
                    <div className="child-description-introduction">After entering all the details, click "Post" to make your listing public. Monitor and respond to inquiries from renters through the app to quickly find a suitable tenant.</div>
                    <div className="link-description-introduction">link address</div>
                  </div>
                </div>
              )}
          </div>
          <div className="contener-favorite-stay">
            <div className="text-header-3">Discover your new favorite stay</div>
            <div className="">
              <div className="text-header-4">Discover the best accommodations</div>
            </div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              navigation
              pagination={{ clickable: true }}
              className="swiper-content"
              spaceBetween={0}
              slidesPerView={4}
            >
              {listImage.map((imagetTitle, index) => (
                <SwiperSlide key={index + 1}>
                  <div className="content-favorite-stay">
                    <img className="image-favorite-stay" src={imagetTitle} alt={`imagetTitle ${index + 1}`} />
                    <div className="description-favorite-stay">
                      <div className="text1-description-favorite-stay">
                        <div className="city-description">Sydney</div>
                        <div className="region-description">&nbsp;.NSW</div>
                      </div>
                      <div className="text2-description-favorite-stay">Monolocale - Chioggia 7</div>
                      <div className="text3-description-favorite-stay">Via Privata Chioggia, Milano, Italy</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="contener-list-product">
            <div className="text-header-3">Browse hotels in Sydney</div>
            <div className="text-header-4">The best solutions in the coolest cities, you just need to book</div>
            <ListProduct
              data={this.state.listProduct}
            />
          </div>
          <div className="read-news-page">
            <div className=" text-header-3">Latest real estate news</div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              navigation
              pagination={{ clickable: true }}
              className="swiper-content"
              spaceBetween={0}
              slidesPerView={4}
            >
              {listImage.map((imagetTitle, index) => (
                <SwiperSlide key={index + 1}>
                  <div className="content-read-news-page">
                    <img className="image-read-news-page" src={imagetTitle} alt={`imagetTitle ${index + 1}`} />
                    <div className="description-read-news-page">
                      <div className="text2-description-read-news-page">Create at :</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <BottomPage />
        </div >

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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Layout));



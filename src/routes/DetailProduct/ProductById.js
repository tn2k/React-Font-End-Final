import "./ProductById.scss"
import { useState, useEffect, useRef } from 'react';
import HeaderPage from "../LayoutPage/HeaderPage"
import ListProduct from "../ListProduct/ListProduct";
import { getAllProducts2 } from "../../services/apiProduct"
import BottomPage from "../LayoutPage/BottomPage"

function ProductById(url) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [MoreViewHowToBook1, setMoreViewHowToBook1] = useState(false);
    const [MoreViewHowToBook2, setMoreViewHowToBook2] = useState(false);
    const [MoreViewHowToBook3, setMoreViewHowToBook3] = useState(false);
    const [MoreViewHowToBook4, setMoreViewHowToBook4] = useState(false);

    const [listProduct, setListProduct] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [nextMonthDate, setNextMonthDate] = useState(new Date());

    const targetRef1 = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);
    const targetRef4 = useRef(null);
    const targetRef5 = useRef(null);

    const handleOnClick = (setValue, value) => {
        setValue(!value);
    };

    const handleClickMove = (targetRef) => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        fetchListProduct();

        const now = new Date();
        const nextMonth = new Date(now);
        nextMonth.setMonth(now.getMonth() + 1);

        setCurrentDate(now);
        setNextMonthDate(nextMonth);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    };

    const fetchListProduct = async () => {
        try {
            let data = await getAllProducts2();
            if (data.statusCode === 200) {
                setListProduct(data.metadata);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    return (
        <div className="content-deltail-product">
            <HeaderPage />
            <div className="content-information-detail-product">
                <div className="title-name-product">Room - Bicocca</div>
                <div className="title-adress-product">
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                    <div className="text-adress-product">Via Lanfranco della Pila, Milan, Italy</div>
                </div>
                <div className="information-basic-product">
                    <div className="title-information basic-product">Available from now</div>
                    <div className="child-information basic-product">
                        <i className="fa-regular fa-door-open"></i>
                        <div>Private room</div>
                    </div>
                    <div className="child-information basic-product">
                        <i className="fa-regular fa-house"></i>
                        <div>70 m&sup2;</div>
                    </div>
                    <div className="child-information basic-product">
                        <i className="fa-light fa-bed"></i>
                        <div>2 Bedrooms</div>
                    </div>
                    <div className="child-information basic-product">
                        <i className="fa-light fa-bath"></i>
                        <div> 1 Bathroom</div>
                    </div>
                </div>
                <div className="content-center-product">
                    <div className="all-information-product-detail">
                        <div className="information-image-product">
                            <img className="thumbnail-product" src="https://res.cloudinary.com/driamsklu/image/upload/v1730945102/image/vzt2xx3qzlfx2lu2kzib.jpg" alt="image1"></img>
                            <div className="image-product">
                                <div className="child-image-product"><img src="https://res.cloudinary.com/driamsklu/image/upload/v1730945102/image/vzt2xx3qzlfx2lu2kzib.jpg" alt="image1"></img></div>
                                <div className="child-image-product"><img src="https://res.cloudinary.com/driamsklu/image/upload/v1730945102/image/vzt2xx3qzlfx2lu2kzib.jpg" alt="image1"></img></div>
                            </div>
                        </div>
                        <div className="breadcrumb-navigation">
                            <i className="fa-regular fa-house"></i>
                            <i className="fas fa-chevron-right"></i>
                            <div className="child-breadcrumb-navigation">City Product</div>
                            <i className="fas fa-chevron-right"></i>
                            <div className="child-breadcrumb-navigation">Name Product</div>
                        </div>
                        <div className="tab-list-information-product">
                            <div className="child-tab-list" onClick={() => handleClickMove(targetRef1)}>DESCRIPTION</div>
                            <div className="child-tab-list" onClick={() => handleClickMove(targetRef2)}>DETAILS</div>
                            <div className="child-tab-list" onClick={() => handleClickMove(targetRef3)}>CONDITIONS</div>
                            <div className="child-tab-list" onClick={() => handleClickMove(targetRef4)}>PRICE</div>
                            <div className="child-tab-list" onClick={() => handleClickMove(targetRef5)}>HOW TO BOOK </div>
                        </div>
                        <div className="information-description-product">
                            <div className="title-information-product" ref={targetRef1}>Description</div>
                            <div className={`content-description  ${isExpanded ? 'expanded' : ''}`}>
                                [ITA]<br />
                                Camera singola, in appartamento sito in Via Della Pila, nel quartiere Bicocca, a 2min a piedi da Esselunga, a 5 minuti a piedi da M5 Bicocca, a 15 minuti a piedi da Università Bicocca.<br />
                                Nelle vicinanze ci sono anche il centro commerciale Bicocca Village e Centro Sarca, l'ospedale Niguarda, la piscina Scarioni, palestre e strutture sportive, mercati rionali, giardini pubblici con parco giochi e parco nord, stazione di polizia.
                                La stanza è riservata a studentesse o lavoratrici referenziate. No fumatori, no animali domestici.<br />
                                La stanza ha superficie di 16 mq, con affaccio a Nord e balconcino dedicato di superficie 3,8 mq: prezzo di affitto pari a 650 €/mese, arredata con scrivania, armadio guardaroba, divano letto o letto matrimoniale (a gradimento dell’affittuario), condizionatore.<br />
                                Sito al 3° piano con ascensore e con riscaldamento centralizzato, l’appartamento si completa con una camera da letto (occupata da donna), una cucina abitabile (con balcone), un bagno e ampio ripostiglio. L’appartamento è provvisto di lavatrice, lavastoviglie, frigo, cucina a gas, forno e fibra internet, porta blindata con serratura europea, video citofono, sottotetto per deposito, vano biciclette in area condominiale.<br />
                                Spese condominiali escluse e stimate a €70,00 mensili per camera (incluso spese di portierato mediamente 4h al mattino e riscaldamento al consumo); restano escluse utenze domestiche a parte (tari, gas, luce e internet).
                                <br />
                                <br />
                                [ENG]<br />
                                Single room, in apartment located on Via Della Pila, in the Bicocca neighborhood, 2min walk from Esselunga, 5min walk from M5 Bicocca, 15min walk from Bicocca University.<br />
                                Also nearby are Bicocca Village shopping center and Centro Sarca, Niguarda Hospital, Scarioni swimming pool, gyms and sports facilities, neighborhood markets, public gardens with playground and north park, police station.
                                The room is reserved for referenced female students or workers. No smokers, no pets.<br />
                                The room has an area of 16 sq.m., facing North and dedicated small balcony of 3.8 sq.m. area: rental price equal to 650 €/month, furnished with desk, wardrobe closet, sofa bed or double bed (to tenant's liking), air conditioner.<br />
                                Located on the 3rd floor with an elevator and central heating, the apartment is completed with a bedroom (occupied by a woman), an eat-in kitchen (with balcony), a bathroom and large storage room. The apartment is equipped with a washing machine, dishwasher, refrigerator, gas stove, oven and fiber internet, armored door with European lock, video intercom, attic for storage, bicycle compartment in the condominium area.<br />
                                Condominium expenses excluded and estimated at €70.00 per month per room (including concierge fees averaging 4h in the morning and heating on consumption); separate household utilities (tari, gas, electricity and internet) remain
                            </div>
                            <div className="wiew-all-description" ><button onClick={() => handleOnClick(setIsExpanded, isExpanded)}> {isExpanded ? 'View all' : 'View Less'}</button></div>
                            <div className="list-separator"></div>
                        </div>
                        <div className="information-details-product">
                            <div className="title-information-product" ref={targetRef2}>Details</div>
                            <div className="child-information-details-product">
                                <div><i className="fa-light fa-bed"></i></div>
                                <div className="text-information-details-product">Room features</div>
                            </div>
                            <div className="content-detail-product">
                                <div className="basic-information-room">
                                    <div className="child-basic-information-room">
                                        <div className="attribute-product">Room Type</div>
                                        <div className="value-product">Room</div>
                                    </div>
                                    <div className="child-basic-information-room">
                                        <div className="attribute-product">Free from</div>
                                        <div className="value-product">1 Sept 2024</div>
                                    </div>
                                    <div className="child-basic-information-room">
                                        <div className="attribute-product">Room Size</div>
                                        <div className="value-product">16 m&sup2;</div>
                                    </div>

                                </div>
                                <div className="basic-room-amenities">
                                    <div className="title-basic-room-amenities">Room Amenities</div>
                                    <div className="content-basic-room-amenities">
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-wifi"></i></div>
                                            <div className="name-amenities">WiFi</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-regular fa-washing-machine"></i></div>
                                            <div className="name-amenities">Washing machine</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-shower"></i></div>
                                            <div className="name-amenities">Shower</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-tree"></i></div>
                                            <div className="name-amenities">Terrace</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-door-closed"></i></div>
                                            <div className="name-amenities">Armored door</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-couch"></i></div>
                                            <div className="name-amenities">Living room</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-chair"></i></div>
                                            <div className="name-amenities">Furnished</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-elevator"></i></div>
                                            <div className="name-amenities">Lift</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-utensils"></i></div>
                                            <div className="name-amenities">Dish washer</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-bell"></i></div>
                                            <div className="name-amenities">Alarm</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-bread-slice"></i></div>
                                            <div className="name-amenities">Oven</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-snowflake"></i></div>
                                            <div className="name-amenities">Freezer</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-fire"></i></div>
                                            <div className="name-amenities">Cooktop</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-ice-cream"></i></div>
                                            <div className="name-amenities">Fridge</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-wind"></i></div>
                                            <div className="name-amenities">Air conditioner</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-tv"></i></div>
                                            <div className="name-amenities">TV</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-thermometer-half"></i></div>
                                            <div className="name-amenities">Centralized heating</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-utensils"></i></div>
                                            <div className="name-amenities">Equipped kitchen</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-bath"></i></div>
                                            <div className="name-amenities">Baththub</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-user-check"></i></div>
                                            <div className="name-amenities">Guest allowed</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-tv"></i></div>
                                            <div className="name-amenities">Smart TV</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-tree"></i></div>
                                            <div className="name-amenities">Balcony</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <div><i className="fa-solid fa-swimmer"></i></div>
                                            <div className="name-amenities">Swimming pool</div>
                                        </div>
                                        <div className="child-basic-room-amenities">
                                            <i className="fa-thin fa-wind"></i>
                                            <div className="name-amenities">Hair dryer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-separator"></div>
                        </div>
                        <div className="rental-conditions-room">
                            <div className="title-information-product" ref={targetRef3}>Rental conditions</div>
                            <div className="basic-information-room">
                                <div className="child-basic-information-room">
                                    <div className="attribute-product" >Minimum months of rent</div>
                                    <div className="value-product">3 months</div>
                                </div>
                                <div className="child-basic-information-room">
                                    <div className="attribute-product">Accepted age</div>
                                    <div className="value-product">between 18 - 50 years</div>
                                </div>
                                <div className="child-basic-information-room">
                                    <div className="attribute-product">Accepts couples</div>
                                    <div className="value-product">No</div>
                                </div>
                            </div>

                            <div className="title-terms-conditions">Landlord Terms and Conditions</div>
                            <div className={`content-description  ${isExpanded2 ? 'expanded' : ''}`}>
                                COSA SUCCEDE DOPO LA PRENOTAZIONE? <br />
                                Cosa dovrai fare una volta confermata la prenotazione? <br />
                                1) versamento deposito + spese accessorie a Roomless entro 7gg <br />
                                Per procedere alla firma del contratto è necessario essere in possesso di: <br />
                                1) codice fiscale italiano <br />
                                2) permesso di soggiorno (per extra ue) <br />
                                Cosa succede se non sono rispettati i termini sopra? <br />
                                La prenotazione viene cancellata automaticamente e perderai la commissione versata a Roomless e la mensilità in base alle policy di cancellazione pre check in.
                                <br /> <br />
                                PRENOTAZIONE - PRE CHECK IN <br />
                                1) cancellazione effettuata 60 o più giorni prima della data del Check-in: <br />
                                Per il Conduttore: rimborso del 100% della prima mensilità . <br />
                                2) cancellazione effettuata tra il 59° e il 30° giorno prima della data del Check-in: <br />
                                Per il Conduttore: rimborso del 50% della prima mensilità. <br />
                                3) cancellazione effettuata tra il 29° giorno o meno prima della data del Check-in: <br />
                                Per il Conduttore: Non vi è alcun rimborso. <br />
                                <br /> <br />
                                POST CHECK IN <br />
                                Se vorrai uscire prima del check-out previsto nella prenotazione, dovrai dare disdetta secondo i termini previsti sull’annuncio.
                                <br /> <br />
                                WHAT HAPPENS AFTER THE BOOKING? <br />
                                What will you need to do once your reservation is confirmed? <br />
                                1) proceed with the payment of the deposit plus additional charges to Roomless within 7 days from the booking confirmation
                                What happens if the above terms are not met? <br />
                                The reservation gets automatically canceled and you will lose the Roomless service fee. <br />
                                <br />
                                BOOKING - PRE CHECK IN <br />
                                1) cancellation made 60 or more days before the Check-in date: <br />
                                For the Tenant: 100% reimbursement of the First Payment. <br />
                                2) cancellation made between the 59th and 30th day before the Check-in date: <br />
                                For the Tenant: 50% reimbursement of the First Payment. <br />
                                3) cancellation made between the 29th day or less before the Check-in date: <br />
                                For the Tenant: There is no refund. <br />
                                POST CHECK-IN <br />
                                If you need to check out before the agreed date, you have to give notice according to the terms indicated in the listing
                            </div>
                            <div className="wiew-all-description" ><button onClick={() => handleOnClick(setIsExpanded2, isExpanded2)}> {isExpanded2 ? 'View all' : 'View Less'}</button></div>
                            <div className="list-separator"></div>
                        </div>
                        <div className="information-price-details">
                            <div className="title-information-product" ref={targetRef4}>Price details</div>
                            <div className="content-price-details">
                                <div className="child-basic-price-room" >
                                    <div className="price-product">Monthly price</div>
                                    <div className="value-price-product">650/month</div>
                                </div>
                                <div className="child-basic-price-room">
                                    <div className="price-product">Deposit</div>
                                    <div className="value-price-product">1,950</div>
                                </div>
                                <div className="child-basic-price-room">
                                    <div className="price-product">Check-in Policy</div>
                                    <div className="value-price-product">Daily &nbsp;<i className="fa-solid fa-circle-question"></i></div>
                                </div>
                                <div className="child-basic-price-room">
                                    <div className="price-product">Check-out Policy</div>
                                    <div className="value-price-product">Daily &nbsp;<i className="fa-solid fa-circle-question"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="information-how-to-book">
                            <div className="title-information-product" ref={targetRef5}>How to book this accommodation</div>
                            <div className="child-information-how-to-book" onClick={() => handleOnClick(setMoreViewHowToBook1, MoreViewHowToBook1)}>
                                <div className="text-information-how-to-book">
                                    <div className="text-how-to-book">How can I book?
                                        <div className="icon-information-how-to-book">{MoreViewHowToBook1 ? <i className="fa-regular fa-angle-up"></i> : <i className="fa-regular fa-angle-down"></i>}</div>
                                    </div>
                                    {MoreViewHowToBook1 && (
                                        <div className="content-how-to-book">
                                            1) Click on the 'Check Availability' button<br />
                                            2) Select the dates of your stay to check availability and prices;<br />
                                            3) Continue and enter your details, they will be needed by the landlord to get to know you.<br />
                                            4) Enter your card details: we will block the amount until the landlord accepts your request.<br />
                                            5) If accepted, you will receive an email with the booking confirmation and the information to contact the landlord;<br />
                                            6) GUARANTEE: We will send your payment to the landlord only 48 hours after check-in, so you have time to report any problems.<br />
                                        </div>
                                    )}
                                </div>

                            </div>
                            <div className="child-information-how-to-book" onClick={() => handleOnClick(setMoreViewHowToBook2, MoreViewHowToBook2)}>
                                <div className="text-information-how-to-book">
                                    <div className="text-how-to-book">  Can I visit the property?
                                        <div className="icon-information-how-to-book">{MoreViewHowToBook2 ? <i className="fa-regular fa-angle-up"></i> : <i className="fa-regular fa-angle-down"></i>}</div>
                                    </div>
                                    {MoreViewHowToBook2 && (
                                        <div className="content-how-to-book">
                                            You don't need to visit the property: in-person visits are a thing of the past.<br />
                                            - Our team verifies the property before publishing it to ensure 100% consistency between the listing and reality.<br />
                                            - All listings come with photos and detailed descriptions. If you still have doubts, you can ask for more information from our team.<br />
                                            - We do not allow visits so that everyone has an equal chance to book, whether you already live in the area or are still abroad.<br />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="child-information-how-to-book" onClick={() => handleOnClick(setMoreViewHowToBook3, MoreViewHowToBook3)}>
                                <div className="text-information-how-to-book" >
                                    <div className="text-how-to-book">
                                        What happens after the booking?
                                        <div className="icon-information-how-to-book">{MoreViewHowToBook3 ? <i className="fa-regular fa-angle-up"></i> : <i className="fa-regular fa-angle-down"></i>}</div>
                                    </div>
                                    {MoreViewHowToBook3 && (
                                        <div className="content-how-to-book">
                                            Once the booking is complete, you will be able to view the landlord's contact details and arrange every detail directly with them. For more information, our team is still at your disposal.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="child-information-how-to-book" onClick={() => handleOnClick(setMoreViewHowToBook4, MoreViewHowToBook4)}>
                                <div className="text-information-how-to-book">
                                    <div className="text-how-to-book">
                                        What happens if there are problems?
                                        <div className="icon-information-how-to-book">{MoreViewHowToBook4 ? <i className="fa-regular fa-angle-up"></i> : <i className="fa-regular fa-angle-down"></i>}</div>
                                    </div>
                                    {MoreViewHowToBook4 && (
                                        <div className="content-how-to-book">
                                            In case of problems, you can contact your reference Spacest.com agent who will assist you in resolving any issues.<br />
                                            For added security, the money you have paid will be sent to the landlord within 48 hours of check-in.<br />
                                            The policies and terms and conditions of Spacest and the homeowner apply, which you can view above on this page.<br />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="information-price-product">
                        <div className="detail-all-costs">View all costs</div>
                        <div className="information-check-in-check-out">
                            <div className="child-information-check-in-check-out">
                                <div className="text-check-in-check-out">Check-in</div>
                                <div >{formatDate(currentDate)}&nbsp; <i className="fa-light fa-calendar-days"></i></div>
                            </div>
                            <i className="fa-sharp-duotone fa-solid fa-arrow-right"></i>
                            <div className="child-information-check-in-check-out">
                                <div className="text-check-in-check-out">Check-out</div>
                                <div >{formatDate(nextMonthDate)}&nbsp; <i className="fa-light fa-calendar-days"></i></div>
                            </div>
                        </div>
                        <div className="title-all-costs">Available from now</div>
                        <div className="price-product">650€/month</div>
                        <div className="title-note-costs">Utilities excluded</div>
                        <div className="button-rent-now">Rent now</div>
                        <div className="button-request-information">
                            <i className="fa-regular fa-envelope"></i>
                            <div className="text-request-information">Request information</div>
                        </div>
                    </div>
                </div>
                <div className="information-product-more">
                    <div className=" title-information-product ">You might also be interested in</div>
                    <div className="list-product-box-more">
                        <ListProduct
                            data={listProduct}
                        />
                    </div>
                </div>
            </div>
            <BottomPage />
        </div >
    );

}

export default ProductById;

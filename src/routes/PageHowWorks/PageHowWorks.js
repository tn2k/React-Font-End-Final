import "./PageHowWorks.scss"
import { useState } from 'react';
import HeaderPage from "../LayoutPage/HeaderPage"
import BottomPage from "../LayoutPage/BottomPage"
import HowToBookList from './HowToBookList';

const PageHowWorks = () => {
    const { FAQsPayment, faqItems } = HowToBookList();
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeIndex2, setActiveIndex2] = useState(null);
    const [activeTypeUser, setActiveTypeUser] = useState(true);

    const toggleOpen = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        setActiveIndex2(activeIndex2 === index ? null : index);
    };

    const handleChangeType = (isTenant) => {
        setActiveTypeUser(isTenant);
    };

    return (
        <div className="content-how-to-work-product">
            <HeaderPage />
            <div className="content-how-work-product" >
                <div className="title-content-how-work-product">How it works</div>
                <div className="choose-content-how-work-product">
                    <div className={`child-choose-content-tenant  ${activeTypeUser === true ? 'onchange' : ''}`} onClick={() => handleChangeType(true)}>Tenant</div>
                    <div className={`child-choose-content-tenant  ${activeTypeUser === false ? 'onchange' : ''}`} onClick={() => handleChangeType(false)}>Landlord</div>
                </div>
                <div className="content-information-how-to-work">
                    <div className="child-content-information-how-to-work">
                        <div className="title-question-how-to-work"><i className="fa-duotone fa-solid fa-headset"></i>&nbsp;&nbsp;&nbsp;Need help? Contact our support</div>
                        <div className="child-question-how-to-work">- FAQ</div>
                        <div className="child-question-how-to-work">- How to receive assistance</div>
                        <div className="child-question-how-to-work">- Problems with payments</div>
                        <div className="child-question-how-to-work">- Discover how Spacest.com works</div>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/driamsklu/image/upload/v1730945102/image/vzt2xx3qzlfx2lu2kzib.jpg" alt="image1"></img>
                    </div>
                </div>
                {activeTypeUser ? (
                    <div className="content-information-instructions-steps">
                        <div className="column-content-information-instructions-steps">
                            <div className="child-content-information-instructions-steps" >
                                <div className="number-content-how-to-works">1.</div>
                                <div className="child-content-instructions-steps">
                                    <div className="title-content-how-to-works">Warranty&nbsp;&nbsp;<i className="fa-light fa-shield-check"></i></div>
                                    <div className="information-content-how-to-works">
                                        The properties on the Spacest.com platform are all verified by our team.<br /><br />
                                        This means that we guarantee the reality, the authenticity of the photos and the accuracy of the information in the listings so that you can book online in complete safety.<br />
                                    </div>
                                </div>
                            </div>
                            <div className="child-content-information-instructions-steps">
                                <div className="number-content-how-to-works">3.</div>
                                <div className="child-content-instructions-steps">
                                    <div className="title-content-how-to-works">Book&nbsp;&nbsp;<i className="fa-light fa-house-circle-check"></i></div>
                                    <div className="information-content-how-to-works">
                                        Send a rental request to the homeowner by entering the date of entry, the duration of the booking and a personal introduction.<br /><br />
                                        You will not be charged at this stage. You only have to wait for the landlord's reply. The property is NOT yet reserved for you..<br />
                                    </div>
                                </div>
                            </div>
                            <div className="child-content-information-instructions-steps">
                                <div className="number-content-how-to-works">5.</div>
                                <div className="child-content-instructions-steps">
                                    <div className="title-content-how-to-works">Post confirmation<i className="fa-light fa-clipboard-list-check"></i></div>
                                    <div className="information-content-how-to-works">
                                        Once your reservation is confirmed, you will receive the landlords contact information so that you can arrange all the next steps.<br /><br />
                                        In each listing, all cancellation terms are clearly outlined so that you can make a simple and secure change to your reservation.<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column-content-information-instructions-steps">
                            <div className="child-content-information-instructions-steps">
                                <div className="number-content-how-to-works">2.</div>
                                <div className="child-content-instructions-steps">
                                    <div className="title-content-how-to-works">Search&nbsp;&nbsp;<i className="fa-light fa-magnifying-glass"></i></div>
                                    <div className="information-content-how-to-works">
                                        Find the perfect house, flat or room to rent from our listings.<br /><br />
                                        The pictures and detailed descriptions will help you find the most interesting properties directly online. If you need more information, click on request information and contact our team.<br />
                                    </div>
                                </div>
                            </div>
                            <div className="child-content-information-instructions-steps">
                                <div className="number-content-how-to-works">4.</div>
                                <div className="child-content-instructions-steps">
                                    <div className="title-content-how-to-works">Confirm&nbsp;&nbsp;<i className="fa-sharp fa-regular fa-circle-check"></i></div>
                                    <div className="information-content-how-to-works">
                                        The landlord has accepted your request and your booking has been confirmed. You will be charged for the first month's rent and Spacest.com fees.<br /><br />
                                        We will transfer the first month's rent to the landlord only 48h after your check in, in these first hours you have the opportunity to report any problems in the property to the landlord or to us.<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="content-information-instructions-steps">
                        <div className="column-content-information-instructions-steps">
                            <div className="child-content-information-instructions-steps" >
                                <div className="number-content-how-to-works">1.</div>
                                <div className="child-content-instructions-steps">
                                    <div className="title-content-how-to-works">Post&nbsp;&nbsp;<i class="fa-regular fa-house"></i></div>
                                    <div className="information-content-how-to-works">
                                        Rent an entire house, apartment or a room.<br /><br />

                                        Are you a professional?<br />
                                        Fill in the form in the section: https://spacest.com/rent-professionals<br />

                                        Are you a private landlord?<br /><br />
                                        Creating a listing on Spacest.com is completely free. Enter detailed descriptions and eye-catching photos. We will reach out to you to verify the property and maximize your ad.<br />
                                    </div>
                                </div>
                            </div>
                            <div className="child-content-information-instructions-steps">
                                <div className="number-content-how-to-works">3.</div>
                                <div className="child-content-instructions-steps">
                                    <div className="title-content-how-to-works">Deal closed&nbsp;&nbsp;<i class="fa-light fa-house-circle-check"></i></div>
                                    <div className="information-content-how-to-works">
                                        You will receive reservation requests directly online. Visits to the property will not be necessary.<br />
                                        The Spacest.com team will verify each potential tenant and assess their personal and financial information.<br /><br />

                                        If you accept a reservation request, the rental will be confirmed. You will receive the tenant's contact information to arrange the next steps independently.<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column-content-information-instructions-steps">
                            <div className="child-content-information-instructions-steps">
                                <div className="number-content-how-to-works">2.</div>
                                <div className="child-content-instructions-steps">
                                    <div className="title-content-how-to-works">Receive rental requests&nbsp;&nbsp;<i class="fa-regular fa-share"></i></div>
                                    <div className="information-content-how-to-works">
                                        During the booking, the tenant paid the first month’s rent. Spacest.com will transfer the amount to you 48 hours after the check-in, to your preferred crediting method.<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}



                <div className="content-separate-how-to-book">
                    FAQ
                </div>
                <div className="title-information-how-to-book">In the FAQ you will find answers to frequently asked questions regarding our core services and additional details useful to you.</div>
                <div className="information-how-to-book">
                    {faqItems.map((item, index) => (
                        <div key={index} className="child-information-how-to-book" onClick={() => toggleOpen(index)}>
                            <div className="text-information-how-to-book">
                                <div className="text-how-to-book">
                                    {item.title}
                                    <div className="icon-information-how-to-book">
                                        {activeIndex === index ? <i className="fa-regular fa-angle-up"></i> : <i className="fa-regular fa-angle-down"></i>}
                                    </div>
                                </div>
                                {activeIndex === index && (
                                    <div className="content-how-to-book">
                                        {item.content.split('\n').map((line, idx) => (
                                            <span key={idx}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="content-separate-how-to-book">
                    FAQs Payment
                </div>
                <div className="title-information-how-to-book">In the FAQ you will find answers to frequently asked questions regarding payments and additional useful information for managing your transactions.</div>
                <div className="information-how-to-book">
                    {FAQsPayment.map((item, index) => (
                        <div key={index} className="child-information-how-to-book" onClick={() => toggleOpen(index)}>
                            <div className="text-information-how-to-book">
                                <div className="text-how-to-book">
                                    {item.title}
                                    <div className="icon-information-how-to-book">
                                        {activeIndex2 === index ? <i className="fa-regular fa-angle-up"></i> : <i className="fa-regular fa-angle-down"></i>}
                                    </div>
                                </div>
                                {activeIndex2 === index && (
                                    <div className="content-how-to-book">
                                        {item.content.split('\n').map((line, idx) => (
                                            <span key={idx}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BottomPage />
        </div >
    );

}

export default PageHowWorks;

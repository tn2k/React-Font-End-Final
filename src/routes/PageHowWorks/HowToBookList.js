const HowToBookList = () => {
    const faqItems = [
        {
            title: "How can I look for accommodation?",
            content: "You will be able to find thousands of properties throughout Europe directly on our platform. Use the filters to be more precise in your search and identify the properties that are more in line with your needs. We remind you that all the properties featured are verified by our team and the pictures are in line with reality. Therefore, you will not incur the risk of scams."
        },
        {
            title: "Can I contact the landlord directly?",
            content: `Spacest.com media during the booking process. We communicate with the owners on your behalf until your request is accepted.

We are unable to share the owners' personal details due to our privacy policy and data protection regulations, however, once the booking has been accepted, this information will be shared with you.

You will then be able to contact each other to arrange your transfer and other details such as paying the deposit, signing the contract, etc...

Please note that the conditions of the property cannot be negotiated and that the landlord provides us with all the information about the property and the rules when uploading the ad.

If you have any questions about the status of your booking request you can contact our customer service or you can check the status in the relevant section of your account.

Please note that the landlord has 12 working hours to respond to your request and we will keep you updated on the status of your reservation request.`
        },
        {
            title: `Does Spacest.com organise visits?`,
            content: `The aim of Spacest.com is to make the process of renting a property in the medium to long term completely digital and to do this we make our users book VERIFIED properties online without having to waste time on visits and without the risk of someone else renting before them.

Most listings are checked by our team, the photos are recent and reliable and there is complete consistency between the listing and reality. The Spacest.com guarantee allows you to book online with complete confidence.

If the ad shows serious problems and inconsistency with reality, Spacest.com refunds 100% of the payment made, in line with the landlord's cancellation policy (see T&C for more details and procedures).

For some listings it is possible, if the landlord allows it, to book a virtual or on-site visit of the property via the 'Book a visit' button.`
        },
        {
            title: `What is a verified property?`,
            content: `A verified/checked property is a property that: has been visited by our team, has been reserved at least 3 times already through Spacest.com, comes to us from a professional landlord who publishes more than 50 listings on our portal.

Property verification allows us to certify the correct location of the property and the accuracy of the images between the listing and reality.`
        },
        {
            title: `Is it possible to register as a resident?`,
            content: `As a tenant, you may need to register at the property, especially if you are a student or professional expatriate in a foreign country.

If you need to register at the property, please include this when making your visit or booking request, as not all landlords allow this.

This criterion does not appear in the search filters. Please note that registration is only possible if you are staying at the property for a certain period of time. If you need to register at the property, we suggest you seek advice directly from your local Town Hall before making a booking request or visit...`
        },
        {
            title: `Who will I share the property with?`,
            content: `None in the case of renting out an internal flat.

In the case of renting out a room: unfortunately, due to GDPR requirements we are unable to share specific information about the other tenants in the property.

In order to get a better idea of the other tenants in the property, we recommend that you consult our customer care team who will be able to provide you with general information on the tenants present: "e.g. mixed gender students aged between 20 and 27 years".`
        },
        {
            title: `What are the booking costs?`,
            content: `Spacest.com charges a service fee which is proportional to the cost of the fee for the number of months booked. To simulate the booking cost, simply click on "Rent now" inside the ad and enter the check in and check out dates. The system will automatically simulate the prices.

In addition to the booking costs, you can add specific costs for the registration of the contract, cleaning and sanitation. You can check for these additional costs in the ad description.`
        },
        {
            title: `Do I have to pay a deposit?`,
            content: `When booking, the amounts to be paid are: one month's rent (which will be paid into the properties' landlord 48h after check in) + Spacest.com commission. Once this amount is paid, the property will be reserved.`
        },
        {
            title: `What is the monthly cost of utilities?`,
            content: `This information can be found in the Prices and availability section of each listing. For some listings utilities are included in the rental price for others they are excluded.

For some properties utilities are included but up to a maximum monthly cap, this information will be present in the listing description or can be requested from our customer service team (e.g. utilities included up to a maximum of €150/month).`
        },
        {
            title: `How do I book and pay?`,
            content: `To rent one of our properties, you must do the following.
1. Submit your rental request by clicking on "Rent Now" for the desired property by entering the preferred period of stay, payment method, and the required information and documents.
2. A subtotal equal to the first month's rent plus the Spacest.com reservation fee will be pre-authorized on your payment method until your request is confirmed.
3. If your request is accepted, your reservation will be automatically confirmed and the pre-authorized amount will be charged to your payment method. If the landlord rejects your request, the pre-authorized amount will be immediately returned to your payment method.
4. When the reservation is confirmed, you will automatically receive an email confirming the reservation and the landlord will contact you directly to arrange the next steps.`
        },
        {
            title: `Changes to my dates`,
            content: `If during your tenancy you need to change your plans and move out early or extend your tenancy, we will be here to help you, simply contact our customer care team.
Please note that Spacest.com is not part of the tenancy agreement with your landlord, so you will need to inform both Spacest.com and your landlord of your decision. Some rental agreements have early departure clauses, so we recommend that you check these in advance of your application.
If you wish to stay in the property after your rental agreement has expired, you will need to enter a new booking request online, as this will be considered as a new rental. We recommend that you do this quickly to avoid losing your rental property.`
        },
        {
            title: `Where and how can I check the availability of a property?`,
            content: `We include this information on every property advert, and you only need to look at the 'Prices and availability' section for more details.
In addition, landlords may also set additional minimum and maximum stay rules. Some properties will have a 'gap' rule, which means that the landlord will only accept bookings with a transfer within a certain date range. For this reason, although it is available when selecting dates in the calendar, the system does not offer exit dates in advance.
Owners operate in this way to avoid the property remaining empty for long periods between two bookings. Unfortunately this is a non-negotiable policy. For this reason, you can only book within the time period set by the landlord.`
        },
        {
            title: `What are the house rules?`,
            content: `Each property listing includes a set of house rules that are non-negotiable and set by the landlord.
- Smoking Allowed: Indicates whether or not smoking is permitted on the property. It is highly recommended that you follow this rule, otherwise you risk losing the security deposit.
- Pets Allowed: This will indicate if the landlord will allow pets to enter the property, it is recommended that you add information about your pet in the notes to your booking request so that the landlord is informed in advance.
- Overnight Guests: Most owners do not allow guests to stay in shared properties, so please check if this is allowed or if the landlord will charge a supplement.
- Couples allowed: Room owners do not allow couples inside the room.`
        },
        {
            title: `Extra booking costs`,
            content: `As we work with both property managers and private owners, you may find administration fees in some listings. These are fees that are charged by property managers to cover administrative costs, including, but not limited to, contract registration, inventory checks, reference checks, cleaning and sanitation costs.
If your listing contains an administrative fee, you will find information about this in the Pricing and Availability section of the listing.
These costs are NOT included in the Spacest.com commission and will be payable directly to the landlord after the booking.`
        },
        {
            title: `What happens after booking`,
            content: `Once your reservation is confirmed, you will receive the landlord's contact information to arrange your arrival at the property, signing of the contract, and payment of the deposit or other costs. If you have not received a response by e-mail or phone within two days of booking, please contact us.
We try to make our real estate listings as transparent as possible with high-quality photos, videos and floor plans. Our experts know how important it is to make sure you have as much information as possible, so you can rent with confidence. As an additional step, we provide you with a 48-hour guarantee from the time of move-in to signal to us if there is anything wrong with the property. If you feel that the property is significantly different from how it was presented in the listing, then we can help you. Here's what to do:
1) Contact the homeowner. Indicate what the problem is. In most cases, landlords will work quickly to resolve any problem.
2) If the landlord does not respond, or if you cannot come to an agreement with them, contact us within 48 hours of your move and tell us what the problem is. This is important, since we normally transfer the rent payment to the landlord 48 hours after your move-in date, if we do not hear from you. Please provide us with visual evidence, such as a photo or video, that shows us what is wrong with the property.`
        },
        {
            title: `Reservation extension`,
            content: `If during your tenancy you need to change your plans and extend your tenancy, we will be here to help. Please note that Spacest.com is not part of the tenancy agreement with your landlord, so you will need to inform both us and the landlord of your decision. If you wish to stay in the property after your tenancy has expired, you will need to enter a new booking request online, as this will be considered a new tenancy. We recommend that you do this quickly to avoid losing your rental property. For loyalty discounts on our rates, please get in touch with our team.`
        },
        {
            title: `Can I see the lease first?`,
            content: `Spacest.com is an online platform that allows you to rent properties directly from the landlord. Consequently, the rental contract is between yourself and the landlord. Spacest.com is not part of this rental contract. Sometimes you will need your contract in advance for visa purposes, or to set up bills or direct debits. Once the landlord accepts your booking request, you will receive the landlord's contact details. We recommend that you ask the landlord to send you a copy of the contract directly.
Each landlord will have their own contract and clauses, so we do not have a template of specific information to provide you with in advance. You will have specific clauses in your rental contract regarding notice, penalties, rules, regulations and security deposit. Please note that the contract is between you and the landlord, not between you and Spacest.com.`
        },
        {
            title: `Cancellation policies`,
            content: `The cancellation policy section will specify the owners' policies.
If the landlord has not filled out the appropriate section, reference will be made to the cancellation policies in the terms and conditions. Below are the details:
If the landlord cancels the booking after accepting the booking request and before the check-in date, Spacest.com will fully refund the amount paid by the tenant, including the amount paid as a Spacest.com fee.
In case of tenant cancellation, the following cases should be distinguished:
1) Cancellation made 60 or more days before the check-in date: For the tenant: 100% refund of the first installment minus the Spacest.com fee.
2) Cancellation made between 59th and 30th day before check-in date: For the renter: refund of 50% of the first payment minus the Spacest.com fee.
3) Cancellation made between the 29th day or less before the check-in date: For the renter: there is no refund. In the event that Spacest.com's refund policies are inconsistent with the landlord's, the latter will be applied.`
        },
    ];

    const FAQsPayment = [
        {
            title: `Payment rejected by the card issuing company`,
            content: `If payment with your card has been declined, you are advised to contact your card issuer for further details and to resolve any problems.

Still having problems with your payment? If you have already tried contacting your bank or changing your payment method, you can proceed with a Bank Transfer`
        },
        {
            title: `Invalid transaction`,
            content: `If your transaction was deemed invalid, check the information you entered, make sure you have sufficient credit, and verify that your card is not stolen, lost, or expired.

Still having problems with your payment? If you have already tried contacting your bank or changing your payment method, you can proceed with a Bank Transfer`
        },
        {
            title: `Payment error due to security limits`,
            content: `If you received an error related to the limit of attempts, invalid CVC, security breach, exceeding the limit of funds used daily, or maximum limit of failures reached, we recommend that you wait a few minutes and try again. Make sure that the information you enter is correct and that your card is enabled for use.

Still having problems with your payment? If you have already tried contacting your bank or changing your payment method, you can proceed with a Bank Transfer`
        },
        {
            title: `Two-factor authentication error (2FA)`,
            content: `If your transaction has been blocked due to two-factor authentication (2FA), be sure to properly follow the instructions provided by your bank or payment service to complete authentication.

Still having problems with your payment? If you have already tried contacting your bank or changing your payment method, you can proceed with a Bank Transfer`
        },
        {
            title: `Card not supported`,
            content: `If your payment was declined because your card is not supported, check with your payment provider to see what cards are accepted. You may have to use an alternative payment method.

Still having problems with your payment? If you have already tried contacting your bank or changing your payment method, you can proceed with a Bank Transfer`
        },
        {
            title: `Billing address does not match`,
            content: `If your payment was declined because the billing address does not match the billing address registered with your bank, be sure to correctly enter the billing address associated with your card.

Still having problems with your payment? If you have already tried contacting your bank or changing your payment method, you can proceed with a Bank Transfer`
        },
        {
            title: `Suspicious transaction blocked for security`,
            content: `If your transaction has been blocked for suspected fraudulent activity, contact your bank to verify and unblock the payment. Be sure to use a secure and reliable connection to make payments.

Still having problems with your payment? If you have already tried contacting your bank or changing your payment method, you can proceed with a Bank Transfer`
        },
        {
            title: `Bank details`,
            content: `Contact our support to get all the information about your payment, one of our agents will contact you in a few minutes providing all the payment information.`
        },
        {
            title: `What should I do if my PayPal payment fails?`,
            content: `If your PayPal payment fails, it could be due to a variety of reasons. Here are some solutions you can try:

1. Verify that there are sufficient funds in your PayPal account.
2. Make sure your PayPal linked card has no restrictions or limits that prevent the transaction.
3. Check that the billing information is correct and up-to-date.
4. Contact your bank to see if the transaction has been blocked for security reasons or for too large an amount.
5. Make sure your PayPal account has no temporary limitations or restrictions.

If the problem persists, try an alternative payment method or contact us directly for assistance.`
        },
    ];

    return { faqItems, FAQsPayment };
};

module.exports = HowToBookList;

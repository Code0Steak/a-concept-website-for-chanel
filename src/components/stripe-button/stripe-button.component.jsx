import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    
    const costForStripe = price * 0.790548 / 20;
    const publishableKey = 'pk_test_1VWTyC4sr1TtRWpXMhMMWa6U00jagFandz';

    const onToken = token => console.log(token);

    return (
        <StripeCheckout 
        
            label = 'Payment Portal'
            name = 'CHANEL'
            billingAddress
            shippingAddress
            image = 'https://www.chanel.com/img/logo_chanel.svg'
            description = {`Your total id Rs. ${price}`}
            amount = {costForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;
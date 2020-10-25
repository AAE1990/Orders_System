import React from 'react';
import OrderData from './OrderData';

const PresentsOrder = (props) => {
    
    let state = props.orderData;

    return (
        <h3>
            <OrderData titleHeader={state.titleHeader} />
        </h3>
    )
}

export default PresentsOrder;
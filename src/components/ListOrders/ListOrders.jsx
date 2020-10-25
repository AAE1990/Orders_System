import React from 'react';
import style from './ListOrders.module.css'

const ListOrders = (props) => {
    return (
        <div className={style.lisrOrdersBlock}>
            <div className={style.popupOrderH}>
                <h3>Список Заявок:</h3>
                <br/>
                <h4>{props.IninitalData}</h4>
                <h4>{props.FirmData}</h4>
                <h4>{props.EmailData}</h4>
                <h4>{props.TelData}</h4>
                <h4>{props.DateOrder}</h4>
            </div>
        </div>
    );
}

export default ListOrders;


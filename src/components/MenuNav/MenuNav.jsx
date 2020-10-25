import React from 'react';
import { NavLink } from 'react-router-dom';
import OrderDataContainer from '../OrderData/OrderDataContainer';
import style from './MenuNav.module.css'

const MenuNav = () => {
    return (
        <div className={style.MenuNav}>

            <div className={style.button1}>
                <button type="button" className="btn btn-secondary btn-lg mr-5">
                    <NavLink to="/makeorder" className={style.nvb1}
                        style={{textDecoration: 'none'}}>Оформить Заявку
                    </NavLink>
                </button>
            </div>

            <div className={style.titleHeader}><OrderDataContainer /></div>

            <div className={style.button2}>
                <button type="button" className="btn btn-secondary btn-lg ml-5">
                    <NavLink to="/listorders" className={style.nvb2} 
                        style={{textDecoration: 'none'}}>Список Заявок
                    </NavLink>
                </button>
            </div>

        </div>
    );
}

export default MenuNav;


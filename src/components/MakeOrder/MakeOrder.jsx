import React, { Fragment } from 'react';
import style from './MakeOrder.module.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class MakeOrder extends React.Component {

    state = {
        editMode: this.props.editMode,
        IninitalData: this.props.IninitalData,
        FirmData: this.props.FirmData,
        EmailData: this.props.EmailData,
        TelData: this.props.TelData,
        DateOrder: this.props.DateOrder
    }

    handleInitialChange = ({ target: { value } }) => {
        this.setState({
            IninitalData: value,
        })
    }

    handleFirmChange = ({ target: { value } }) => {
        this.setState({
            FirmData: value
        })
    }

    handleEmailChange = ({ target: { value } }) => {
        this.setState({
            EmailData: value
        })
    }

    handleTelChange = ({ target: { value } }) => {
        this.setState({
            TelData: value
        })
    }

    handleDateChange = ({ target: { value } }) => {
        this.setState({
            DateOrder: value
        })
    }

    activateEditMode = ({ target: { value } }) => {
        this.setState({
            editMode: value
        });
        this.props.editOrder(this.state.IninitalData);
        this.props.editOrder2(this.state.FirmData);
        this.props.editOrder3(this.state.EmailData);
        this.props.editOrder4(this.state.TelData);
        this.props.editOrder5(this.state.DateOrder);
    }

    handleSnow = (e) => {
        e.preventDefault();
        this.setState({
            IninitalData: '',
            FirmData: '',
            EmailData: '',
            TelData: '',
            DateOrder: ''
        })
    }

    render() {
        const { IninitalData, FirmData, EmailData, TelData, DateOrder } = this.state;

        return (
            <div className={style.formCaseMO}>
                <h3>Оформить Заявку</h3>

                <div className={style.divFormDesign}>
                    <Fragment>
                        <form onChange={this.activateEditMode} className={style.formDesign}>
                            <label>
                                Ф.И.О.
                            <br />
                                <input type="text" name="initial" value={IninitalData}
                                    onChange={this.handleInitialChange} className={style.inputData}
                                />
                                <br />

                            Фирма:
                            <br />
                                <input type="text" name='firm' value={FirmData}
                                    onChange={this.handleFirmChange} className={style.inputData} />
                                <br />

                            Email:
                            <br />
                                <input type="email" name="login" value={EmailData}
                                    onChange={this.handleEmailChange} className={style.inputData} />
                                <br />

                            Телефон:
                            <br />
                                <input type="tel" pattern="2-[0-9]{3}-[0-9]{3}" value={TelData}
                                    onChange={this.handleTelChange} className={style.inputData} />
                            </label>
                            <br />

                            <label htmlFor="dateelements" className={style.labelDate}>Дата оформления:</label>
                            <br />
                            <input type="datetime-local" id="dateelements" className={style.inputDatE}
                                value={DateOrder} onChange={this.handleDateChange} />
                            <br />

                            <button onClick={this.handleSnow} className={style.buttonForm} >Отправить</button>
                            <br />
                        </form>
                    </Fragment>

                    <Popup trigger={<button className={style.buttonPopup}> Справка после отправки:</button>}>
                        <div className={style.popupOrder}>
                            <div className={style.popupOrderH}>
                                <h3>Введенные данные хронятся в Списке Заявок
                                <br />и после просмотра в справке:</h3>
                                <h4>{this.state.IninitalData}</h4>
                                <h4>{this.state.FirmData}</h4>
                                <h4>{this.state.EmailData}</h4>
                                <h4>{this.state.TelData}</h4>
                                <h4>{this.state.DateOrder}</h4>
                            </div>
                        </div>
                    </Popup>
                </div>

            </div>
        )
    }
}

export default MakeOrder;

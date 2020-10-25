import { connect } from "react-redux";
import { DateOrderCreator, EmailDataCreator, FirmDataCreator, InitialDataCreator, TelDataCreator } from "../../redux/orderResult-reduser";
import MakeOrder from "./MakeOrder";

const mapStateToProps = (state) => {
    return {
        orderResultData: state.orderResultData,
        IninitalData: state.orderResultData.IninitalData,
        FirmData: state.orderResultData.FirmData,
        EmailData: state.orderResultData.EmailData,
        TelData: state.orderResultData.TelData,
        DateOrder: state.orderResultData.DateOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editOrder: (IninitalData) => {
            dispatch(InitialDataCreator(IninitalData));
        },
        editOrder2: (FirmData) => {
            dispatch(FirmDataCreator(FirmData));
        },
        editOrder3: (EmailData) => {
            dispatch(EmailDataCreator(EmailData));
        },
        editOrder4: (TelData) => {
            dispatch(TelDataCreator(TelData));
        },
        editOrder5: (DateOrder) => {
            dispatch(DateOrderCreator(DateOrder));
        }
    }
}

const MakeOrderContainer = connect(mapStateToProps, mapDispatchToProps)(MakeOrder);

export default MakeOrderContainer;
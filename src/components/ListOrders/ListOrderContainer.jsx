import { connect } from "react-redux";
import ListOrders from "./ListOrders"

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

const ListOrderContainer = connect(mapStateToProps)(ListOrders);

export default ListOrderContainer;
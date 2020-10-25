import {connect} from "react-redux"
import PresentsOrder from "./PresentsOrder";

let mapStateToProps = (state) => {
    return {
        orderData: state.orderData
    }
}

const OrderDataContainer = connect(mapStateToProps) (PresentsOrder);

export default OrderDataContainer;
const TITLE_HEADER = "TITLE_HEADER";

let initialState = {
    titleHeader: "Система введения заявок "  
};


const orderDataReducers = (state = initialState, action) => {
    switch (action.type) {
        case TITLE_HEADER: {
            return {
                ...state,
                titleHeader: {...state.titleHeader}
            }
        }
        default:
            return state;
    }
}

export const showTitleHeader = (titleHeader) => ({ type: TITLE_HEADER, titleHeader});

export default orderDataReducers;
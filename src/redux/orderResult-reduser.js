const INITIAL_DATA = 'INITIAL_DATA';
const FIRM_DATA = 'FIRM_DATA';
const EMAIL_DATA = 'EMAIL_DATA';
const TEL_DATA = 'TEL_DATA';
const DATE_ORDER = 'DATE_ORDER';

let initialState = {
    IninitalData: '',
    FirmData: '',
    EmailData: '',
    TelData: '',
    DateOrder: ''
};

const orderResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_DATA: {
            return {
                ...state,
                IninitalData: action.IninitalData,
            }
        }
        case FIRM_DATA: {
            return {
                ...state,
                FirmData: action.FirmData
            }
        }
        case EMAIL_DATA: {
            return {
                ...state,
                EmailData: action.EmailData
            }
        }
        case TEL_DATA: {
            return {
                ...state,
                TelData: action.TelData
            }
        }
        case DATE_ORDER: {
            return {
                ...state,
                DateOrder: action.DateOrder
            }
        }
        default:
            return state;
    }
}

export const InitialDataCreator = (IninitalData) => ({ type: INITIAL_DATA, IninitalData });
export const FirmDataCreator = (FirmData) => ({ type: FIRM_DATA, FirmData })
export const EmailDataCreator = (EmailData) => ({ type: EMAIL_DATA, EmailData })
export const TelDataCreator = (TelData) => ({ type: TEL_DATA, TelData })
export const DateOrderCreator = (DateOrder) => ({ type: DATE_ORDER, DateOrder })

export default orderResultReducer;
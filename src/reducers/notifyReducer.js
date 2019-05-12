import { NOTIFY_USER }from '.../actions/types';

const initialState = {
    message: null,
    messageType: null
}

export default fuction(state = initialState, action) {
    switch(action.type) {
        case NOTIFY_USER:
            return {
                ...state,
                message: action.message,
                messageType: action.messageTyp
            };
            default:
                return state;
    }
}
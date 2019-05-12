import { DISABLE_BALANCE_ON_ADD, 
        DISABLE_BALANCE_ON_EDIT, 
        ALLOW_REGISTRATION }from '../actions/types';
import { actionTypes } from 'redux-firestore';


const initialState = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
}

export default function(state = initialState) {
    switch(action.type) {
        case DISABLE_BALANCE_ON_ADD:
        return {
            ...state,
            disableBalanceOnAdd: !disableBalanceOnAdd
        };
    }
    switch(action.type) {
        case DISABLE_BALANCE_ON_EDIT:
        return {
            ...state,
            disableBalanceOnEdit: !disableBalanceOnEdit
        };
    switch(action.type) {
        case ALLOW_REGISTRATION:
        return {
            ...state,
            allowRegistration: !allowRegistration
        };
    }
  return (
    <div>
      
    </div>
  )
}

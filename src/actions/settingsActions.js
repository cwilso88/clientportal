import { DISABLE_BALANCE_ON_ADD, 
        DISABLE_BALANCE_ON_EDIT, 
        ALLOW_REGISTRATION } from './types';


export const setDisableBalanceOnAdd = () => {
    return {
        type: DISABLE_BALANCE_ON_ADD
    }
}
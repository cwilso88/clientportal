import { DISABLE_BALANCE_ON_ADD, 
        DISABLE_BALANCE_ON_EDIT, 
        ALLOW_REGISTRATION } from './types';


export const setDisableBalanceOnAdd = () => {
    // Get settings from localStorage
    const settings = JSON.parse(localStorage.getItem('settings'));

    // Toggle
    settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

    // Set back to localStorage
    localStorage.setItem('settings', JSON.stringify(settings));
    return {
        type: DISABLE_BALANCE_ON_ADD,
        payload: settings.disableBalanceOnAdd
    }
}
export const setDisableBalanceOnEdit = () => {
    return {
        type: DISABLE_BALANCE_ON_EDIT
    }
}
export const allowRegistration = () => {
    return {
        type: ALLOW_REGISTRATION
    }
}
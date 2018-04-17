import * as t from './actionTypes';
import * as api from './api';

export function updateSettings(settings, successCB, errorCB) {
    return (dispatch) => {
        api.updateSettings(settings, function (success, data, error) {
            if (success) {
                dispatch({type: t.UPDATE_SETTINGS, data: settings});
                successCB();
            } else if (error) {
                errorCB(error)
            }
        });
    };
}
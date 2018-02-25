import * as t from './actionTypes';
import * as api from './api';
import firebase from "../../config/firebase";


export function createSprint(sprint, successCB, errorCB) {
    return (dispatch) => {
        console.log('in da create sprint action')
        api.createSprint(sprint, function (success, data, error) {
            if (success) {
                dispatch({type: t.CREATE_SPRINT, data: sprint});
                successCB();
            }else if (error) errorCB(error)
        });
    };
}
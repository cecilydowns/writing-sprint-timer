import * as t from './actionTypes';
import * as api from './api';

export function createSprint(sprint, successCB, errorCB) {
    return (dispatch) => {
        sprint.words = parseInt(sprint.words)
        api.createSprint(sprint, function (success, data, error) {
            if (success) {
                dispatch({type: t.CREATE_SPRINT, data: sprint});
                successCB();
            } else if (error) {
                errorCB(error)
            }
        });
    };
}
import * as t from './actionTypes';
import * as api from './api';

export function createProject(project, successCB, errorCB) {
    return (dispatch) => {
        api.createProject(project, function (success, data, error) {
            if (success) {
                dispatch({type: t.CREATE_PROJECT, data: project});
                successCB();
            } else if (error) {
                errorCB(error)
            }
        });
    };
}

export function getProjects(successCB, errorCB) {
    return (dispatch) => {
        api.getProjects(function (success, data, error) {
            if (success) {
                dispatch({type: t.GET_PROJECTS, data: data});
                successCB();
            } else if (error) {
                errorCB(error)
            }
        });
    };
}
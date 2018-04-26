import * as t from "./actionTypes";
import * as api from "./api";
import firebase from "../../config/firebase";

import { AsyncStorage } from "react-native";

export function register(user, successCB, errorCB) {
  return dispatch => {
    api.register(user, function(success, data, error) {
      if (success) {
        dispatch({ type: t.LOGGED_IN, data: user });
        AsyncStorage.setItem("user", JSON.stringify(user));
        AsyncStorage.setItem("jwt", data.token);
        successCB();
      } else if (error) errorCB(error);
    });
  };
}

export function login(user, successCB, errorCB) {
  return dispatch => {
    api.login(user, function(success, data, error) {
      if (success) {
        console.log("LOGIN ACTION");
        console.log("Data:");
        console.log(data);
        console.log("User:");
        console.log(user);
        if (data.exists) dispatch({ type: t.LOGGED_IN, data: data.user });
        AsyncStorage.setItem("user", JSON.stringify(data.user));
        AsyncStorage.setItem("jwt", data.token);
        successCB(data);
      } else if (error) errorCB(error);
    });
  };
}

export function resetPassword(data, successCB, errorCB) {
  return dispatch => {
    api.resetPassword(data, function(success, data, error) {
      if (success) successCB();
      else if (error) errorCB(error);
    });
  };
}

export function signOut(successCB, errorCB) {
  return dispatch => {
    dispatch({ type: t.LOGGED_OUT });
    AsyncStorage.multiRemove(["user", "jwt"], err => {
      if (err) {
        errorCB();
      } else {
        successCB();
      }
    });

    // api.signOut(function (success, data, error) {
    //     if (success) {
    //         dispatch({type: t.LOGGED_OUT});
    //         successCB();
    //     }else if (error) errorCB(error)
    // });
  };
}

export function checkLoginStatus(callback) {
  return dispatch => {
    // So what do I actually want to do here?
    //get the user object from the Async storage

    AsyncStorage.getItem("user", (err, user) => {
      if (user === null) {
        dispatch({ type: t.LOGGED_OUT });
        callback(false);
      } else {
        dispatch({ type: t.LOGGED_IN, data: JSON.parse(user) });
        callback(true);
      }
    });

    // callback(isLoggedIn);
  };
}

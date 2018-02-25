import firebase from "../../config/firebase";

const auth = firebase.auth();
const database = firebase.database();

let uid

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        uid = user.uid
    } else {
        uid = null
    }
  });

//Create the user object in realtime database
export function createSprint (sprint, callback) {

    // database.ref('users').child(user.uid).update({ ...data })
    let ref = database.ref('sprints/' + uid).push({
        time: sprint.time,
        words: sprint.words
    })


}



//  https://firebase.google.com/docs/database/web/structure-data?authuser=0
//  https://firebase.google.com/docs/database/web/read-and-write?authuser=0


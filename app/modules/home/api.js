const domain = "http://localhost:7777"
import { AsyncStorage } from 'react-native';

export async function createSprint (sprint, callback) {

    const token = await AsyncStorage.getItem('jwt')

    // console.log("Token:")
    // console.log(token)

    return fetch(`${domain}/sprints`,
    {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`
        },
        body: JSON.stringify(sprint)
    })
    // .then((response) => response.json())
    .then((sprint) => callback(true, sprint, null))
    .catch((error) => callback(false, null, error)) 

}
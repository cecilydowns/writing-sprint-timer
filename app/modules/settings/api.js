const domain = "http://localhost:7777"
import { AsyncStorage } from 'react-native';

export async function updateSettings (settings, callback) {

    const token = await AsyncStorage.getItem('jwt')

    // console.log("Token:")
    // console.log(token)


    return fetch(`${domain}/settings`,
    {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`
        },
        body: JSON.stringify(settings)
    })
    // .then((response) => response.json())
    .then((settings) => callback(true, settings, null))
    .catch((error) => callback(false, null, error)) 

}
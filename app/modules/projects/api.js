const domain = "http://localhost:7777"
import { AsyncStorage } from 'react-native';

export async function createProject (project, callback) {

    const token = await AsyncStorage.getItem('jwt')

    // console.log("Token:")
    // console.log(token)

    console.log(project)

    return fetch(`${domain}/projects`,
    {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`
        },
        body: JSON.stringify(project)
    })
    // .then((response) => response.json())
    .then((project) => callback(true, project, null))
    .catch((error) => callback(false, null, error)) 

}

export async function getProjects (callback) {

    const token = await AsyncStorage.getItem('jwt')

    return fetch(`${domain}/projects`,
    {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`
        }
    })
    // .then((response) => response.json())
    .then((projects) => callback(true, projects, null))
    .catch((error) => callback(false, null, error)) 

}
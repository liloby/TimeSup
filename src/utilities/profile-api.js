import sendRequest from './send-request';
const BASE_URL = '/api/profile';

export function getAll() {
    return sendRequest(BASE_URL)
}

export function createProfile(profileData) {
    // console.log(profileData)
    return sendRequest(`${BASE_URL}/new`, 'POST', profileData)
}

export function getCurrentProfile() {
    return sendRequest(`${BASE_URL}/profile`)
}

export function createLikes(likedPerson) {
    // console.log("likedPerson", likedPerson)
    return sendRequest(`${BASE_URL}/like`, 'POST', likedPerson)
}

export function updateProfile(profileData) {
    // console.log(profileData)
    return sendRequest(`${BASE_URL}/edit`, 'PUT', profileData)
}

export function deleteOne() {
    // console.log("Deleting at API")
    return sendRequest(`${BASE_URL}/delete`, 'DELETE')
}

export function addMatch(matchNameData) {
    return sendRequest(`${BASE_URL}/add`, 'POST', matchNameData)
}

export function addMatch2(matchNameData) {
    return sendRequest(`${BASE_URL}/add2`, 'POST', matchNameData)
}

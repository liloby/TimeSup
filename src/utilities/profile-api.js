import sendRequest from './send-request';
const BASE_URL = '/api/profile';

export function getAll() {
    return sendRequest(BASE_URL)
}

export function createProfile(profileData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', profileData)
}
import sendRequest from './send-request';
const BASE_URL = '/api/match';

export function getAll() {
    return sendRequest(BASE_URL)
}

export function createMatch(matchData) {
    // console.log("YOU REACHED MATCH API", matchData)
    return sendRequest(`${BASE_URL}/new`, 'POST', matchData)
}
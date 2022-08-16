import sendRequest from './send-request';
const BASE_URL = '/api/match';

export function getAll() {
    return sendRequest(BASE_URL)
}

export function createMatch(matchData) {
    // console.log("YOU REACHED MATCH API", matchData)
    return sendRequest(`${BASE_URL}/new`, 'POST', matchData)
}

export function findMatch() {
    return sendRequest(`${BASE_URL}/matches`)
}

export function getMatchProfile() {
    return sendRequest(`${BASE_URL}/matches/profiles`)
}

export function getMatch(matchData) {
    return sendRequest(`${BASE_URL}/:id`, 'POST', matchData)
}

export function newMessage(messageData) {
    return sendRequest(`${BASE_URL}/message/new`, 'POST', messageData)
}

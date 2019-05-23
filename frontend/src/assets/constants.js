export const COLOR = {}
/*
export const NETWORK = {
  blockchain: 'eos',
  protocol: 'https',
  host: 'bostest.api.blockgo.vip',
  port: 443,
  chainId: '33cc2426f1b258ef8c798c34c0360b31732ea27a2d7e35a65797850a86d1ba85'
}

export const NODE_ENDPOINT = 'https://bostest.api.blockgo.vip'

const BACKEND_URL = `https://boswps.eosplay.me`
export const API_URL = {
  API_GET_PRODUCERS: BACKEND_URL + '/getBPs',
  API_GET_ALL_PROPOSALS: BACKEND_URL + '/getAllProposals',
  API_GET_PROPOSAL: BACKEND_URL + '/getProposal',
  API_APPLY_REVIEW: BACKEND_URL + '/review',
  API_APPLY_FINISH: BACKEND_URL + '/finish',
  API_POLL_TALLY: 'https://s3.amazonaws.com/bostest.referendum/referendum/tallies/latest.json',
  API_GET_ALL_VOTES: 'https://s3.amazonaws.com/bostest.referendum/eosio.forum/vote/latest.json',
  API_GET_ALL_ACCOUNTS: 'https://s3.amazonaws.com/bostest.referendum/referendum/accounts/latest.json',
  API_GET_ALL_PROXIES: 'https://s3.amazonaws.com/bostest.referendum/referendum/proxies/latest.json'
}
*/

export const NETWORK = {
  blockchain: 'eos',
  protocol: 'https',
  host: 'api.bossweden.org',
  port: 443,
  chainId: 'd5a3d18fbb3c084e3b1f3fa98c21014b5f3db536cc15d08f9f6479517c6a3d86'
}

export const NODE_ENDPOINT = 'https://api.bossweden.org'
const BACKEND_URL = `https://api.boswps.io`

export const API_URL = {
  API_GET_PRODUCERS: BACKEND_URL + '/getBPs',
  API_GET_ALL_PROPOSALS: BACKEND_URL + '/getAllProposals',
  API_GET_PROPOSAL: BACKEND_URL + '/getProposal',
  API_APPLY_REVIEW: BACKEND_URL + '/review',
  API_APPLY_FINISH: BACKEND_URL + '/finish',
  API_GET_ALL_ACCOUNTS: 'https://s3.amazonaws.com/api.eosvotes.io/eosvotes/accounts/latest.json',
  API_GET_ALL_VOTES: 'https://s3.amazonaws.com/api.eosvotes.io/eosio.forum/vote/latest.json',
  API_POLL_TALLY: 'https://s3.amazonaws.com/api.eosvotes.io/eosvotes/tallies/latest.json',
  API_GET_ALL_PROXIES: 'https://s3.amazonaws.com/api.eosvotes.io/eosvotes/proxies/latest.json'
}

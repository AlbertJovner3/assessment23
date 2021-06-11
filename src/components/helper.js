import axios from 'axios';
const apiKey = 'f25ae5bd16c904aec812af2fb2c1f3f9f3bf6';
const db_delay = 10000; // millis
let restdb = axios.create({
    baseURL: 'https://albertscp-03ab.restdb.io',
    timeout: 1000,
    headers: { 'x-apikey': apikey }
});
const realtimeURL = `https://albertscp-03ab.restdb.io/rest/scp?apikey=${apikey}`

export { apikey, restdb, realtimeURL, db_delay};
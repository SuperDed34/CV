import process from 'process';
import axios from 'axios'

//const API_URL = process.env.EVENBRIT_API

const organizationId = '34111417079'
const personalOAuthToken = process.env.EVENBRIT_API;

const url = `https://www.eventbriteapi.com/v3/organizations/${organizationId}/events/`
export function getApi() {
  axios.get(url, {
    headers: {
      'Authorization': `Bearer ${personalOAuthToken}`
    }
  })
    .then(response => {

      console.log(response.data);
      return response.data
    })
    .catch(error => {

      console.error('Ошибка запроса:', error.response ? error.response.data : error.message);
    });
}
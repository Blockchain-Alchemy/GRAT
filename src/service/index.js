import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
//const BASE_URL = 'http://localhost:3333';
//const BASE_URL = 'https://grat.fun';

export const compile = (name, code, taqId) => {
  console.log('compile', name, taqId, code)
  const payload = { name, code, taqId };
  return axios.post(`${BASE_URL}/blockly/compile`, payload)
    .then((res) => {
      return res?.data?.data;
    })
    .catch((error) => {
      console.error(error);
      console.error('Error:', error?.response?.data)
      return null;
    })
}

export const deploy = (name, taqId) => {
  const payload = { name, taqId };
  return axios.post(`${BASE_URL}/blockly/deploy`, payload, { timeout: 600000 })
    .then((res) => {
      return res?.data?.data;
    })
    .catch((error) => {
      console.error(error);
      console.error('Error:', error?.response?.data)
      return null;
    })
}
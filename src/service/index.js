import axios from 'axios';

const BASE_URL = 'http://localhost:3333';//'https://grat.fun';//process.env.REACT_APP_BASE_URL;

export const compile = (name, code, taqId) => {
  console.log('compile', name, taqId, code)
  const payload = { name, code, taqId };
  return axios.post(`${BASE_URL}/blockly/compile`, payload)
    .then((res) => {
      return res?.data?.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    })
}

export const deploy = (name, taqId) => {
  const payload = { name, taqId };
  return axios.post(`${BASE_URL}/blockly/deploy`, payload)
    .then((res) => {
      return res?.data?.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    })
}
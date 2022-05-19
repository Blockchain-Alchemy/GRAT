import axios from 'axios';

export const compile = (name, code) => {
  const url = 'https://grat.fun';//process.env.REACT_APP_BASE_URL;
  const payload = { name, code };
  return axios.post(`${url}/blockly/compile`, payload)
    .then((res) => {
      return res?.data?.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    })
}

export const deploy = (name) => {
  const url = 'https://grat.fun';//process.env.REACT_APP_BASE_URL;
  return axios.get(`${url}/blockly/deploy/${name}`)
    .then((res) => {
      return res?.data?.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    })
}
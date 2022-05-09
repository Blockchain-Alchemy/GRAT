import axios from 'axios';

export const compile = (name, code) => {
  const url = 'http://52.23.253.227';//process.env.REACT_APP_BASE_URL;
  const payload = { name, code };
  return axios.post(`${url}/blockly/compile`, payload)
    .then((res) => {
      console.log(res?.data?.data);
      return res?.data?.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    })
}

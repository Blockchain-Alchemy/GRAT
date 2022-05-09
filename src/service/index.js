import axios from 'axios';

export const compile = (name, code) => {
  const url = process.env.REACT_APP_BASE_URL;
  console.log(url);
  
  const payload = { name, code };
  return axios.post(`${url}/blockly/compile`, payload)
    .then((res) => {
      console.log('res', res);
      return res;
    })
    .catch((error) => {
      console.error(error);
      return null;
    })
}

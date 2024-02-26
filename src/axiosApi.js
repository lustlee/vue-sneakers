import axios from 'axios'

const axiosApi = axios.create({
  baseURL: 'https://052c740fc7fb6a8e.mokky.dev'
});

export default axiosApi;
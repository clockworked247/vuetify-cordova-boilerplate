// Instances of Axios
const axios = require('axios')

const instance = axios.create({
  baseUrl: 'url/to/your/API',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
})

export default instance

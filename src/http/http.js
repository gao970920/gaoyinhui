import axios from 'axios'

let instance = axios.create({
    baseURL:'',
    timeout:1000
})
export default instance
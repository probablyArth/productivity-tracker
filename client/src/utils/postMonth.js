import axios from "axios";
import env from 'react-dotenv';

const base_url = env.BASE_URL;

export default function postMonth(payload) {
    axios.post(`${base_url}/month`, payload)
    .catch(err => console.error(err))
}
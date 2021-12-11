import axios from "axios";

export default function postMonth(payload) {
    axios.post("http://localhost:4000/month", payload)
    .catch(err => console.error(err))
}
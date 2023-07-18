import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "af9e888e15504d4a8e8d6b47adee3fe7"
    }
});
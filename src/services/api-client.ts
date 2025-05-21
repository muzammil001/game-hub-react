import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"5a5cdfbcb836461b87405eac7ebb789a"
    }
})
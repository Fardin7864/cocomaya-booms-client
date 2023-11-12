import axios from "axios";

const instens = axios.create({
    // baseURL: "http://localhost:5000/"
})
const useAxios = () => {
    return instens;
};

export default useAxios;
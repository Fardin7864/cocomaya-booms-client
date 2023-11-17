import axios from "axios";
import useAuth from "../useAuth/useAuth";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const instens = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    withCredentials: true,
})
const useAxios = () => {
    const {errorToast} = useAuth();
    const navigate = useNavigate();
    const removeUser = () => { 
        signOut(auth)
        errorToast("Log in please!")
     }
    instens.interceptors.response.use(
        (res) => { 
            return res;
         }, (err) => { 
            console.log("err from interceptor", err)
            removeUser();
            navigate('/')
          }
    )
    return instens;
};

export default useAxios;
import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios/useAxios";
import useAuth from "../useAuth/useAuth";

const useCart = () => {
const axios = useAxios();
const {user} = useAuth()
const {refetch,data: cart} = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: () => axios.get(`/cart?userEmail=${user?.email}`)
})
// console.log(data)
return {refetch,cart}
};

export default useCart;
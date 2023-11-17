import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxios from "../useAxios/useAxios";

const useUsers = () => {
    const {user} = useAuth();
    const axios = useAxios();

    const {refetch,data: usersList} = useQuery({
        queryKey: ['userList', user?.email],
        queryFn: () => axios.get('/users')
    })

    const allUser = usersList?.data;

    return {allUser,refetch}

};

export default useUsers;
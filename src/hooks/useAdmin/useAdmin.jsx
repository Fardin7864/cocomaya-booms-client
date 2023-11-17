import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxios from "../useAxios/useAxios";

const useAdmin = () => {
    const {user} = useAuth();
    const axiosSecure = useAxios();

    const {data: isAdmin} = useQuery({
        queryKey: [user?.email, "isAdminss"],
        queryFn: () => axiosSecure.get(`/users/admin/${user.email}`)
           
    })

    return {isAdmin}

};

export default useAdmin;
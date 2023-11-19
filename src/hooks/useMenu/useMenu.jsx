import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';
import {useQuery,} from '@tanstack/react-query'

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    const {data , refetch: loadMenu} = useQuery({
        queryKey: ['AllItems'],
        queryFn: () => axiosPublic.get('/menu')
    })
    const menu = data?.data;
    return [menu,loadMenu];
};

export default useMenu;
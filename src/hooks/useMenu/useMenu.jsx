import { useEffect, useState } from 'react';
import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    const [menu, setmenu] = useState();
    useEffect(() => { 
        axiosPublic.get('/menu')
        .then(res => setmenu(res.data))
     },[axiosPublic])
    return menu;
};

export default useMenu;
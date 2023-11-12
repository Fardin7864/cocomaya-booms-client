import axios from 'axios';
import { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu, setmenu] = useState();
    useEffect(() => { 
        axios.get('/menu.json')
        .then(res => setmenu(res.data))
     },[])
    return menu;
};

export default useMenu;
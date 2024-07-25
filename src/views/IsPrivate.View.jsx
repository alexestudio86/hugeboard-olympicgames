
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";


export function IsPrivateView({user}) {

    const navigate = useNavigate();

    useEffect( () => {
        if (!user.authenticated) {
            navigate('/login')
        }
    },[] );
    
    return <Outlet/>


};
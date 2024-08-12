
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";


export function IsPrivateView({user, children}) {

    const navigate = useNavigate();

    useEffect( () => {
        if (!user.authenticated) {
            navigate('/login')
        }
    },[] );
    
    return children ?? <Outlet/>


};
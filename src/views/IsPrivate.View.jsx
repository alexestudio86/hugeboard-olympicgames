
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";


export function IsPrivateView({children}) {

    const {user} = useLoginContext();
    const navigate = useNavigate();

    useEffect( () => {
        if (!user.authenticated) {
            navigate('/login', { replace: true })
        }
    },[] );
    
    return children ? children : <Outlet/>;

};
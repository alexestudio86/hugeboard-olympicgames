
import { Navigate } from "react-router-dom";


export function IsPrivateView({user, children}) {
    console.log('user: ', user)
    if (!user.authenticated) {
        return <Navigate to='/login' replace />
    }
    return children
};
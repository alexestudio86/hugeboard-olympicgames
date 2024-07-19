import { Outlet } from "react-router-dom";
import { LoginProvider } from "../context/LoginProvider";


export function GeneralLayout({children}) {


    return (
        <LoginProvider>
            {
                children
                ??
                <Outlet/>
            }
        </LoginProvider>
    )
}
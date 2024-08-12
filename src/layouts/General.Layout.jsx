import { Outlet } from "react-router-dom";
import { LoginProvider } from "../context/LoginProvider";
import { HeaderNav } from "../components/Header.Nav";

export function GeneralLayout({children}) {


    return (
        <LoginProvider>
            <HeaderNav/>
            {
                children
                ??
                <Outlet/>
            }
        </LoginProvider>
    )
}
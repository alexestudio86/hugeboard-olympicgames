import { Outlet } from "react-router-dom";
import { LoginProvider } from "../context/LoginProvider";
import { Navbar } from "../components/Navbar";

export function GeneralLayout({children}) {


    return (
        <LoginProvider>
            <Navbar/>
            {
                children
                ??
                <Outlet/>
            }
        </LoginProvider>
    )
}
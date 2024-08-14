import { Outlet } from "react-router-dom";
import { LoginProvider } from "../context/LoginProvider";
import { HeaderNav } from "../components/Header.Nav";

export function GeneralLayout({children}) {


    return (
        <LoginProvider>
            <HeaderNav/>
            <div className="light-grey">
                <div className="container white">
                    {
                        children
                        ??
                        <Outlet/>
                    }
                </div>
            </div>
        </LoginProvider>
    )
}
import { Outlet } from "react-router-dom";
import { LoginProvider } from "../context/LoginProvider";
import { HeaderNav } from "../components/Header.Nav";
import { Footer } from "../components/Footer";
import './General.Layout.css'


export function GeneralLayout({children}) {
    return (
        <LoginProvider>
            <HeaderNav/>
            <div className="light-grey py-2">
                <div className="container white p-3">
                    {
                        children
                        ??
                        <Outlet/>
                    }
                </div>
            </div>
            <Footer/>
        </LoginProvider>
    )
}
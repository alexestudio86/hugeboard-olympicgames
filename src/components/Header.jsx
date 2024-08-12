import { HeaderNav } from "./Header.Nav";


export function Header() {
    return (
        <header>
            <h1 style={{fontSize: '30px', padding: '16px', backgroundColor:'white'}}>{document.title}</h1>
            <HeaderNav/>
        </header>
    )
}
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <>
            <div>
                <Link to='/'>home</Link>
            </div>
            <div>
                <Link to='/proposals'>proposals</Link>
            </div>
            <div>
                <Link to='/login'>login</Link>
            </div>
        </>
    )
}
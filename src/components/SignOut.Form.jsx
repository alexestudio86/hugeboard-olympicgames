import { useLoginContext } from "../context/LoginProvider";


export function SignOutForm() {

    const {logout} = useLoginContext();

    return (
        <div className="center">
            <button onClick={logout}>Logout</button>
        </div>
    )
}
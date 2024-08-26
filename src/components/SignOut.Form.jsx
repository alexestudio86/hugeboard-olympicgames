import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";


export function SignOutForm() {

    const {logout} = useLoginContext();
    const navigate = useNavigate();

    return (
        <div className="center">
            <button
                onClick={() => {
                    logout();
                }}
            >Logout</button>
        </div>
    )
}
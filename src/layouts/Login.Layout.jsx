import { useLoginContext } from "../context/LoginProvider";
import { SignInForm } from "../components/SignIn.Form";
import { SignOutForm } from "../components/SignOut.Form";


export function LoginLayout() {

    const {user} = useLoginContext();

    return (
        <>
            {
                user.authenticated
                ?
                <SignOutForm/>
                :
                <SignInForm/>
            }
        </>
    )
}
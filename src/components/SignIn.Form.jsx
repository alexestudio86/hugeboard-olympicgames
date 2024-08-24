import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoginContext } from "../context/LoginProvider";


export function SignInForm() {

    const {handleChange, login} = useLoginContext();

    return (
        <>
            {
                <div className="border border-light-grey p-5" style={{maxWidth: '600px', margin: 'auto'}}>
                    <div className="animate-zoom white" style={{maxWidth: '600px', margin: 'auto'}}>
                        <div className="center">
                            <span className="jumbo text-indigo">
                                <FontAwesomeIcon icon="fa-regular fa-user" />
                            </span>
                        </div>
                        <form className="container" onSubmit={ e => {e.preventDefault();login()}}>
                            <div className="section">
                                <label htmlFor="email"><b>Username</b></label>
                                <input
                                    onChange={ e => handleChange(e) }
                                    className="input border margin-bottom"
                                    type="text"
                                    placeholder="Enter Username"
                                    id="email"
                                    name="email"
                                    required
                                />
                                <label htmlFor="password"><b>Password</b></label>
                                <input
                                    onChange={ e => handleChange(e) }
                                    className="input border"
                                    type="password"
                                    placeholder="Enter Password"
                                    id="password"
                                    name="password"
                                    required
                                />
                                <button className="button block indigo section padding" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function SignInForm() {

    return (
        <>
            {
                <div className="w3-padding-32">
                    <div className="w3-card-4 w3-animate-zoom w3-white" style={{maxWidth: '600px', margin: 'auto'}}>
                        <div className="w3-center">
                            <span className="w3-jumbo">
                                <FontAwesomeIcon icon="fa-regular fa-user" />
                            </span>
                        </div>
                        <form className="w3-container" onSubmit={ e => {e.preventDefault();login()}}>
                            <div className="w3-section">
                                <label htmlFor="email"><b>Username</b></label>
                                <input
                                    onChange={ e => handleChange(e) }
                                    className="w3-input w3-border w3-margin-bottom"
                                    type="text"
                                    placeholder="Enter Username"
                                    id="email"
                                    name="email"
                                    required
                                />
                                <label htmlFor="password"><b>Password</b></label>
                                <input
                                    onChange={ e => handleChange(e) }
                                    className="w3-input w3-border"
                                    type="password"
                                    placeholder="Enter Password"
                                    id="password"
                                    name="password"
                                    required
                                />
                                <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
};
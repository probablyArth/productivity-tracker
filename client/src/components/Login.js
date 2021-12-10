import { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import env from "react-dotenv";

const clientId = env.GOOGLE_CLIENT_ID


export default function Login() {
    
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);
    
    const onLoginSuccess = (res) => {
        console.log(res);
        localStorage.setItem('googleId', res.googleId);
        localStorage.setItem('name', res.profileObj.name);
        localStorage.setItem('imageUrl', res.profileObj.imageUrl);
        localStorage.setItem('email', res.profileObj.email);

        setShowLoginButton(false);
        setShowLogoutButton(true);
    }

    const onLoginFailure = (res) => {
        console.log('Login Failed' + res)
    }

    const onSignOutSuccess = (res) => {
        alert("Successfully logged out");
        setShowLoginButton(true);
        setShowLogoutButton(false);
        localStorage.clear()    
    }

    return (
        <div className='login'>
            <img/>
            <div>
                <h2>Welcome Back {localStorage.name ? localStorage.name : null}</h2>
                {showLoginButton ?
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign In"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        // cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    /> : null }

                { showLogoutButton && localStorage.productivityTrackerID ?
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Sign Out"
                        onLogoutSuccess={onSignOutSuccess}
                    >
                    </GoogleLogout> : null
                }
            </div>
        </div>
    )

}
import { useState } from "react"
import logo from "./assets/instagram.png"
import './Insta.css'

export default function Insta() {
    const [login, setLogin] = useState(true)
    const Switch = () => {
        setLogin(!login)
    }
    return (
        <>
            <div className="container">
                <div className="user">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div id="inputTag">
                        <input type="text" hidden={login} placeholder="Mobile Number or Email" />
                        <input type="text" hidden={login} placeholder="Full Name" />
                        <input type="text" placeholder="Phone Number, Email or User ID" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <button>{login ? "Sign in" : "Sign up"}</button>
                    <div className="account">
                        {login ? "Don't have account?" : "Already have an account?"} <span onClick={Switch}>{login ? "Sign up" : "Log in"}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
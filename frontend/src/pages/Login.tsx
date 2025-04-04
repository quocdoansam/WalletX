import { Link } from "react-router-dom"
import DefaultButton from "../components/DefaultButton"
import DefaultInput from "../components/DefaultInput"
import Logo from "../components/Logo"
import { useState } from "react"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        console.log("clicked");
        fetch("http://localhost:8080/walletx/auth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.result.token) {
                    localStorage.setItem("token", data.result.token);
                    alert("Đăng nhập thành công!");
                } else {
                    alert("Đăng nhập thất bại!");
                }
            })
            .catch(error => {
                console.error("Lỗi khi đăng nhập:", error);
                alert("Có lỗi xảy ra!");
            });
    }


    return (
        <main className="container">
            <Logo />
            <div className="login-container">
                <div className="login-form">
                    <div className="column-4">
                        <h1>Welcome back!</h1>
                        <h4>Sign in to your account.</h4>
                    </div>
                    <DefaultInput inputType="text" placeholder="Enter username" onChange={(e) => { setUsername(e.target.value) }} />
                    <DefaultInput inputType="password" placeholder="Enter password" onChange={(e) => { setPassword(e.target.value) }} />
                    <div className="row-8">
                        <DefaultButton text="Use email" className="change-method-button" />
                        <DefaultButton text="Log in" className="login-button" onClick={handleLogin} />
                    </div>
                    <span>New to Wallet-X? <Link to={"/create"}>Create account</Link></span>
                </div>
            </div>
        </main>
    )
}

export default Login
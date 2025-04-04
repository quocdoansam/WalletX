import { Link } from "react-router-dom"
import DefaultInput from "../components/DefaultInput"
import Logo from "../components/Logo"
import { useState } from "react"
import Button from "../components/Button/Button"
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState<'success' | 'error'>("success");

    function handleLogin() {
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
                if (data.result?.token) {
                    localStorage.setItem("token", data.result.token);
                    setSeverity("success");
                    setMessage("Đăng nhập thành công!");
                    setOpen(true);
                } else {
                    setSeverity("error");
                    setMessage("Đăng nhập thất bại!");
                    setOpen(true);
                }
            })
            .catch(error => {
                console.error("Lỗi khi đăng nhập:", error);
                setSeverity("error");
                setMessage("Có lỗi xảy ra!");
                setOpen(true);
            });
    }

    const handleClose = () => {
        setOpen(false);
    };

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
                        <Button text="Use email" variant="text" />
                        <Button text="Log in" variant="text" onClick={handleLogin} />
                    </div>
                    <span>New to Wallet-X? <Link to={"/create"}>Create account</Link></span>

                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert
                            onClose={handleClose}
                            severity={severity}
                            variant="filled"
                            sx={{ width: '100%' }}
                        >
                            {message}
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </main>
    )
}

export default Login;

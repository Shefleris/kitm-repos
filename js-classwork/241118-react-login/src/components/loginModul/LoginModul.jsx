import LoginSide from "./loginForm/LoginForm"
import TextSide from "./textSide/TextSide"
import './LoginModul.scss'

const LoginModul = () => {
    return (
        <div className="container">
            <TextSide/>
            <LoginSide/>
        </div>
    )
}

export default LoginModul
import { Link } from "react-router-dom";

export default function Signup() {
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Signup for free</h1>
                    <input type="text" placeholder="Nickname" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Password confirmation" />
                    <button className="btn btn-block">Signup</button>
                </form>
                <p className="message">
                    Already registered? <Link to="/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
}

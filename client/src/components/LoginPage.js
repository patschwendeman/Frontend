import "../style/LoginPage.css";

const LoginPage = ({ UserName, password, handleEnterUserName, handleEnterPassword, handleLogin }) => {
    return(
        <div className="Background">
            <div className="LoginSection">
                <div className="HeaderSection">
                <h2>Login</h2>
                </div>
                
                <form>
                    <p>Username</p>
                    <input type="text" value={ UserName } onChange={ handleEnterUserName }></input>
                    <p>Password</p>
                    <input type="password" value={ password } onChange={ handleEnterPassword }></input>
                    <button type="button" onClick={ handleLogin }>Login</button>
                </form>

            </div>
        </div>
    );
}

export { LoginPage };
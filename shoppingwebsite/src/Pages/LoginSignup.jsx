import "./LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Emaile" />
          <input type="password" placeholder="Your Password" />
        </div>
        <button>Continue</button>
        <p className="login">
          Already have an acount?<span>Login</span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" />
          <p>By continiuing , i agree to theterms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

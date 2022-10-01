import { useRef } from "react";
import { Link } from "react-router-dom";
import { auth } from "../lib/firebase";

export const LogIn = () => {
  const emailRef = useRef(null);
  const emailPassword = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      emailPassword.current.value
    );
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>E-mail</label>
          <input name="email" type="email" placeholder="email" ref={emailRef} />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            ref={emailPassword}
          />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>新規登録はこちら</div>
      </form>
    </div>
  );
};

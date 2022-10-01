import { useRef } from "react";
// import { useAuthContext } from "../contexts/AuthContext";

import { auth } from "../lib/firebase";

export const SignUp = () => {
//   const { user } = useAuthContext();

  const emailRef = useRef(null);
  const emailPassword = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { email, password } = e.target.elements;

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      emailPassword.current.value
    );
  };
  return (
    <>
      <h1>SignUp</h1>
      <h3>メールアドレスで登録</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>E-mail</label>
          <input name="email" type="email" placeholder="email" ref={emailRef} />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" ref={emailPassword} />
        </div>
        <div>
          <button>新規登録</button>
        </div>
      </form>
    </>
  );
};

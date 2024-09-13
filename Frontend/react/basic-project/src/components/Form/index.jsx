import { useRef, useState } from "react";
import "./form.css";
import useFirstRender from "../../hooks/useFirstRender";

export default function Form() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const [userStatus, setUserStatus] = useState({
    firstnameValid: false,
    lastnameValid: false,
    emailValid: false,
  });

  const isFirstRender = useFirstRender();

  const handleSubmit = (event) => {
    const firstname = firstNameRef.current.value;
    const lastname = lastNameRef.current.value;
    const email = emailRef.current.value;

    if (firstname === "" || firstname.length < 3) {
      setUserStatus({ ...userStatus, firstnameValid: false });
      event.preventDefault();
    } else {
      setUserStatus({ ...userStatus, firstnameValid: true });
    }

    if (lastname === "" || lastname.length < 1) {
      setUserStatus({ ...userStatus, lastnameValid: false });
      event.preventDefault();
    } else {
      setUserStatus({ ...userStatus, lastnameValid: true });
    }

    if (email === "") {
      setUserStatus({ ...userStatus, emailValid: false });
      event.preventDefault();
    } else {
      setUserStatus({ ...userStatus, emailValid: true });
    }
    console.log(userStatus);
    console.log(isFirstRender);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstname">Firstname</label>
        <input type="text" name="firstname" id="firstname" ref={firstNameRef} />
        <span className="error-message">
          {!userStatus.firstnameValid &&
            !isFirstRender &&
            "The firstname should not be less than 8 characters"}
        </span>
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Lastname</label>
        <input type="text" name="lastname" id="lastname" ref={lastNameRef} />
        <span className="error-message">
          {!userStatus.lastnameValid &&
            !isFirstRender &&
            "The lastname should not be less than 1 characters"}
        </span>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" ref={emailRef} />
        <span className="error-message">
          {!userStatus.emailValid &&
            !isFirstRender &&
            "Enter a valid email address"}
        </span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

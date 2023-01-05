import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import AlertMSJ from "./AlertMSJ";
import SuccessMSJ from "./SuccessMSJ";
import NavBar from "../NavBar2.0/NavBar2.0";

const RestorePassowrd = () => {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [succes, setSuccess] = useState("");
  const [forgotenUser, setForgotenUser] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await resetPassword(forgotenUser.email);
      setSuccess(" Check your inbox email and follow the instructions");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setForgotenUser({ ...forgotenUser, [name]: value });
  };

  return (
    <div>
      <NavBar />
      <section className="login">
        <div className="loginContainer">
          <h1 className="text-white">Restore password</h1>
          {succes && <SuccessMSJ message={succes} />}
          {error && <AlertMSJ message={error} />}
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>Email</label>
            <input
              className="ph-center d-flex "
              onChange={(e) => handleChange(e)}
              name="email"
              type="email"
              placeholder="Enter email"
              autoFocus
              required
            />
            <div className="btnContainer">
              <button onClick={(e) => handleSubmit(e)}>Restore password</button>
            </div>
          </form>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RestorePassowrd;

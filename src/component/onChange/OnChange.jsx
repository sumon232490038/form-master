import { useState } from "react";

const OnChange = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password must be under 6");
    } else {
      setError("");
    }

    console.log(name, email, password);
  };
  const handlename = (e) => {
    setName(e.target.value);
    // console.log(e.target.value);
  };
  const handleemail = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
  };
  const handlepassword = (e) => {
    setPassword(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handlename} type="text" name="name" />
        <br />
        <input onChange={handleemail} type="email" name="email" />
        <br />
        <input onChange={handlepassword} type="phone" name="phone" />
        <br />
        <input type="submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default OnChange;

import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={nameRef}
          defaultValue={"hello bangladesh"}
          name="name"
        />
        <br />
        <input type="email" name="email" required />
        <br />
        <input type="phone" name="phone" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RefForm;

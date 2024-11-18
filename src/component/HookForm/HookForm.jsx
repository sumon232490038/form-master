import useInputState from "../../jsFiles/useInpuntState";

const HookForm = () => {
  // const [name, setName] = useInputState("bangladesh");
  const nameState = useInputState("bangladesh");
  const handleSubmit = (e) => {
    console.log(nameState.value);
    // console.log(name);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={setName} type="text" name="name" /> */}
        <input {...nameState} type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="phone" name="phone" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default HookForm;

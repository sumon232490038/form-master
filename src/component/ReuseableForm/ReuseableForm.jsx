const ReuseableForm = ({
  formTitle,
  submitBtnText = "Submit",
  children,
  handleSubmit,
}) => {
  const handleSubmitData = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      <div> {children}</div>
      <form onSubmit={handleSubmitData}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="phone" name="phone" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReuseableForm;

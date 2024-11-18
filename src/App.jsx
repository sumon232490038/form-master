import "./App.css";
import Grandpa from "./component/Grandpa/Grandpa";
// import ReuseableForm from "./component/ReuseableForm/ReuseableForm";
// import HookForm from "./component/HookForm/HookForm";
// import RefForm from "./component/RefForm/RefForm";
// import OnChange from "./component/onChange/OnChange";
// const handleSubmit = (e) => {
//   e.preventDefault();
// console.log(e);
// console.log(e.target.name.value);
// console.log(e.target.email.value);
// console.log(e.target.phone.value);
// console.log("form is submitted");

// e.target.name.value = "";
// e.target.email.value = "";
// e.target.phone.value = "";
// };

// const handleSubmit = (e) => {
//   console.log(e);
// };

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* <OnChange></OnChange> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={"Sign up"} handleSubmit={handleSubmit}>
        <div>
          <h1>Plaese first singup</h1>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Update"}
        handleSubmit={handleSubmit}
        submitBtnText={"Update"}
      >
        <div>
          <h1>Then secound update</h1>
        </div>
      </ReuseableForm> */}
      <Grandpa></Grandpa>
    </>
  );
}

export default App;

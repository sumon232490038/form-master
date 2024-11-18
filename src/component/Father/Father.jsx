import { useContext } from "react";
import { NameContext } from "../Grandpa/Grandpa";

const Father = () => {
  const emon = useContext(NameContext);
  return (
    <div>
      <h1>Father</h1>
      <h1>{emon}</h1>
    </div>
  );
};

export default Father;

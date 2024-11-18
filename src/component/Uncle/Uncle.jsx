import { useContext } from "react";
import { EmailContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(EmailContext);
  return (
    <div>
      <h1>Uncle</h1>
      <h2>{money}</h2>
      <button onClick={() => setMoney(money + 1000)}>hello</button>
    </div>
  );
};

export default Uncle;

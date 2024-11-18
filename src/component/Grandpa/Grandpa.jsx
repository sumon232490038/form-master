import { createContext, useState } from "react";
import Anty from "../Anty/Anty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";
export const NameContext = createContext(null);
export const EmailContext = createContext(null);
const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  return (
    <EmailContext.Provider value={[money, setMoney]}>
      <NameContext.Provider value={"sumon"}>
        <div className="Grandpa common ">
          <h1>Grandapa</h1>
          <section className="flex">
            <Father></Father>
            <Anty></Anty>
            <Uncle></Uncle>
          </section>
        </div>
      </NameContext.Provider>
    </EmailContext.Provider>
  );
};

export default Grandpa;

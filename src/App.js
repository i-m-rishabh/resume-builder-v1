import "./styles.css";
import Resume from "./Resume";
import details from "../data/details";
import Print from "./components/Print";
import { useState } from "react";

export default function App() {
  const [isPrint, setPrint] = useState(false);

  return (
    <div className="App">
      {!isPrint && <Print isPrint={isPrint} setPrint={setPrint} />}

      <Resume details={details} />
    </div>
  );
}

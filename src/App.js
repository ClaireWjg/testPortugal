import "./styles.css";
import React, { useState } from "react";

let name;
let surname;
let birthday;

export default function App() {
  const [name, setName] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="App">
      <div className="form">
        <ul>
          Name :
          <form>
            <input
              type="text"
              placeholder="name here"
              value={name}
              onChange={updateName}
            />
          </form>
        </ul>
        <ul>
          Surname :
          <form>
            <input type="text" placeholder="name here" value={surname} />
          </form>
        </ul>
        <ul>
          Countries :
          <form>
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </form>
        </ul>
        <ul>
          Birthday :
          <form>
            <input type="date" placeholder="mm/dd/yyyy" value={birthday} />
          </form>
        </ul>
      </div>
      ,
      <div className="button">
        <button>Save</button>
      </div>
      <div className="print input">
        Hello {name} from //, on {birthday} you will have years
      </div>
    </div>
  );
}

import "./styles.css";
import React, { useState } from "react";

let name;
let surname;
let birthday;
let mess;

function ok() {
  mess = "Hello { name } from  on { birthday } you will have years";
}
export default function App() {
  const [name, setName] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };
  function sayHello() {
    alert("Hello!");
  }
  return (
    <div className="App">
      <div className="form">
        <ul>
          Name :
          <form>
            <input type="text" placeholder="name here" value={name} />
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
        <button onClick={sayHello()}>Save</button>
      </div>
    </div>
  );
}

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ul>
        Name :
        <form>
          <input type="text" placeholder="name here" />
        </form>
      </ul>
      <ul>
        Surname :
        <form>
          <input type="text" placeholder="name here" />
        </form>
      </ul>
      <ul>
        Countries :
        <form>
          <input type="select" placeholder="name here" />
        </form>
      </ul>
      <ul>
        Birthday :
        <form>
          <input type="date" placeholder="mm/dd/yyyy" />
        </form>
      </ul>
      <button>Save</button>
    </div>
  );
}

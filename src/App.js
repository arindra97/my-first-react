// import logo from "./logo.svg";
// import "./App.css";

// import
import ButtonClass from "./components/ButtonClass";
import ButtonFunctional from "./components/ButtonFunctional";

function App() {
  return (
    <div className="App">
        <div style={{ display:"flex", flexDirection:"row", gap:"0.5em" }}>
            <ButtonClass text="Button Class"/>
            <ButtonFunctional text="Button Function"/>
            <ButtonClass text="Button Class 2"/>
            <ButtonFunctional text="Button Function 2"/>
        </div>
    </div>
  );
}

export default App;

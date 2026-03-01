import { Suspense } from "react";
import "./App.css";
import BatsMan from "./BatsMan";
import Counter from "./Counter";
import Users from "./Users";

function App() {
  const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

  function handleClick() {
    alert("Button clicked");
  }
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <BatsMan></BatsMan>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>

      <button
        onClick={function handleClick2() {
          alert("Button 2 clicked");
        }}
      >
        Click Me2
      </button>

      <button onClick={() => alert("Button 3 clicked")}>Click Me</button>
      <button onClick={() => handleAdd5(10)}>Click Add5</button>
    </>
  );
}

export default App;

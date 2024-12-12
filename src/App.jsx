import Fruits from "./components/fruits";
import Hello from "./components/Hello";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
function App() {
  const seatNumbers = [1, 2, 4];
  const person = {
    name: "rob",
    message: "Hi there!",
    seatNumbers: [1, 2, 4],
  };
  return (
    <div className="App">
      <Message></Message>
      <Counter></Counter>
    </div>
  );
}

export default App;

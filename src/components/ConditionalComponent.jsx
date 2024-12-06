import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  let message;
  const display = false;

  return display ? <h1>This is message 1 t</h1> : <h1>This is message 2</h1>;
}

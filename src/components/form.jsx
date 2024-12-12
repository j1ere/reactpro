import { useState } from "react";

export default function Form() {
  function handleChange(e) {
    setName(e.target.value);
  }
  const [name, setName] = useState("");
  return (
    <div>
      <form>
        <input
          //   onChange={function demo(e) {
          //     return handleChange(e);
          //   }}
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
}

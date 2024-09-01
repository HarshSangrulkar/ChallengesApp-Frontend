import { useState } from "react";

function GreetingName({ name, message }) {
  const [messageState, setMessage] = useState(message);

  return (
    <div>
      <h2>Hello {name}</h2>
      <p>{messageState}</p>
      <button onClick={() => setMessage("Good Bye")}></button>
    </div>
  );
}

export default GreetingName;

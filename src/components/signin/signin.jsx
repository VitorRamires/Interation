import { useState } from "react";
import { useUser } from "../../context/username";

export function Signin({ onEnter }) {
  const { setUsername } = useUser();
  const [input, setInput] = useState("");

  const isDisabled = input === "";

  function handleSubmit(event) {
    event.preventDefault();
    setUsername(input);
    onEnter();
  }

  return (
    <div className="signin-page">
      <h2 className="title-signin">Welcome to CodeLeap network</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="signin-input">Please enter your username</label>
        <input
          type="text"
          id="signin-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Vitor Ramires"
        />
        <button
          disabled={isDisabled}
          className={isDisabled ? "disabled" : ""}
          type="submit"
        >
          ENTER
        </button>
      </form>
    </div>
  );
}

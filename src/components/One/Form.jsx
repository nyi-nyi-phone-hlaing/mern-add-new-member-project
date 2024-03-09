import { useState } from "react";
import "./form.css";
const Form = (props) => {
  let [name, setName] = useState("");
  let [live, setLive] = useState("");

  const trackName = (e) => {
    setName(e.target.value);
  };

  const trackLive = (e) => {
    setLive(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!name || !live) {
      return;
    }
    let obj = { name, live };
    props.addNewMember(obj);
    setName("");
    setLive("");
  };

  return (
    <form onSubmit={formSubmit}>
      <input type='text' placeholder='name' onChange={trackName} value={name} />
      <input type='text' placeholder='live' onChange={trackLive} value={live} />
      <button type='submit'>Add new member</button>
    </form>
  );
};

export default Form;

import React, { useState } from "react";
import { useAddContactsData } from "../Components/Contacts";
import "./NewContact.css";

const NewContact = () => {
  const { mutate } = useAddContactsData();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const addNewContact = () => {
    const data = { name, number };
    mutate(data);
  };
  return (
    <div className="inputContainer">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="number"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button className="addUser" onClick={addNewContact}>
        Add user
      </button>
    </div>
  );
};

export default NewContact;

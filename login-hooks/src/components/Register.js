import React, { useState } from "react";

const initialState = {
  name: "",
  username: "",
  email: "",
  password: ""
};

export default function Register() {
  const [form, setForm] = useState(initialState);
  const [user, setUser] = useState(null);

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser(form);
    setForm(initialState);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <hr />
      <h2>Register</h2>
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center"
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <input
          type="password"
          placeholder="Placeholder"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}

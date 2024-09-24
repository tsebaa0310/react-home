"use client";

import React, { useState } from "react";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.token) {
          document.cookie = `token=${json.token}; path=/; max-age=${
            60 * 60 * 24
          }`;
        }
      })
      .catch((error) => alert("error"));
  };

  return (
    <div className="max-w-[500px] mx-auto items-center flex justify-center">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center m-1">login</h2>
        <div className="m-1">
          <label className="block " htmlFor="username">
            Username:
          </label>
          <input
            className="border rounded border-black p-0.5"
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>
        <div className="m-1">
          <label className="block " htmlFor="password">
            Password:
          </label>
          <input
            className="border rounded border-black p-0.5"
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div>
          <input
            className="bg-green-500 text-white text-center w-full rounded-md py-1 mt-4 block"
            type="submit"
            value={"Login"}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;

"use client";
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("password not match");
      return;
    }

    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((json) => alert("success"))
      .catch((error) => alert("error"));
  };

  return (
    <div className="mt-10 items-center justify-center flex">
      <form onSubmit={handleSubmit} className="">
        <div>
          <h1 className="font-bold m-5">Register Form</h1>
        </div>
        <div className="p-0.5">
          <label htmlFor="name">Full Name:</label>
          <div>
            <input
              className="rounded-md border border-black p-1"
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="p-0.5">
          <label htmlFor="email">Email:</label>
          <div>
            <input
              className="rounded-md border border-black p-1"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="p-0.5">
          <label htmlFor="password">Password:</label>
          <div>
            <input
              className="rounded-md border border-black p-1"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="p-0.5">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <div>
            <input
              className="rounded-md border border-black p-1"
              id="confirm-password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div>
          <input
            className="bg-blue-500 text-white text-center w-full rounded-md py-1 mt-4 block"
            type="submit"
            value={"Submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;

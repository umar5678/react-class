import React, { useState } from "react";

const RegisterForm = () => {
  // create 3 state variables,  name, email , password
  // store the input values into the state variables,
  // submit button func,
  // apply data validation, check if the values are not empty
  // then console log tghe data

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // var. let , const. all are varialbes.

  const handleNameChange = (e) => {
    console.log(e)
    setName(e.target.value);
  };

  const handleResetform = () => {
    setName("")
    setEmail("")
    setPassword("")
  }

  const submit = (e) => {
    e.preventDefault();
    setError(null);

    if (name === "" || email === "" || password === "") {
      console.log("Error, all filed are required");
      setError("All Fields are required");
    }


     const data = {
        name: name,
        email: email,
        password: password
     }
    // then console log

    console.log("submit called" , data);

    handleResetform()
  };

  return (
    <div className="p-2 my-10">
      <form>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col mt-3">
          <label htmlFor="name" id="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter Your Name"
            className="py-2 px-3 border border-gray-300 rounded-lg"
            onChange={(e) => handleNameChange(e)}
            required
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="email" id="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter Your Email"
            className="py-2 px-3 border border-gray-300 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="password" id="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter Your Password"
            className="py-2 px-3 border border-gray-300 rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <button
            className="px-2 py-1 bg-blue-600 text-white rounded mt-2"
            onClick={(e) => submit(e)}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;



// operators : 
// = . assignemnt, operator, var valur assing , const name = "umar "
// == , comparsion ope, > , < , >= , <= , == , !=
// === strict equality check . value are equal, also the data type is same, 


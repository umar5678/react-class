import React from "react";

const Input = ({ label, placeholder, disabled, type = "text" }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;

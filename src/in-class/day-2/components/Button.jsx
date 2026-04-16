import clsx from "clsx";
import React from "react";

const Button = ({
  size = "md",
  varient = "danger",
  disabled = false,
  children,
}) => {
  // sizes, sm, md , lg,
  // varient, primary, warning, danger

  const baseStyles = "rounded border text-white";

  const sizes = {
    sm: "px-1 py-2",
    md: "px-2 py-4",
    lg: "px-4 py-6",
  };

  const varients = {
    primary: "bg-blue-500",
    warning: "bg-orange-500",
    danger: "bg-red-500",
  };

  const combinedClasses = clsx(
    baseStyles,
    sizes[size],
    varients[varient],
    disabled && "opacity-50 ",
  );

  return (
    <div>
      <button className={`${combinedClasses}`} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default Button;

// // components/Button.jsx

// /// n3ext time show varient props and use it,
// // then use size props.
// // then disabled, putton

// const Button = ({ children }) => {
//   return (
//     <button className="bg-blue-500 text-white px-4 py-2 rounded">
//       {children}
//     </button>
//   );
// };

// export default Button;

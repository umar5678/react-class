import React from "react";
import clsx from "clsx";

const Badge = ({ status, statusText = "badge", showBadge = true }) => {
  // success , error, warning, info

  if (!showBadge) {
    return null;
  }

  return (
    <div>
      <span
        className={clsx(
          "rounded-full border p-2",
          status === "success" && "bg-green-400/50",
          status === "warning" && "bg-orange-400/50",
          status === "error" && "bg-red-400/50",
          status === "info" && "bg-blue-400/50",
        )}
      >
        {statusText}
      </span>
    </div>
  );
};

export default Badge;

// status === "success" ? "rounded border p-2 bg-green-400/50" :
//             status === "warning" ? "rounded border p-2 bg-orange-400/50" :
//             status === "error" ? "rounded border p-2 bg-orange-400/50" :
//             status === "info" ? "rounded border p-2 bg-blue-400/50" : "rounded border p-2"

import React from "react";

function Loader() {
  const numDots = 8; // point

  return (
    <div className="lds-default" style={ldsDefaultStyle}>
      {Array.from({ length: numDots }, (_, index) => {
        const animationDelay = index * 0.1; // дилей

        const dotStyle = {
          position: "absolute",
          width: "5px",
          height: "5px",
          background: "transparent",
          border: "1px solid #848484",
          borderRadius: "50%",
          animation: "lds-default 0.9s linear infinite",
          animationDelay: `${animationDelay}s`,
          transformOrigin: "center",
          transform: index % 2 === 0 ? "scale(1)" : "scale(1.5)",
        };

        return <div key={index} className="lds-dot" style={dotStyle}></div>;
      })}
    </div>
  );
}

const ldsDefaultStyle = {
  display: "inline-block",
  position: "relative",
  width: "31px",
  height: "31px",
  alignSelf: "center",
};

export default Loader;
import React from "react";

function Heading() {
  const dat = new Date();
  const time = dat.getHours();
  let text;
  const customStyle = {
    color: "",
  };

  if (time < 12) {
    text = "Good Morning";
    customStyle.color = "red";
  } else if (time < 18) {
    text = "Good Afternoon";
    customStyle.color = "green";
  } else {
    text = "Good Night";
    customStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {text}
    </h1>
  );
}
export default Heading;

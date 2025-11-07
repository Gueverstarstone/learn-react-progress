import React from "react";
import Code from "./Code";
import Welcome from "./Welcome";
//conditional rendering using element variables
export default function ConditionalComponent() {
  let message;
  const display = true;
  if (display) {
    message = <h1>Welcome home</h1>;
  } else {
    message = <h1>Continue running</h1>;
  }
  return message;
}

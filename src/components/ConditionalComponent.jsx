import React from "react";
import Code from "./Code";
import Welcome from './Welcome'
//conditionally rendering jsx & components
//Components
export default function ConditionalComponent() {
  const displayHead = true;
  if (displayHead) {
    return <Code />;
  } else {
    return <Welcome />;
  }
}

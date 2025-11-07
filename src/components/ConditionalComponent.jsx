import React from "react";

//conditionally rendering jsx & components
// 1. jsx
export default function ConditionalComponent() {
  const displayHead = false;
  if (displayHead) {
    return (
      <div>
        <h3>This is a conditional components</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Code everyday!</h3>
      </div>
    );
  }
}

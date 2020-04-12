import React, { useState } from "react";

export default function talkField() {
    const [tweep, setTweep] = useState("");
  return (
    <div>
      <input type="text" placeholder="How are you today ?"></input>
      <button>Tweep</button>
    </div>
  );
}

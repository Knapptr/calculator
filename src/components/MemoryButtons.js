import React from "react";
import Button from "./button";

const MemoryButtons = ({
  changeMemory,
  recallMemory,
  clearMemory,
  toggleSign,
}) => {
  return (
    <div>
      <Button
        color="green"
        data="+"
        contents="M+"
        clickHandler={changeMemory}
      />
      <Button
        color="green"
        data="MR"
        contents="MR"
        clickHandler={recallMemory}
      />
      <Button
        color="green"
        data="MC"
        contents="MC"
        clickHandler={clearMemory}
      />
      <Button
        color="green"
        data="-"
        contents="M-"
        clickHandler={changeMemory}
      />
      <Button
        color="green"
        data="+/-"
        contents="+/-"
        clickHandler={toggleSign}
      />
    </div>
  );
};
export default MemoryButtons;

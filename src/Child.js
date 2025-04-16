import React, { memo } from "react";

const Child = ({ counterTwo, setCounterTwo }) => {
  console.log("child component renderd");
  return (
    <>
      <div>This is Child Component</div>
    </>
  );
};

export default memo(Child);

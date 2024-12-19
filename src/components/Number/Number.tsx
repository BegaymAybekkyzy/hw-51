import "./Number.css";
import React from "react";

interface Props {
  value: number;
}

const Number: React.FC<Props> = ({ value }) => {
  return (
    <span className="number">{value}</span>
  );
};
export default Number;

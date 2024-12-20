import "./App.css";
import { useState } from "react";
import Number from "./components/Number/Number";

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const randomNumberGenerator = (min: number, max: number) => {
    const copyNumbers = [...numbers];
    for (let i = 0; i < numbers.length; i++) {
      let copyNumber: number = numbers[i];
      copyNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      if (!copyNumbers.includes(copyNumber)) {
        copyNumbers[i] = copyNumber;
      }
    }

    copyNumbers.sort((a, b) => a - b);
    setNumbers(copyNumbers);
  };

  return (
    <>
      <div className="btnBlock">
        <button onClick={() => randomNumberGenerator(5, 36)}>
          New numbers
        </button>
      </div>

      {numbers.map((number) => (
        <Number value={number} />
      ))}
    </>
  );
};

export default App;

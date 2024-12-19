import './App.css';
import { useState } from 'react';
import Number from './components/Number/Number';

const App = () => {
  const [numbers] = useState<number[]>([5, 11, 16, 23, 32]);
  return (
    <>
      <div className="btnBlock">
        <button>New numbers</button>
      </div>

      {numbers.map((number) => (
        <Number value={number}/>
      ))}

    </>
  );
};

export default App;

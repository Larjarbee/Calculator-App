import React, { useState } from 'react';
import classes from './Calculator.module.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const buttonHandler = (event) => {
    setDisplay(display.concat(event.target.value));
  };

  const clearHandler = () => {
    setDisplay('');
  };

  const percentageHandler = () => {
    setDisplay((display / 100).toString());
  };

  const backspace = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('syntax error');
    }
  };

  return (
    <main>
      <div className={classes.container}>
        <div className={classes.display}>
          <h1>{display}</h1>
        </div>
        <button className={classes.arith} onClick={clearHandler}>
          C
        </button>
        <button className={classes.arith} onClick={percentageHandler}>
          %
        </button>
        <button className={classes.arith} onClick={backspace}>
          del
        </button>
        <button className={classes.arith} onClick={buttonHandler} value={' / '}>
          &#247;
        </button>
        <button onClick={buttonHandler} value={'7'}>
          7
        </button>
        <button onClick={buttonHandler} value={'8'}>
          8
        </button>
        <button onClick={buttonHandler} value={'9'}>
          9
        </button>
        <button className={classes.arith} onClick={buttonHandler} value={' - '}>
          -
        </button>
        <button onClick={buttonHandler} value={'4'}>
          4
        </button>
        <button onClick={buttonHandler} value={'5'}>
          5
        </button>
        <button onClick={buttonHandler} value={'6'}>
          6
        </button>
        <button className={classes.arith} onClick={buttonHandler} value={' + '}>
          +
        </button>
        <button onClick={buttonHandler} value={'1'}>
          1
        </button>
        <button onClick={buttonHandler} value={'2'}>
          2
        </button>
        <button onClick={buttonHandler} value={'3'}>
          3
        </button>
        <button className={classes.arith} onClick={buttonHandler} value={' * '}>
          &times;
        </button>
        <button onClick={buttonHandler} value={'0'}>
          0
        </button>
        <button onClick={buttonHandler} value={'.'}>
          .
        </button>
        <button className={classes.column} onClick={calculate}>
          =
        </button>
      </div>
    </main>
  );
};

export default Calculator;

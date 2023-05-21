import React, { useEffect, useState } from 'react';

export function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAInkrement = () => {
    setCounterA(prevState => prevState + 1);
  };

  const handleCounterBInkrement = () => {
    setCounterB(prevState => prevState + 1);
  };

  useEffect(() => {
    const totalCounter = counterA + counterB;
    document.title = totalCounter;
  }, [counterA, counterB])

  return (
    <>
      <p>Total: {counterA + counterB}</p>
      <button type="button" onClick={handleCounterAInkrement}>
        Click Counter A {counterA} time
      </button>
      <button type="button" onClick={handleCounterBInkrement}>
        Click Counter B {counterB} time
      </button>
    </>
  );
}

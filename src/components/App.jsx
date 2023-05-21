import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { ColorPicker } from 'components/ColorPicker/ColorPicker';
import { Counter } from 'components/Counter/Counter';
import { Clock } from 'components/Clock/Clock';
import { useState } from 'react';

const colorPickerOptions = [
  { label: 'red', color: 'red' },
  { label: 'green', color: 'green' },
  { label: 'blue', color: 'blue' },
  { label: 'grey', color: 'grey' },
  { label: 'yellow', color: 'yellow' },
  { label: 'indigo', color: 'indigo' },
];

export const App = () => {
  const [isClick, setIsClick] = useState(false)
  
    return (
      <>
        <SignUpForm />
        <ColorPicker options={colorPickerOptions} />
        <Counter />
        {!isClick && <Clock />}
        {isClick && <div>Component unmount</div>}
        <button type="button" onClick={() => setIsClick(!isClick)}>
          {isClick ? 'Mount' : 'Unmount'}
        </button>
      </>
    );
  }


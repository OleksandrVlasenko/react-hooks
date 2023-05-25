import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { ColorPicker } from 'components/ColorPicker/ColorPicker';
import { Counter } from 'components/Counter/Counter';
import { Clock } from 'components/Clock/Clock';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { PokemonForm } from 'components/Pokemon/PokemonForm/PokemonForm';
import { PokemonInfo } from 'components/Pokemon/PokemonInfo/PokemonInfo';
import { CounterReducer } from 'components/CounterReducer/CounterReducer';
import 'react-toastify/dist/ReactToastify.css';

const colorPickerOptions = [
  { label: 'red', color: 'red' },
  { label: 'green', color: 'green' },
  { label: 'blue', color: 'blue' },
  { label: 'grey', color: 'grey' },
  { label: 'yellow', color: 'yellow' },
  { label: 'indigo', color: 'indigo' },
];

export const App = () => {
  const [isClick, setIsClick] = useState(false);
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={setPokemonName} />
        <PokemonInfo pokemonName={pokemonName} />
        {/* {loading && <p>Loading...</p>} */}

        <ToastContainer autoClose={3000} />
      </div>
      <br />
      <SignUpForm />
      <ColorPicker options={colorPickerOptions} />
      <CounterReducer />
      <Counter />
      {!isClick && <Clock />}
      {isClick && <div>Component unmount</div>}
      <button type="button" onClick={() => setIsClick(!isClick)}>
        {isClick ? 'Mount' : 'Unmount'}
      </button>
    </>
  );
};

// export class App extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//     pokemonName: '',
//   };
//   componentDidMount() {
//     // this.setState({ loading: true });
//     // fetch(`https://pokeapi.co/api/v2/pokemon/kakuna`)
//     //   .then(res => res.json())
//     //   .then(pokemon => this.setState({ pokemon }))
//     //   .finally(this.setState({ loading: false }));
//   }

//   handleSubmit = pokemonName => {
//     this.setState({ pokemonName });
//   };

//   render() {
//     const { loading, pokemonName } = this.state;
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//         <PokemonForm onSubmit={this.handleSubmit} />
//         <PokemonInfo pokemonName={pokemonName} />
//         {loading && <p>Loading...</p>}

//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }

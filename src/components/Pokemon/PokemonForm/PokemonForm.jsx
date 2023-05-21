import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const styles = { form: { marginBottom: 20 } };

export function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState("")
  
  const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();


    if (pokemonName === '') {
      toast.error('Enter the name of pokemon');
      return;
    }

    onSubmit(pokemonName);
    setPokemonName("")
  };

  
    return (
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          autoComplete='on'
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Search
        </button>
      </form>
    );
  }


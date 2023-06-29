import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Interview() {
  const [allpokemon, setAllpokemon] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((pokemonlist) => {
        console.log("list", pokemonlist);
        setAllpokemon(pokemonlist);
      })
      .catch(() => {
        console.log("hey hari error may  be occured");
      });

    particularPokemonDetails();
  }, []);

  const particularPokemonDetails = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/1")
      .then((indivisualPokeDetails) => {
        console.log("indivisualPokeDetails", indivisualPokeDetails);
        setPokemonDetails(indivisualPokeDetails);
      })
      .catch(() => {
        console.log("hey hari error may  be occured");
      });
  };

  return (
    <div className="App">
      <>
        <select onClick={particularPokemonDetails}>
          {allpokemon?.data?.results.map((listofpokemons) => {
               return (
                <>   
                <option>{listofpokemons.name}</option>;
                </>
               )
         
          })}
        </select>
      </>
    
      <div>
        <ul>
          {pokemonDetails.data?.abilities.map((abilitiespokemon) => {
            //console.log('abilitiespokemon',abilitiespokemon.ability.name)
            return (
              <>
                <p>{abilitiespokemon.ability.name}</p>
              </>
            );
          })}
          ,
          {pokemonDetails.data?.moves.map((movepokemon) => {
            console.log(
              "datafsfsdsad",
              pokemonDetails.data.location_area_encounters
            );

            return (
              <>
                <p>{movepokemon.move.name}</p>
              </>
            );
          })}
          ,{<p>{pokemonDetails.data?.location_area_encounters}</p>}
          <li></li>
        </ul>
      </div>
    </div>
  );
}

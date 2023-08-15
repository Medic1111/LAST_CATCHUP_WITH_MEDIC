"use strict";

// QUERIES:
let pokeName = document.getElementById("name");
const id = document.getElementById("id");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const sprite = document.getElementById("sprite");

// QUERIES FORM:
const input = document.getElementById("userInput");
const submit = document.getElementById("submit");

// SET UP TES
let pokemon = "ditto";

const setBasicInfo = (data) => {
  pokeName.innerText = data.name.toUpperCase();
  id.innerText = data.id;
  height.innerText = data.height;
  weight.innerText = data.weight;
  sprite.setAttribute(
    "src",
    data.sprites.other["official-artwork"].front_shiny
  );
};

const fetchPoke = (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  fetch(url) //returns a promise (resolve, rejected)
    .then((serverRes) => serverRes.json()) //returns a promise
    .then((parsedData) => {
      setBasicInfo(parsedData);
    });
};

// fetchPoke(pokemon);

const fetchPokeAlt = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const res = await fetch(url); //this is a promise has resolved
  const parsedData = await res.json(); //this also a promise
  setBasicInfo(parsedData);
};

// fetchPokeAlt("eevee");

window.addEventListener("load", fetchPokeAlt(pokemon));

const handleSubmit = (e) => {
  e.preventDefault();
  fetchPokeAlt(input.value);
};

submit.addEventListener("click", handleSubmit);

// const test = () => console.log("test");
// test();

// console.log("BLAH BLAH");

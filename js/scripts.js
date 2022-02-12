alert('Hello world');

let pokemonList = [
  {
    name: "Bulbasaur",
    type: ["grass","poison"],
    height: 0.7
  },
  {
    name: "Squirtle",
    type: ["water"],
    height: 1.7
  },
  {
    name: "Charmander",
    type: ["fire","flying"],
    height: 0.6
  }
];

for (let i=0; i < pokemonList.length; i++){
  if(pokemonList[i].height > 1){
    document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + " )" + "Wow it`s a big pokemon!!!")
  }else {
  document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + " )")
}
}

alert('Hello world');

//IIFE
let pokemonRepository = (function() {
      //variables
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

    return {
          getAll:function() {
            return pokemonList;
          },
          add:function(pokemon){
            pokemonList.push(pokemon);
          }

        };
})();


pokemonRepository.getAll().forEach(function(pokemon){
document.write(pokemon.name + " with type: (" + pokemon.type + ") " + "and" + " (height :" + pokemon.height + "),   ")
});


console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll());

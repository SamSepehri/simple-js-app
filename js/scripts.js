//Start of IIFE
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//add new pokemon to pokemonList
function add(pokemon) {
  // "add" function adds pokemon to the "pokemonList" via the "push" function
  pokemonList.push(pokemon);
}
//return all pokemons
  function getAll() {
    return pokemonList;
  }

//create button of pokemons
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.list-group');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn-primary');
    listpokemon.classList.add('group-list-item');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function() {
      showDetails(pokemon);
  })
}
  //load list of pokemon from apiUrl
  function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      });
    }
//load data of each pokemon when click on pokemon
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types;
        item.abilities = [];
        for (let i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
        }
      }).catch(function (e) {
        console.error(e);
      });
    }
//after click on pokemon button,load the data of pokemon from server
    function showDetails(item) {
      loadDetails(item).then(function () {
        showModal(item);
      });
    }

    function showModal(item) {
      // showModal function
      let modalTitle = $('.modal-title'); // modalTitle
      let modalBody = $('.modal-body'); // modalBody
      // let modalHeader = $(".modal-header"); // no header so removed

      let pokemonName = $('<h2>' + item.name + '</h2>');

      let pokemonHeight = $('<p>' + 'Height: ' + item.height + '</p>');

      let pokemonWeight = $('<p>' + 'Weight: ' + item.weight + '</p>');

      let pokemonAbilities = $('<p>' + 'Abilities: ' + item.abilities + '</p>');

      let pokemonImage = $('<img class=\'pokemon-modal-image\'>');
      pokemonImage.attr('src', item.imageUrl); // pokemon image attribute loaded from 'item.imageUrl'

      modalTitle.empty(); // clears the modalTitle after display
      modalBody.empty(); // clears the modalBody after display

      modalTitle.append(pokemonName); // pokemonName is displayed as the title in the modal
      modalBody.append(pokemonImage); // pokemonImage is displayed in the body of the modal
      modalBody.append(pokemonHeight); // pokemonHeight is displayed in the body of the modal
      modalBody.append(pokemonWeight); // pokemonWeight is displayed in the body of the modal
      modalBody.append(pokemonAbilities); // pokemonDetails are displayed in the body of the modal
    }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();//end of IIFE


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

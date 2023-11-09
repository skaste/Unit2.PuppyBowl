const apiBaseURL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/`;
console.log(apiBaseURL);

const state = {
  allPlayers: [],
};

// Take all players and show them on the page
const getAllPlayers = async () => {
  try {
    const response = await fetch(apiBaseURL + "players");
    const jsonResponse = await response.json();
    state.allPlayers = jsonResponse.data.players; 
    console.log(state.allPlayers);
    renderAllPlayers();
  } catch (error) {
    return (`There was an error`);
  }
};

const renderAllPlayers = () => {
  state.allPlayers.forEach(elem => {
    console.log('foreach', elem.id, elem.name, elem.breed);
    return(`foreach`. elem.id, elem.name, elem.breed);
  })


}
// const getPlayerName =  (nameOfPlayers) => {
//   const response = await fetch(apiBaseURL + "players" + ${id});
//   const responseJson = await response.json();
//   const playerName = responseJson.data.players.name;
//   console.log(playerName);
//   renderName();
// };
// getPlayerName();

getAllPlayers();





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
    console.log(jsonResponse);
    renderAllPlayers();
  } catch (error) {
    return (`There was an error`);
  }
};

const getPlayerName = async (nameOfPlayers) => {
  const response = await fetch(apiBaseURL + "players" + "id");
  const responseJson = await response.json();
  const playerName = responseJson.data.players.name;
  console.log(playerName);
  renderName();
};


getAllPlayers();





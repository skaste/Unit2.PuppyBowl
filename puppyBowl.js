const apiBaseURL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/`;
console.log(apiBaseURL);

const state = {
  allPlayers: [],
};

// Take all players and show them on the page (step1)
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
//------------for use when appllying players to cards in HTML-----------//
const renderAllPlayers = () => {
  state.allPlayers.forEach(elem => {
    console.log('foreach', elem.id, elem.name, elem.breed);
    return(`foreach`. elem.id, elem.name, elem.breed);
  })
};


//----------------------Display Single Player (step 2)-------------------------//
const getPlayerDetails = async (playerID) => {
  try {
    const response = await fetch(apiBaseURL + "players/" + playerID);
    const responseJson = await response.json();
    const playerDetails = responseJson.data.player;
    console.log(playerDetails);
    renderDetails(playerDetails);
  } catch (error) {
    console.error("Error fetching player details:", error.message);
  }
};

//------------Display onto HTML-----------------------//
const renderDetails = (playerDetails) => {
  const html = `
  <h2>${detailsOfPlayer.id}</h2>
  <p>${detailsofPlayer.name}<p>
  <img src=${detailsOfPlayer.imageURL} width 150px>
  <p>${detailsOfPlayer.breed}</p>
  <p>${detailsOfPlayer.status}</p>
  <p>${detailsOfPlayer.teamId}</p>
  `;
MediaDeviceInfo.innerHTML = html;

const backButton = document.querySelector(`#backButton`);
console.log(backButton);
backButton.addEventListener(`click`, () => {
  renderAllPlayers();
})
} 

getAllPlayers();





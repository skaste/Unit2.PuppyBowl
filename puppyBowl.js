const apiBaseURL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/`;
// console.log(apiBaseURL);

const state = {
  allPlayers: [],
};

const main = document.querySelector(`main`);

// Take all players and show them on the page (step1)
const getAllPlayers = async () => {
  try {
    const response = await fetch(apiBaseURL + "players");
    const jsonResponse = await response.json();
    state.allPlayers = jsonResponse.data.players;
    // console.log(state.allPlayers);
    renderAllPlayers();
  } catch (error) {
    return `There was an error`;
  }
};
//------------for use when appllying players to cards in HTML-----------//
// const renderAllPlayers = () => {
//   state.allPlayers.forEach(elem => {
//     console.log('foreach', elem.id, elem.name, elem.breed);
//     return(`foreach`. elem.id, elem.name, elem.breed);
//   })
// };

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

//------------Display Detaisl onto HTML-----------------------//
const renderDetails = (playerDetails) => {
  const html = `
  <h2>${playerDetails.id}</h2>
  <p>${playerDetails.name}<p>
  <img src=${playerDetails.imageUrl} width: 150px;>
  <p>${playerDetails.breed}</p>
  <p>${playerDetails.status}</p>
  <p>${playerDetails.teamId}</p>
  <button id="backButton">Go Back to List</button>
  `;
  main.innerHTML = html;

  const backButton = document.querySelector(`#backButton`);
  console.log(backButton);
  backButton.addEventListener(`click`, () => {
    renderAllPlayers();
  });
};

//--------------------Render All Players to HTML--------------//
const renderAllPlayers = () => {
  const playerNames = state.allPlayers.map((singlePlayer) => {
    return `<div id="${singlePlayer.id}">${singlePlayer.name}  ${singlePlayer.breed}</div>`;
  });

  console.log(playerNames);

  //--------------Add elements to main-----------------------//
  const section = document.createElement(`section`);
  section.innerHTML = playerNames.join("");
  main.replaceChildren(section);
  console.log(section);

  //------------------Create Listener and loop to add to each item--------//
  const listItems = document.querySelectorAll(`div`);

  listItems.forEach((playerListItem) => {
    playerListItem.addEventListener(`click`, (event) => {
      console.log(event.target.id);
      getPlayerDetails(event.target.id);
    });
  });
};
getAllPlayers();

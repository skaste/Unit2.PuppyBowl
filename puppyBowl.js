//---------global variables------------------//
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
    // console.log(playerDetails);
    renderDetails(playerDetails);
  } catch (error) {
    console.error("Error fetching player details:", error.message);
  }
};

//------------Display Details onto HTML-----------------------//
const renderDetails = (playerDetails) => {
  const html = `
  <h2>${playerDetails.id}</h2>
  <p>${playerDetails.name}<p>
  <img src=${playerDetails.imageUrl} width 10px>
  <p>${playerDetails.breed}</p>
  <p>${playerDetails.status}</p>
  <p>${playerDetails.teamId}</p>
  <button id="backButton">Go Back to List</button>
  `;
  main.innerHTML = html;

  const backButton = document.querySelector(`#backButton`);
  // console.log(backButton);
  backButton.addEventListener(`click`, () => {
    renderAllPlayers();
  });
};

//--------------------Render All Players to HTML--------------//
const renderAllPlayers = () => {
  const playerCards = state.allPlayers.map((singlePlayer) => {
    return `
      <div class="card" id="${singlePlayer.id}">
        <div class="card-body">
          <h5 class="card-title">${singlePlayer.name}</h5>
          <p class="card-text">${singlePlayer.breed}</p>
        </div>
      </div>
    `;
  });

  // console.log(playerNames);

  //--------------Add elements to main-----------------------//
  const section = document.createElement(`section`);
    section.classList.add("card-container");
    section.innerHTML = playerCards.join("");
    main.replaceChildren(section);
  // console.log(section);

  //------------------Create Listener and loop to add to each item--------//
  const cardBodies = document.querySelectorAll(`.card-body`);

  cardBodies.forEach((cardBody) => {
    cardBody.addEventListener(`click`, (event) => {
      getPlayerDetails(event.currentTarget.parentElement.id);
    });
  });

  // const addPlayer = async () => {
  //   try {
  //     const newPlayerData = {
  //       name: document.getElementById("nameInput").value,
  //       breed: document.getElementById("breedInput").value,
  //       status: document.getElementById("statusInput").value,
  //       imageUrl: document.getElementById("imageUrlInput").value,
  //       teamId: parseInt(document.getElementById("teamIdInput").value),
  //       cohortId: parseInt(document.getElementById("cohortIdInput").value),
  //     };
  
  //     const response = await fetch(apiBaseURL + "players", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newPlayerData),
  //     });
  
  //     const responseJson = await response.json();
  //     const addedPlayer = responseJson.data.newPlayer;
  
  //     console.log("Response JSON:", responseJson);
  //     console.log("New player added:", addedPlayer);
};

// try{
//   const response = await fetch(
//     'https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: 'Stevo',
//         breed: 'Merican',
//       }),
//     }
//   );
//   const result = await response.json();
//   console.log(result);
// }catch (err) {
// console.error(err);
// }

  

getAllPlayers();

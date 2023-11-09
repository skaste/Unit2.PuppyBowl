const apiBaseURL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/`;
console.log(apiBaseURL);

const state = {
  allPlayers: [],
};

// Take all players and show them on the page
const getAllPlayers = async () => {
  try {
    const data = await fetch(apiBaseURL + "players");
    const jsonResponse = await response.json();
    state.allPlayers = jsonResponse.data;
    console.log(jsonResponse);
  } catch (error) {
    console.log(error)
  }
};

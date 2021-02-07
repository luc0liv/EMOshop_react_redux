const INITIAL_STATE = {
    activeArtist: {},
    activeSong: {},
    artist: [
      {
        id: 1,
        title: "Conheça o My Chemical Romance",
        song: [
          { id: 1, title: "Helena" },
          { id: 2, title: "Welcome to the black parade" },
        ],
      },
      {
        id: 2,
        title: "Conheça o The Used",
        song: [
          { id: 3, title: "Taste of Ink" },
          { id: 4, title: "Take it Away" },
        ],
      },
    ],
  };
  
  export default function music(state = INITIAL_STATE, action) {
    if (action.type === "TOGGLE_LESSON") {
      return {
        // um novo state é criado e retornado
        ...state,
        activeArtist: action.artist,
        activeSong: action.song,
      };
    }
    return state;
  }
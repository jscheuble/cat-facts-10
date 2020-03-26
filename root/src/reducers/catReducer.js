import catFacts from "../data";

import { FETCH_FACT, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/index";

const initialState = {
  catFacts: catFacts,
  fact: {
    text: "",
    isFavorite: false,
    id: 0
  },
  favorites: []
};

export const catReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case FETCH_FACT:
      return {
        ...state,
        fact: catFacts[Math.floor(Math.random() * catFacts.length)]
      };
    case ADD_FAVORITE:
      return {
        ...state,
        fact: {
          ...state.fact,
          isFavorite: true
        },
        favorites: [...state.favorites, catFacts[action.payload - 1]]
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        fact: {
          ...state.fact,
          isFavorite: !state.fact.isFavorite
        },
        favorites: state.favorites.filter(e => {
          return e.id !== action.payload;
        })
      };
    default:
      return state;
  }
};

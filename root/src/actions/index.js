export const FETCH_FACT = "FETCH_FACT";

export const getFact = () => {
  return { type: FETCH_FACT };
};

export const ADD_FAVORITE = "ADD_FAVORITE";

export const addFavorite = id => {
  return { type: ADD_FAVORITE, payload: id };
};

export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const removeFavorite = id => {
  return { type: REMOVE_FAVORITE, payload: id };
};

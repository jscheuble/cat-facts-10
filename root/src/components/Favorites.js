import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeFavorite } from "../actions/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  return (
    <div className="saved-favorites">
      {favorites.length ? (
        favorites.map((elem, i) => {
          return (
            <div className="fav">
              <FontAwesomeIcon
                icon={faTrash}
                className="trash"
                onClick={() => dispatch(removeFavorite(elem.id))}
              />
              <p key={i}>{elem.text}</p>
              <hr />
            </div>
          );
        })
      ) : (
        <p>Your favorites list is empty.</p>
      )}
    </div>
  );
};

export default Favorites;

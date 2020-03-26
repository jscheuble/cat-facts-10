import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addFavorite, removeFavorite } from "../actions/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as star } from "@fortawesome/free-regular-svg-icons";
import { faStar as starFilled } from "@fortawesome/free-solid-svg-icons";

const CatFact = () => {
  const fact = useSelector(state => state.fact);
  const isFavorite = useSelector(state => state.fact.isFavorite);
  const dispatch = useDispatch();
  console.log(isFavorite);
  return (
    <div className="fact">
      {fact.text}
      {fact.text.length > 1 && (
        <p className="favorites">
          Add to Favorites{" "}
          {isFavorite ? (
            <FontAwesomeIcon
              icon={starFilled}
              className="star"
              onClick={() => dispatch(removeFavorite(fact.id))}
            />
          ) : (
            <FontAwesomeIcon
              icon={star}
              className="star"
              onClick={() => dispatch(addFavorite(fact.id))}
            />
          )}
        </p>
      )}
    </div>
  );
};

export default CatFact;

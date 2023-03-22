"use client";
import { useState } from "react";

import IconStarHalf from "/public/icons-svg/star-half-stroke-solid.svg";
import IconStarFull from "/public/icons-svg/star-solid.svg";
import IconStarEmpty from "/public/icons-svg/star-regular.svg";

type StarRating = {
  ratingStar: number;
  ratingText?: boolean;
};

export function StarRating({ ratingStar, ratingText = true }: StarRating) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  let idx = 0;
  const stars = [0, 0, 0, 0, 0];
  const floor = Math.floor(ratingStar);
  const left = ratingStar - floor;

  let i = 0;
  for (i; i < floor; i++) {
    stars[i] = 2;
  }

  if (left > 0) {
    stars[i] = 1;
  }

  return (
    <div className="flex items-center p-1">
      {stars.map((star, k) => {
        idx += 1;
        return (
          <button
            key={k}
            type="button"
            className={`${idx <= (hover || ratingStar) ? "on" : "off"}`}
            onClick={() => setRating(idx)}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(rating)}
          >
            {star === 0 && <IconStarEmpty className="fill-yellow-500 w-4" />}
            {star === 1 && <IconStarHalf className="fill-yellow-500 w-4" />}
            {star === 2 && <IconStarFull className="fill-yellow-500 w-4" />}
          </button>
        );
      })}

      {ratingText && (
        <span className="ml-1 font-bold text-xs">{ratingStar}</span>
      )}
    </div>
  );
}

import React from "react";

const stars = {
  empty: "☆",
  full: "★",
};
const max_stars = 10;

export default function Popularity({ value }) {
  const fullStars = stars.full.repeat(value);
  const emptyStars = stars.empty.repeat(max_stars - value);


return <div>{fullStars}{emptyStars}</div>;
}

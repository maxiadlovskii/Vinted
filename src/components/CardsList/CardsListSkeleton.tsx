import React from "react";
import { useStyles } from "./CardsList.styles";
import { CardItemSkeleton } from "../CardItem/CardItemSkeleton";

export const CardsListSkeleton: React.FC = () => {
  const classes = useStyles();
  const cars = Array.from(Array(10).keys());
  return (
    <ul className={classes.list}>
      {cars.map((i) => (
        <li key={`_skeleton_${i}`}>
          <CardItemSkeleton />
        </li>
      ))}
    </ul>
  );
};

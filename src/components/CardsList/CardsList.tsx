import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks";
import { getDogs } from "../../api/cars";
import { CardItem } from "..";
import { Dog } from "../../interfaces/cars";
import { useStyles } from "./CardsList.styles";
import { CardsListSkeleton } from "./CardsListSkeleton";

export const CardsList: React.FC = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);

  const [{ data: dogs, isFetching }, fetchDogs] = useFetch(getDogs);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (dogs) {
      setData((cur: any[]) => [...cur, ...dogs]);
    }
  }, [setData, dogs]);
  useEffect(() => {
    const saveData = async () => {
      await fetchDogs({ query: { currentPage } });
      // setData([...dogs, ...data]);
    };
    saveData();
  }, [fetchDogs, currentPage]);

  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;
    if (bottom && !isFetching) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className={classes.wrapper} onScroll={handleScroll}>
      <ul className={classes.list}>
        {data &&
          data.map(({ breeds, id, url }: Dog) => (
            <li key={id}>
              <CardItem breeds={breeds} id={id} url={url} />
            </li>
          ))}
      </ul>
      {isFetching && <CardsListSkeleton />}
    </section>
  );
};

import { render } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { CardItem } from "../components";
import { CardsList } from "../components/CardsList/CardsList";

import { dog } from "./moks";
import { routes } from "../constants/routes";

const history = createMemoryHistory();
const route = routes.carList;
history.push(route);

const { breeds, id, url } = dog;

test("Render CardItem", () => {
  const { container } = render(
    <Router history={history}>
      <CardItem breeds={breeds} id={id} url={url} />
    </Router>
  );
  expect(container).toMatchSnapshot();
});

test("Render CardsList", () => {
  const { container } = render(
    <Router history={history}>
      <CardsList />
    </Router>
  );
  expect(container).toMatchSnapshot();
});

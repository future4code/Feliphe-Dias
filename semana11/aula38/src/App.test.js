import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("Criar Post", async () => {
  const { getByPlaceholderText } = render(<App />);
  const inputPost = getByPlaceholderText(/Novo post/i);

  fireEvent.change(inputPost, { target: { value: "test" } });
  expect(inputPost).toHaveDisplayValue("test");
});
//O teste dentro do arquivo app.test.js

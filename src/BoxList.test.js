import React from "react";
import { render, fireEvent } from "@testing-library/react";

import BoxList from "./BoxList";

it("can add a new box", function () {
  const { container, debug, getByLabelText, queryByText } = render(<BoxList />);


  // no items yet

  const heightInput = getByLabelText("Height:");
  const widthInput = getByLabelText("Width:");
  const colorInput = getByLabelText("Background Color:");
  const submitBtn = queryByText("Add a new box!");

  // fill out the form
  fireEvent.change(heightInput, { target: { value: 100 } });
  fireEvent.change(widthInput, { target: { value: 200 } });
  fireEvent.change(colorInput, { target: { value: 'green' } });
  fireEvent.click(submitBtn);


  const newBoxStyle = container.querySelector(".Box-container").getAttribute('style')
  console.log("NEWBOXSTYLE", newBoxStyle);
  expect(newBoxStyle).toEqual("height: 100px; width: 200px; background-color: green;");

});

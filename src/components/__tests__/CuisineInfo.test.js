import { render, screen } from "@testing-library/react";
import CuisineInfo from "../Restaurant_Menu/CuisineInfo";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { cartStore } from "../../utils/Redux/Store";
import Mock_Data from "../mockData/CuisineInfo.json";

describe("Should load cuisine Info", () => {
  test("should load the cuisine info image", () => {
    render(
      <Provider store={cartStore}>
        <CuisineInfo itemCards={Mock_Data} />
      </Provider>
    );

    //Query
    const lisItems = screen.findAllByRole("list");
    const listItemName = screen.findAllByRole("list", {
      value: "Chilli Chicken",
    });
    //Assertion
    expect(lisItems).toBeInTheDocument;
    expect(listItemName).toBeInTheDocument;
  });
});

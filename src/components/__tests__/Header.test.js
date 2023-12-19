import Header from "../Navbar/Header";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { cartStore } from "../../utils/Redux/Store";
import { BrowserRouter } from "react-router-dom";

describe("Testing header component", () => {
  it("should render the login button", () => {
    render(
      <BrowserRouter>
        <Provider store={cartStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //Querying
    const loginBtn = screen.getByRole("button");
    //Assertion
    expect(loginBtn).toBeInTheDocument();
  });

  it("should render initial value of cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={cartStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //Querying
    const listItem = screen.getByRole("list", { value: "Cart 0 items" });
    //Assertion
    expect(listItem).toBeInTheDocument();
  });

  it("should toggle login button to logout", () => {
    render(
      <BrowserRouter>
        <Provider store={cartStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //Querying
    const loginBtn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginBtn);
    const logOutBtn = screen.getByRole("button", { name: "Log Out" });
    //Assertion
    expect(logOutBtn).toBeInTheDocument();
  });
  
});

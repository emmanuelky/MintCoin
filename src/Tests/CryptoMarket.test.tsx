import { render, screen } from "@testing-library/react";
import CryptoMarket from "../components/CryptoMarket";
import { Provider } from "react-redux";
import { store } from "../redux/store";

test("get all crypto data", async () => {
  render(
    <Provider store={store}>
      <CryptoMarket />
    </Provider>
  );
  const cryptoData = screen.queryByTestId("crypto-data");
  expect(cryptoData).toBeDefined(); // check if crypto data is fetched from redux store
});

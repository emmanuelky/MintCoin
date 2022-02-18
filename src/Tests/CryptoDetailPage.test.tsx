import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import CryptoDetailPage from "../components/CryptoDetailPage";

test("get crypto detail page", async () => {
  render(
    <Provider store={store}>
      <CryptoDetailPage />
    </Provider>
  );
  const cryptoDetailPage = screen.queryByTestId("crypto-detail-page");
  expect(cryptoDetailPage).toBeDefined();
});

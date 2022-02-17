import { Doughnut } from "@iftek/react-chartjs-3";
import { useSelector } from "react-redux";
import { CryptoTopTenMarkets, ReduxStore } from "../Typings";

const CryptoCharts = () => {
  const cryptoTopTenMarkets = useSelector<ReduxStore, CryptoTopTenMarkets[]>(
    (state) => state.crypto.coin_top_markets
  );

  const CryptoChartData = {
    labels: cryptoTopTenMarkets
      .filter((market) => market.name !== null || market.quote !== null)
      .slice(0, 10)
      .map((market) => `${market.name} (${market.quote})`),
    datasets: [
      {
        data: cryptoTopTenMarkets
          .filter((market) => market.volume !== null)
          .slice(0, 10)
          .map((market) => market.volume),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#49AA4D",
          "#551842",
          "#F700F4",
          "#00F6F7",
          "#0000FF",
          "#9A55A8",
          "#D2DD3D",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#49AA4D",
          "#551842",
          "#F700F4",
          "#00F6F7",
          "#0000FF",
          "#9A55A8",
          "#D2DD3D",
        ],
      },
    ],
  };

  return (
    <div>
      <div>
        <Doughnut data={CryptoChartData} />
      </div>
    </div>
  );
};

export default CryptoCharts;

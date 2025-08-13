import BarGrap from "../../../components/subadmin/app/home/charts/BarGraph";
import LineGraph from "../../../components/subadmin/app/home/charts/LineGraph";
import StateCards from "../../../components/subadmin/app/home/statecards/StateCards";

const Home = () => {
  return (
    <div>
      <StateCards />
      <div>
        <LineGraph />
        <BarGrap />
      </div>
    </div>
  );
};

export default Home;

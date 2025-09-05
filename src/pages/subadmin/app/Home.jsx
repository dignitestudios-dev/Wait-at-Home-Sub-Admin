import { GraphSkeleton } from "../../../components/global/Skeleton";
import BarGrap from "../../../components/subadmin/app/home/charts/BarGraph";
import LineGraph from "../../../components/subadmin/app/home/charts/LineGraph";
import StateCards from "../../../components/subadmin/app/home/statecards/StateCards";
import { useGlobal } from "../../../hooks/api/Get";

const Home = () => {
  const { loading, data } = useGlobal("/admin/admin-dashboard");
  return (
    <div>
      <StateCards data={data} />
      <div>
        {loading ? <GraphSkeleton /> : <LineGraph graphData={data} />}

        <BarGrap graphData={data} />
      </div>
    </div>
  );
};

export default Home;

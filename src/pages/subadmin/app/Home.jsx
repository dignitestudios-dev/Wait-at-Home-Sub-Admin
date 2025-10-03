import { useEffect, useState } from "react";
import { GraphSkeleton } from "../../../components/global/Skeleton";
import BarGrap from "../../../components/subadmin/app/home/charts/BarGraph";
import LineGraph from "../../../components/subadmin/app/home/charts/LineGraph";
import StateCards from "../../../components/subadmin/app/home/statecards/StateCards";
import { useFilterGlobal } from "../../../hooks/api/Get";
import { getChatCount } from "../../../firebase/messages";

const Home = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [chatCount, setChatCount] = useState(0);

  useEffect(() => {
    const fetchChatCount = async () => {
      const count = await getChatCount();
      setChatCount(count);
    };

    fetchChatCount();
  }, []);

  const { loading, data } = useFilterGlobal(
    "/admin/admin-dashboard",
    1,
    "",
    year
  );

  const years = [];
  for (let y = 2025; y <= currentYear; y++) {
    years.push(y);
  }

  return (
    <div>
      <StateCards data={data} chatCount={chatCount} />

      <div>
        {loading ? (
          <GraphSkeleton />
        ) : (
          <LineGraph
            year={year}
            years={years}
            setYear={setYear}
            graphData={data}
          />
        )}
        <BarGrap graphData={data} selectedYear={year} />
      </div>
    </div>
  );
};

export default Home;

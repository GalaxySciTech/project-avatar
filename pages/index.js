import Loading from "@/components/Loading/Index";
import { useEffect, useState } from "react";

const Home = () => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    // setMount(true);
  }, []);
  return mount ? <></> : <Loading />;
};

export default Home;

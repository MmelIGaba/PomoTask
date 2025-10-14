import styles from "./Home.module.css";
import Timer from "../components/Timer/Timer";
import Tasks from "../components/Tasks/Tasks";
import { Analytics } from "@vercel/analytics/react"; 

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Timer />
        <Tasks />
        <Analytics />
      </div>
    </>
  );
};

export default Home;

import TitlePage from "../../components/title-page/title-page";
import BradPitt from "./images/BradPitt2.jpg";

const Home = () => {
  return (
    <main>
      <TitlePage content="Hier mijn home page" />
      <img src={BradPitt} alt="Brad Pitt" />
    </main>
  );
};
export default Home;

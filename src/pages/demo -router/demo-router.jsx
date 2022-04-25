import { Typography } from "@mui/material";
import { useEffect } from "react";
import {
  Outlet,
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import TitlePage from "../../components/title-page/title-page";

// Quand on click sur le menu de navigation(home, about, routes) que ça affiche qlqch
export const RouteInitial = () => (
  <div>
    <Typography component="h3" variant="h6">
      Retour a la page home
    </Typography>
  </div>
);
export const RouteChoiceA = () => (
  <div>
    <Typography component="h3" variant="h6">
      Choice-A
    </Typography>
  </div>
);
export const RouteChoiceB = () => (
  <div>
    <Typography component="h3" variant="h6">
      Choice-B
    </Typography>
  </div>
);
export const RouteNotFound = () => (
  <div>
    <Typography component="h3" variant="h6">
      Vous me trouverez pas ☺
    </Typography>
  </div>
);
export const RouteQuery = () => {
  const [seachParams] = useSearchParams();

  const firstname = seachParams.get("firstname");
  const lastname = seachParams.get("lastname");
  return (
    <div>
      <Typography component="h3" variant="h6">
        les paramtres query sont : {firstname} {lastname}
      </Typography>
    </div>
  );
};

export const RouteParam = () => {
  const id = useParams();
  const navigate = useNavigate();

  //   Tips pour faire une redirection en cas d'erreur de parametre
  useEffect(() => {
    if (/^[0-9]+$/.test(id)) {
      navigate("../error", { replace: true });
    }
  }, [id]);

  return (
    <div>
      <Typography component="h3" variant="h6">
        le paramètre est {id}
      </Typography>
    </div>
  );
};

const DemoRouter = () => {
  return (
    <main>
      <TitlePage content="Demo: Vive Macron avec plein de vote blanc" />
      <ul>
        <li>
          <Link to="">Initial</Link>
        </li>
        <li>
          <Link to="choice-A">ChoiceA</Link>
        </li>
        <li>
          <Link to="choice-b">Choice-B</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">param</Link>
        </li>
        <li>
          <Link to="query/?firstname=Zaza&lastname=Vanderquack">
            Query: firstname=Zaza &amp; lastname=Vanderquack
          </Link>
        </li>
        <li>
          <Link to="query/?firstname=Guish&lastname=Duish">
            Query: firstname=Guish &amp; lastname=Duish
          </Link>
        </li>
        <li>
          <Link to="query/?firstname=olivier&lastname=delvaux">
            Query: firstname=olivier &amp; lastname=delvaux
          </Link>
        </li>
      </ul>
      <Outlet />
      {/* La balise outlet permet d'afficher si l'element recherché possède un children */}
    </main>
  );
};
export default DemoRouter;

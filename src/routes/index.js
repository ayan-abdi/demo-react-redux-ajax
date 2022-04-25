import About from "../pages/about/about";
import DemoRouter, {
  RouteChoiceA,
  RouteChoiceB,
  RouteInitial,
  RouteNotFound,
  RouteParam,
  RouteQuery,
} from "../pages/demo -router/demo-router";
import Home from "../pages/home/home";

export const appRoute = [
  { path: "", element: <Home /> },
  { path: "About", element: <About /> }, //Dans l'url si on met /About il affiche l'element about
  {
    path: "Router",
    element: <DemoRouter />,
    children: [
      { index: true, element: <RouteInitial /> },
      { path: "choice-A", element: <RouteChoiceA /> },
      { path: "choice-B", element: <RouteChoiceB /> },
      { path: "param/:id", element: <RouteParam /> },
      { path: "query", element: <RouteQuery /> },
      { path: "*", element: <RouteNotFound /> },
    ],
  },
];
// les path ici permettent de mener vers le link avec l'attribut to=''

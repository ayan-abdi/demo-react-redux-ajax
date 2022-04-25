// import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./containers/main-header/main-header";
import MainFooter from "./containers/main-footer/main-footer";
import { Container, CssBaseline } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { appRoute } from "./routes";
import { Box } from "@mui/system";

function App() {
  const routes = useRoutes(appRoute);
  return (
    <div className="App">
      <CssBaseline />
      <Box display="flex" height="100vh" flexDirection="column">
        <MainHeader />
        <Container>{routes}</Container>
      </Box>

      <MainFooter />
    </div>
  );
}

export default App;

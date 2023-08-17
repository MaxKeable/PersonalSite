import { ThemeProvider } from "@mui/material";
import Landing from "./components/landing";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

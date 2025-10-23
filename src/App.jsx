import { BrowserRouter, Route, Routes } from "react-router";

// Import pages
import HomeMain from "@pages/Home/HomeMain";

// Theme provider
import { ThemeProvider } from "@emotion/react";
import { theme } from "@styles/theme";
import GlobalStyles from "@styles/global";
import ResetStyles from "@styles/reset";

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeMain />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
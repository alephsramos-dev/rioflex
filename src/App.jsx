import { BrowserRouter, Route, Routes } from "react-router";

// Import pages
import HomeMain from "@pages/Home/HomeMain";

import AOS from "aos";
import "aos/dist/aos.css";

// Theme provider
import { ThemeProvider } from "@emotion/react";
import { theme } from "@styles/theme";
import GlobalStyles from "@styles/global";
import ResetStyles from "@styles/reset";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      mirror: false,
      offset: 20,
    });
  }, [])

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
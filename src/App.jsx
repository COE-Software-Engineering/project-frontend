import "./App.css";
import { ConfigProvider, theme } from "antd";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/theme/globalStyles";
import { darkTheme, defaultTheme, lightTheme } from "./shared/theme/theme";
import { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./modules/landingpage";
import MainRoutes from "./modules/main/mainRoutes";

function App() {
  const [appTheme] = useState("dark");

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: `${defaultTheme.primaryColor[400]}`,
            borderRadius: 3,
            fontFamily: "Montserrat,sans-serif",
            boxShadow: "none",
          },
          components: {
            Calendar: {
              colorBgContainer: "transparent",
              fontSize: "10px",
              fontSizeSM: "10px",
              fontSizeLG: "10px",
            },
          },

          algorithm:
            appTheme === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
        }}
      >
        <ThemeProvider theme={appTheme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <BrowserRouter>
            <Suspense>
              <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/main/*" element={<MainRoutes />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
}

export default App;

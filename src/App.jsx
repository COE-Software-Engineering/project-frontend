import { ConfigProvider, theme } from "antd";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/theme/globalStyles";
import { darkTheme, defaultTheme, lightTheme } from "./shared/theme/theme";
import { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoutes from "./modules/main/mainRoutes";
import Landingpage from "./modules/landing/landingpage";
import LecturerSignup from "./modules/landing/LecturerSignup";
import StudentSignup from "./modules/landing/StudentSignup";

function App() {
  const [appTheme] = useState("dark");

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: `${defaultTheme.primaryColor[400]}`,
            borderRadius: 3,
            fontFamily: "Manrope,sans-serif",
            boxShadow: "none",
          },
          components: {
            Calendar: {
              colorBgContainer: "transparent",
              fontSize: "10px",
              fontSizeSM: "10px",
              fontSizeLG: "10px",
            },
            Segmented: {
              fontSize: "12px",
            },
            Dropdown: {
              colorBgElevated: "transparent",
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
                <Route path="/lecturer-signup" element={<LecturerSignup />} />
                <Route path="/student-signup" element={<StudentSignup />} />
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

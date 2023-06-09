import "./App.css";
import { ConfigProvider, theme } from "antd";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/theme/globalStyles";
import { darkTheme, defaultTheme, lightTheme } from "./shared/theme/theme";
import { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentRoutes from "./modules/student/StudentRoutes";
import LecturerRoutes from "./modules/lecturer/lecturerRoutes";
import Landingpage from "./modules/landingpage";

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
                <Route path="/students/*" element={<StudentRoutes />} />
                <Route path="/lecturers/*" element={<LecturerRoutes />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
}

export default App;

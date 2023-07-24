import { ConfigProvider, theme } from "antd";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/theme/globalStyles";
import { darkTheme, defaultTheme, lightTheme } from "./shared/theme/theme";
import { Suspense, lazy, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LIGHTTHEME } from "./shared/utils/constants";
import Loader from "./shared/components/Loader";
import { GlobalContext } from "./shared/context/context";
import { AnimatePresence } from "framer-motion";
import PageNotFound from "./modules/pageNotFound";
import Signup from "./modules/landing/Signup";

const LandingPage = lazy(() => import("./modules/landing/landingpage"));
const MainRoutes = lazy(() => import("./modules/main/mainRoutes"));

function App() {
  const { appTheme } = useContext(GlobalContext);
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: `${defaultTheme.primaryColor}`,
            borderRadius: 3,
            fontFamily: "Poppins,sans-serif",
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
              zIndexPopup: 99,
            },
            Popconfirm: {
              colorBgElevated: "transparent",
              colorBgContainer: "transparent",
            },
          },

          algorithm:
            appTheme === LIGHTTHEME
              ? theme.defaultAlgorithm
              : theme.darkAlgorithm,
        }}
      >
        <ThemeProvider theme={appTheme === LIGHTTHEME ? lightTheme : darkTheme}>
          <GlobalStyles />
          <AnimatePresence mode="wait">
            <BrowserRouter>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/signup/:userType" element={<Signup />} />
                  <Route path="/main/*" element={<MainRoutes />} />
                  <Route path="/*" element={<PageNotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </AnimatePresence>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
}

export default App;

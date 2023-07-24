import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalContainer from "../../shared/components/GlobalContainer";
import { Suspense, lazy, useContext, useEffect } from "react";
import Loader from "../../shared/components/Loader";
import AnimationLayout from "../../shared/components/AnimationLayout";
import { GlobalContext } from "../../shared/context/context";
import Settings from "./settings/settings";

const Dashboard = lazy(() => import("./dashboard/dashboard"));
const Profile = lazy(() => import("./profile/profile"));
const Courses = lazy(() => import("./courses/courses"));
const Course = lazy(() => import("./courses/course"));
const Files = lazy(() => import("./files/files"));
const Announcements = lazy(() => import("./announcements/announcements"));

const MainRoutes = () => {
  const { currentUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    !currentUser && navigate(-1);
  });

  return (
    <AnimationLayout>
      <GlobalContainer
        routesComponent={
          <div style={{ height: "100%" }}>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/*" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:courseId" element={<Course />} />
                <Route path="/files" element={<Files />} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Suspense>
          </div>
        }
      />
    </AnimationLayout>
  );
};

export default MainRoutes;

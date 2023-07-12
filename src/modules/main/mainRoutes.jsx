import { Route, Routes } from "react-router-dom";
import GlobalContainer from "../../shared/components/GlobalContainer";
import { Suspense, lazy } from "react";
import Loader from "../../shared/components/Loader";

const Dashboard = lazy(() => import("./dashboard/dashboard"));
const Profile = lazy(() => import("./profile/profile"));
const Courses = lazy(() => import("./courses/courses"));
const Course = lazy(() => import("./courses/course"));
const Files = lazy(() => import("./files/files"));
const Announcements = lazy(() => import("./announcements/announcements"));

const MainRoutes = () => {
  return (
    <GlobalContainer
      routesComponent={
        <div style={{ height: "100%" }}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<Course />} />
              <Route path="/files" element={<Files />} />
              <Route path="/announcements" element={<Announcements />} />
            </Routes>
          </Suspense>
        </div>
      }
    />
  );
};

export default MainRoutes;

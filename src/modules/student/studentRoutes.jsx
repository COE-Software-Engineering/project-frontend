import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import GlobalContainer from "../../shared/components/GlobalContainer";
import Courses from "./courses/courses";
import Files from "./files/files";
import Course from "./courses/course";
import Profile from "./profile/profile";

const StudentRoutes = () => {
  return (
    <GlobalContainer
      routesComponent={
        <div style={{ height: "100%" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<Course />} />
            <Route path="/files" element={<Files />} />
          </Routes>
        </div>
      }
    />
  );
};

export default StudentRoutes;

import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import GlobalContainer from "../../shared/components/GlobalContainer";
import Courses from "./courses/courses";
import Files from "./files/files";

const StudentRoutes = () => {
  return (
    <GlobalContainer
      routesComponent={
        <div style={{ height: "100%" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/files" element={<Files />} />
          </Routes>
        </div>
      }
    />
  );
};

export default StudentRoutes;

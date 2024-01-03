import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ subjects, quizzes, newId }) => {
  return (
    <div>
      <Sidebar subjects={subjects} quizzes={quizzes} newId={newId} />
      <Outlet />
    </div>
  );
};

export default MainLayout;

import "./App.css";
// import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import AnnouncementsPage from "./Components/Announcements/AnnouncementsPage";
import QuizesPages from "./Components/Quizes/Quizes";
import AnnouncementForm from "./Components/Announcements/CreateAnnouncements";
import QuizForm from "./Components/Quizes/CreateQuiz";
import { ToastContainer } from "react-toastify";
import AnnouncementFormEdit from "./Components/Announcements/EditAnnouncement";
import QuizFormEdit from "./Components/Quizes/EditQuiz";
import requireAuth from "./Components/Auth/requireAuth";
import AuthPage from "./Components/Auth/Auth";

function App() {
  // const { t, i18n } = useTranslation();
  const ProtecedHome = requireAuth(Home);
  const ProtecedAnnouncements = requireAuth(AnnouncementsPage);
  const ProtecedQuizes = requireAuth(QuizesPages);
  const ProtecedAnnouncementForm = requireAuth(AnnouncementForm);
  const ProtecedAnnouncementFormEdit = requireAuth(AnnouncementFormEdit);
  const ProtecedQuizForm = requireAuth(QuizForm);
  const ProtecedQuizFormEdit = requireAuth(QuizFormEdit);
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<ProtecedHome />} />
          <Route path="/announcements" element={<ProtecedAnnouncements />} />
          <Route
            path="/create-announcements"
            element={<ProtecedAnnouncementForm />}
          />
          <Route
            path="/announcements/:id"
            element={<ProtecedAnnouncementFormEdit />}
          />
          <Route path="/quizzes" element={<ProtecedQuizes />} />
          <Route path="/create-quiz" element={<ProtecedQuizForm />} />
          <Route path="/quizzes/:id" element={<ProtecedQuizFormEdit />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;

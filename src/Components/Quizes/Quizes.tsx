import { useTranslation } from "react-i18next";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import QuizesCard from "./QuizesCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/loadingSlice";
import { deleteQuiz, getQuizzes } from "../../api/Quizzes.api";
import { removeQuiz, setQuizzes } from "./QuizzesSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
export default function QuizesPages() {
  const { t } = useTranslation();
  const dipatch = useDispatch();
  const quizzes = useSelector((state: RootState) => state.quizzes.items);
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        dipatch(setLoading(true));
        const result = await getQuizzes();
        if (Array.isArray(result)) dipatch(setQuizzes(result));
        dipatch(setLoading(false));
      } catch (error) {
        dipatch(setLoading(false));
      }
    };

    fetchQuizzes();
  }, [dipatch]);

  const handleDelete = async (id: string) => {
    try {
      dipatch(setLoading(true));
      const result = await deleteQuiz(id);
      if (result) {
        dipatch(removeQuiz(id));
        dipatch(setLoading(false));
      }
      dipatch(setLoading(false));
    } catch (error) {
      dipatch(setLoading(false));
    }
  };

  return (
    <div className="AnnouncementsPage">
      {" "}
      <div className="Announcements_header_main">
        <h1>All Quizzes</h1>
        <a href="/create-quiz" className="Main_button">
          {t("Create")}
        </a>
      </div>
      {quizzes.map((quiz) => (
        <div className="Announcements_container">
          <QuizesCard
            title={quiz.title}
            topic={quiz.topic}
            date={new Date(quiz.createdAt!)}
            course={quiz.course}
            link={`/quizzes/${quiz._id}`}
            type={quiz.type}
          />
          <div className="icons_container">
            <a href={`/quizzes/${quiz._id}`} className="Icon_link">
              <SettingsIcon className="icon" />
            </a>
            <DeleteForeverIcon
              onClick={() => handleDelete(quiz._id!)}
              className="icon red_hover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

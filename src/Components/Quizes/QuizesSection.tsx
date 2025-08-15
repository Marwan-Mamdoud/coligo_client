import { useTranslation } from "react-i18next";
import HeaderCard from "../Hero/HeaderCard";
import QuizesCard from "./QuizesCard";
import { Quiz } from "../../types";
type QuizzesProps = {
  quizzes: Quiz[];
};

export default function QuizesSection({ quizzes }: QuizzesProps) {
  const { t } = useTranslation();

  return (
    <section className="Quizes_section">
      <HeaderCard
        link="/quizzes"
        title={t("quizzes_title")}
        desc={t("quizzes_desc")}
      />
      <div className="" style={{ marginTop: "5px" }}></div>
      {quizzes.map((quiz: Quiz) => {
        return (
          <QuizesCard
            title={quiz.title}
            topic={quiz.topic}
            date={new Date(quiz.createdAt!)}
            course={quiz.course}
            link={`/quizzes/${quiz._id}`}
            type={quiz.type}
          />
        );
      })}
    </section>
  );
}

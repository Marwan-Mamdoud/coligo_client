import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import { useTranslation } from "react-i18next";
interface Props {
  title: string;
  topic: string;
  date: Date;
  course: string;
  link: string;
  type: string;
}
export default function QuizesCard({
  title,
  topic,
  course,
  date,
  link,
  type,
}: Props) {
  const { t } = useTranslation();
  const formattedDate = new Date(date).toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="Quizes_card">
      <div className="Quiz_header">
        {type === "assignment" ? (
          <AssignmentTurnedInOutlinedIcon className="icon" />
        ) : (
          <HourglassTopOutlinedIcon className="icon" />
        )}
        <span>{title}</span>
      </div>
      <div className="Quiz_topic">
        <span> {t("course")}:</span> {course}
      </div>
      <div className="Quiz_topic ">
        <span className="topic">{t("topic")}:</span>
        {topic}
      </div>
      <div className="Quiz_topic">
        <span>{t("date")}:</span> {formattedDate}
      </div>
      <a href={link} className="Main_button outlite_btn">
        {type === "assignment" ? t("solve_assignment") : t("start_quiz")}
      </a>
    </div>
  );
}

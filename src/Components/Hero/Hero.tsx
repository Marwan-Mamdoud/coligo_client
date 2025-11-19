import Announcements from "../Announcements/Announcements";
import HeroBadge from "./Hero_badge";
import QuizesSection from "../Quizes/QuizesSection";
import { useEffect, useState } from "react";
import { getMain } from "../../api/Mian.api";
import { Announcement, Quiz } from "../../types";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/loadingSlice";

export default function Hero() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMainData = async () => {
      try {
        dispatch(setLoading(true));
        const result = await getMain();
        if (result && typeof result === "object") {
          setQuizzes(result.quizzes);
          setAnnouncements(result.announcements);
        }
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));
      }
    };
    fetchMainData();
  }, [dispatch]);

  return (
    <section className="Hero_main">
      <HeroBadge />
      <div className="Hero_content">
        <Announcements announcements={announcements || []} />
        <QuizesSection quizzes={quizzes || []} />
      </div>
    </section>
  );
}

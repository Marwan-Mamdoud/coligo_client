import { useEffect, useState } from "react";
import { getQuizById, updateQuiz } from "../../api/Quizzes.api";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/loadingSlice";
import { useParams } from "react-router-dom";
import { editQuiz } from "./QuizzesSlice";

export default function QuizFormEdit() {
  const { id } = useParams<{ id: string }>();
  const dipatch = useDispatch();
  const [formData, setFormData] = useState({
    course: "",
    title: "",
    topic: "",
    type: "quiz",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dipatch(setLoading(true));
      const result = await updateQuiz(id!, formData);

      if (
        result &&
        typeof result === "object" &&
        !Array.isArray(result) &&
        "course" in result &&
        "title" in result &&
        "topic" in result &&
        "type" in result
      ) {
        dipatch(editQuiz(result));
        dipatch(setLoading(false));
      }
      dipatch(setLoading(false));
    } catch (error) {
      dipatch(setLoading(false));
    }
  };

  useEffect(() => {
    // Fetch The quiz
    const fetchQuiz = async () => {
      try {
        dipatch(setLoading(true));
        const result = await getQuizById(id!);
        if (
          result &&
          typeof result === "object" &&
          !Array.isArray(result) &&
          "course" in result &&
          "title" in result &&
          "topic" in result &&
          "type" in result
        ) {
          setFormData({
            course: result.course,
            title: result.title,
            topic: result.topic,
            type: result.type,
          });
          dipatch(setLoading(false));
        }
        dipatch(setLoading(false));
      } catch (error) {
        dipatch(setLoading(false));
      }
    };

    fetchQuiz();
  }, [id, dipatch]);

  return (
    <div>
      <form className="announcement-form" onSubmit={handleSubmit}>
        <h1>Update Quiz / Assignment</h1>
        <label>Course</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Enter course name"
          required
        />

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter announcement title"
          required
        />

        <label>Topic</label>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="Enter topic"
          required
        />

        <label>Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="quiz">Quiz</option>
          <option value="assignment">Assignment</option>
        </select>

        <button type="submit">Update Quiz</button>
      </form>
    </div>
  );
}

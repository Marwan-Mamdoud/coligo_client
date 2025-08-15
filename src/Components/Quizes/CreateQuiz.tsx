import { useState } from "react";
import { createQuiz } from "../../api/Quizzes.api";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/loadingSlice";

export default function QuizForm() {
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
      const result = await createQuiz(formData);
      if (result) {
        dipatch(setLoading(false));
      }
      dipatch(setLoading(false));
    } catch (error) {
      dipatch(setLoading(false));
    }
  };

  return (
    <div>
      <form className="announcement-form" onSubmit={handleSubmit}>
        <h1>Create Quiz / Assignment</h1>
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

        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
}

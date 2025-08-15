import { useState } from "react";
import { createAnnouncement } from "../../api/Announcements.api";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/loadingSlice";
import { toast } from "react-toastify";

export default function AnnouncementForm() {
  const dipatch = useDispatch();
  const [formData, setFormData] = useState({
    description: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dipatch(setLoading(true));
      const result = await createAnnouncement(formData);
      if (result) {
        dipatch(setLoading(false));
      }
      console.log(result);
      dipatch(setLoading(false));
    } catch (error: any) {
      dipatch(setLoading(false));
      toast.error(error);
    }
  };

  return (
    <form className="announcement-form" onSubmit={handleSubmit}>
      <h1>Create Announcement</h1>
      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Write announcement description..."
        required
      />

      <label>Category</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Enter category..."
        required
      />
      <button type="submit">Create Announcement</button>
    </form>
  );
}

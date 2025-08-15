import { useEffect, useState } from "react";
import {
  getAnnouncementById,
  updateAnnouncement,
} from "../../api/Announcements.api";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/loadingSlice";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { editAnnouncement } from "./AnnouncementsSlice";

export default function AnnouncementFormEdit() {
  const { id } = useParams<{ id: string }>();
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
      const result = await updateAnnouncement(id!, formData);
      if (result) {
        if (
          result &&
          typeof result === "object" &&
          !Array.isArray(result) &&
          "category" in result &&
          "description" in result
        ) {
          dipatch(editAnnouncement(result));
        }
        dipatch(setLoading(false));
      }
      console.log(result);
      dipatch(setLoading(false));
    } catch (error: any) {
      dipatch(setLoading(false));
      toast.error(error);
    }
  };

  useEffect(() => {
    const getAnnouncement = async (): Promise<void> => {
      dipatch(setLoading(true));
      const result = await getAnnouncementById(id!);
      if (
        result &&
        typeof result === "object" &&
        !Array.isArray(result) &&
        "category" in result &&
        "description" in result
      ) {
        setFormData({
          category: result.category,
          description: result.description,
        });
        dipatch(setLoading(false));
      }
      console.log(result);
      dipatch(setLoading(false));
    };
    getAnnouncement();
    dipatch(setLoading(false));
  }, [dipatch, id]);

  return (
    <form className="announcement-form" onSubmit={handleSubmit}>
      <h1>Update Announcement</h1>
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
      <button type="submit">Edit Announcement</button>
    </form>
  );
}

import { useTranslation } from "react-i18next";
import AnnouncementCard from "./Announcemnt_card";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useEffect } from "react";
import {
  deleteAnnouncement,
  getAnnouncements,
} from "../../api/Announcements.api";
import { useDispatch } from "react-redux";
import { removeAnnouncement, setAnnouncements } from "./AnnouncementsSlice";
import { setLoading } from "../../store/loadingSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function AnnouncementsPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const announcements = useSelector(
    (state: RootState) => state.announcements.items
  );

  useEffect(() => {
    const getAllData = async (): Promise<void> => {
      try {
        dispatch(setLoading(true));
        const result = await getAnnouncements();
        if (result) {
          if (Array.isArray(result)) {
            dispatch(setAnnouncements(result));
            dispatch(setLoading(false));
          }
        }
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));
      }
    };
    getAllData();
  }, [dispatch]);

  const handleDelete = async (id: string): Promise<void> => {
    try {
      dispatch(setLoading(true));
      const result = await deleteAnnouncement(id);
      if (result) {
        dispatch(removeAnnouncement(id));
        dispatch(setLoading(false));
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="AnnouncementsPage">
      <div className="Announcements_header_main">
        <h1>All Announcements</h1>
        <a href="/create-announcements" className="Main_button">
          {t("Create")}
        </a>
      </div>
      {announcements?.map((announcement) => (
        <div className="Announcements_container">
          <AnnouncementCard
            link={`/announcements/${announcement._id}`}
            user={"Events Manager"}
            desc={announcement.description}
            image={
              "https://i.pinimg.com/1200x/f9/60/a6/f960a69943d403c421c85108f6dcd185.jpg"
            }
            category={announcement.category}
          />
          <div className="icons_container">
            <a
              href={`/announcements/${announcement._id}`}
              className="Icon_link"
            >
              <SettingsIcon className="icon" />
            </a>
            <DeleteForeverIcon
              onClick={() => {
                handleDelete(announcement._id!);
              }}
              className="icon red_hover"
            />
          </div>
        </div>
      ))}

      {/* <div className="Announcements"></div> */}
    </div>
  );
}

import { Announcement } from "../../types";
import HeaderCard from "../Hero/HeaderCard";
import AnnouncementCard from "./Announcemnt_card";
import { useTranslation } from "react-i18next";

type AnnouncementsProps = {
  announcements: Announcement[];
};

export default function Announcements({ announcements }: AnnouncementsProps) {
  const { t } = useTranslation();
  return (
    <div className="Announcements_main">
      <HeaderCard
        link="/announcements"
        title={t("Announcements")}
        desc={t("Announcements_desc")}
      />
      <div className="Announcements_content">
        {announcements.map((announcement: Announcement) => {
          return (
            <AnnouncementCard
              key={announcement._id}
              link={`/announcements/${announcement._id}`}
              user={"Events Manager"}
              desc={announcement.description}
              image={
                "https://i.pinimg.com/1200x/f9/60/a6/f960a69943d403c421c85108f6dcd185.jpg"
              }
              category={announcement.category}
            />
          );
        })}
      </div>
    </div>
  );
}

interface Props {
  link?: string;
  user: string;
  desc: string;
  image: string;
  category: string;
}
export default function AnnouncementCard({
  link,
  user,
  desc,
  image,
  category,
}: Props) {
  return (
    <a href={link} className="Announcement_card">
      <div className="Announcements_image_container">
        <img src={image} alt="" className="Image_full" />
      </div>
      <div className="Announcements_content">
        <h1 className="Announcements_user">{user}</h1>
        <p className="Announcements_category">{category}</p>
      </div>
      <div className="Light_column" />
      <p className="Announcements_desc">{desc}</p>
    </a>
  );
}

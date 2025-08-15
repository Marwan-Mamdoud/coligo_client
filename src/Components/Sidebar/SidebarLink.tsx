import { IconType } from "react-icons";

type SidebarLinkProps = {
  link: string;
  text: string;
  icon: IconType | any;
};

export default function SidebarLink({
  link = "#",
  text,
  icon: Icon,
}: SidebarLinkProps) {
  return (
    <a href={link} className="Sidebar_link">
      <Icon fontSize="large" className="Sidebar_icon" />
      {text}
    </a>
  );
}

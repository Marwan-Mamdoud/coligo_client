import { useTranslation } from "react-i18next";
import SidebarLink from "./SidebarLink";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { closeSidebar, toggleSidebar } from "./sidebarSlice";
export default function Sidebar() {
  const { t } = useTranslation();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => dispatch(closeSidebar())}
        className={isOpen ? `overlay overlay_open` : `overlay `}
      ></div>
      <div
        className={
          isOpen
            ? `Sidebar_main gradient-bg-tall Sidebar_main_open`
            : `Sidebar_main gradient-bg-tall`
        }
      >
        <h1 className="Sidebar_title">
          <a
            onClick={(e) => {
              dispatch(toggleSidebar());
            }}
            href="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {t("MainName")}
          </a>
        </h1>
        <div
          onClick={() => dispatch(toggleSidebar())}
          className="Sidebar_links"
        >
          <SidebarLink link="/" text={t("Dashboard")} icon={HomeIcon} />
          <SidebarLink
            link="/Quizzes"
            text={t("Schedule")}
            icon={CalendarMonthIcon}
          />
          <SidebarLink link="/" text={t("Courses")} icon={MenuBookIcon} />
          <SidebarLink link="/" text={t("Gradebook")} icon={SchoolIcon} />
          <SidebarLink link="/" text={t("Performance")} icon={QueryStatsIcon} />
          <SidebarLink
            link="/Announcements"
            text={t("Announcements")}
            icon={CampaignIcon}
          />
          <div
            onClick={(e) => e.stopPropagation()}
            className="Navbar_search_container Show"
          >
            <SearchIcon className="Navbar_search_icon" />
            <input type="text" placeholder="Search" className="Navbar_search" />
          </div>
        </div>
      </div>
    </>
  );
}

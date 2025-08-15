import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../Sidebar/sidebarSlice";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "../Auth/authSlice";
import GTranslateIcon from "@mui/icons-material/GTranslate";
export default function Navbar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  return (
    <div className="Navbar_main">
      <div className="Navbar_Container">
        <MenuIcon
          onClick={() => dispatch(toggleSidebar())}
          className="Navbar_menu"
        />
        <h1 className="Navbar_title">
          {t("Navbar_title", { name: "Marwan" })}
        </h1>
        <div className="Navbar_Content">
          <div className="Navbar_search_container">
            <SearchIcon className="Navbar_search_icon" />
            <input type="text" placeholder="Search" className="Navbar_search" />
          </div>
          <GTranslateIcon
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
            }
            className="icon"
          />
          <div className="icon_container">
            <div className="circle_container">
              <div className="circle">5</div>
            </div>
            <NotificationsIcon className="icon" />
          </div>
          <div className="icon_container">
            <div className="circle_container">
              <div className="circle">3</div>
            </div>
            <EmailIcon className="icon" />
          </div>
          <img
            onClick={() => {
              dispatch(logout());
            }}
            src="https://i.pinimg.com/736x/64/c6/01/64c6010e2728200b85e1adc59bfbaef7.jpg"
            alt="user"
            className="Navbar_avatar"
          />
        </div>
      </div>
    </div>
  );
}

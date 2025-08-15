import { useTranslation } from "react-i18next";

export default function HeroBadge() {
  const { t } = useTranslation();
  return (
    <div className="Hero_badge">
      <div className="Hero_badge_content">
        <h1 className="Hero_badge_title text-gradient">{t("Exams_time")}</h1>
        <p className="Hero_badge_desc">{t("here_we_are_desc")}</p>
        <p className="Hero_badge_desc_2">
          &quot;{t("nothing_happens_desc")}&quot; - {t("diogenes_laertius")}
        </p>
        <button className="Main_button">{t("view_exmas_tips")}</button>
      </div>
      <div className="Hero_badge_image">
        <img src="/assets/badge_img.png" alt="" className="Image_full" />
      </div>
    </div>
  );
}

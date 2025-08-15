import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  desc: string;
  link: string;
}
export default function HeaderCard({ link, title, desc }: Props) {
  const { t } = useTranslation();
  return (
    <div className="Section_head">
      <div className="Section_title">
        <p className="Section_title_header">{title}</p>
        <a href={link} className="Section_title_button">
          {t("all")}
        </a>
      </div>
      <p className="Section_desc">{desc}</p>
    </div>
  );
}

import { Popover } from "antd";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { LanguageItem } from "./MainHeader.styled";
import enIcon from "./assets/en.svg";
import viIcon from "./assets/vi.svg";
import world from "./assets/world.svg";

interface TLibs {
  t: TFunction<"translation", undefined>;
}

const MainHeader = () => {
  const { i18n, t } = useTranslation();

  const languageItems = [
    {
      value: "en",
      label: t("language.en"),
      icon: enIcon,
    },
    {
      value: "vi",
      label: t("language.vi"),
      icon: viIcon,
    },
  ];

  const languageContent = (t: TLibs["t"], i18n: i18n) => (
    <div>
      {languageItems.map(({ icon, label, value }) => (
        <LanguageItem
          $isCurrent={i18n.language === value}
          key={value}
          onClick={() => i18n.changeLanguage(value)}
        >
          <img src={icon} alt={label} />
          <span>{label}</span>
        </LanguageItem>
      ))}
    </div>
  );

  return (
    <div className="h-[35px] flex items-center justify-end mr-5">
      <Popover
        content={languageContent(t, i18n)}
        title={t("language.title")}
        placement="bottom"
        overlayClassName="language-dropdown"
        className="h-[20px]"
      >
        <img src={world} alt="world" />
      </Popover>
    </div>
  );
};

export default MainHeader;

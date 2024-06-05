import { useTranslation } from "react-i18next";

const useCombineTranslation = () => {
  const { t } = useTranslation();
  const { t: tMenu } = useTranslation("translation", {
    keyPrefix: "menu",
  });
  const { t: tLanguage } = useTranslation("translation", {
    keyPrefix: "language",
  });
  const { t: tChartTab } = useTranslation("translation", {
    keyPrefix: "chartTab",
  });
  const { t: tSemester } = useTranslation("translation", {
    keyPrefix: "semester",
  });
  const { t: tSubject } = useTranslation("translation", {
    keyPrefix: "subject",
  });
  return {
    t,
    tMenu,
    tLanguage,
    tChartTab,
    tSemester,
    tSubject,
  };
};

export default useCombineTranslation;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import viTranslation from "./vi/main.json";
import enTranslation from "./en/main.json";

i18n
  .use(initReactI18next) // sử dụng react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation, // dữ liệu dịch cho tiếng Anh
      },
      vi: {
        translation: viTranslation, // dữ liệu dịch cho tiếng Việt
      },
    },
    lng: "vi", // ngôn ngữ mặc định
    fallbackLng: "en", // ngôn ngữ dự phòng
    interpolation: {
      escapeValue: false, // không chuyển đổi các giá trị đặc biệt (VD: HTML tags)
    },
    react: {
      wait: true,
    },
  });

export default i18n;

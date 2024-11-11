// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_en from "./public/locales/en/translation.json"
import translation_vn from "./public/locales/vn/translation.json"

i18n
    .use(initReactI18next) // Kết nối với react-i18next
    .init({
        resources: {
            en: {
                translation: translation_en
            },
            vn: {
                translation: translation_vn
            },
        },
        lng: 'en', // Ngôn ngữ mặc định
        fallbackLng: 'en', // Nếu không tìm thấy ngôn ngữ thì fallback sang tiếng Anh
        interpolation: {
            escapeValue: false, // React đã xử lý XSS, không cần escape
        },
    });

export default i18n;

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "zh",
    locales: ["en", "zh"],
  },
  fallbackLng: {
    default: ['zh', 'en'],
  },
  nonExplicitSupportedLngs: true,
  reloadOnPrerender: true,
};

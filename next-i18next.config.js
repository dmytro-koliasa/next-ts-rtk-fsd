/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'en'],
    localeDetection: false,
  },
  defaultNS: 'common',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};